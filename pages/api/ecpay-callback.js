// 綠界 API 商店相關參數
const MERCHANT_ID = process.env.MERCHANT_ID;
const HASH_KEY = process.env.HASH_KEY;
const HASH_IV = process.env.HASH_IV;
import config from '../../config/config';
const pool = new sql.ConnectionPool(config);

export default async function ecpaycallback(req, res) {
  if (req.method === 'POST') {

    const data = req.body
    const getCheckMacValue = computeCheckMacValue(data);
    const MerchantTradeNo = data.MerchantTradeNo
    const RtnCode = data.RtnCode
    const RtnMsg = data.RtnMsg
    const checkMacValue = data.CheckMacValue



    if (checkMacValue == getCheckMacValue) {
      console.log('Payment succeeded:', MerchantTradeNo)
      try {
        await pool.connect();
        const request = new sql.Request(pool);
        request.input('MerchantTradeNo', sql.VarChar, MerchantTradeNo);
        request.input('RtnCode', sql.VarChar, RtnCode);
        request.input('RtnMsg', sql.VarChar, RtnMsg);
        request.input('ecpay_callback_datetime', sql.DateTime, new Date());
        const result = await request.query(`
      INSERT INTO [accentcoach_epaycallback] (MerchantTradeNo, RtnCode, RtnMsg, ecpay_callback_datetime)
      VALUES ( @MerchantTradeNo, @RtnCode, @RtnMsg, @ecpay_callback_datetime )
      `);

        res.status(200).json({ orderid });
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error insert ecpay callback' });
      } finally {
        await pool.close();
      }

      res.status(200).send('1|OK')
    } else {
      console.log('Invalid callback:', MerchantTradeNo)
      res.status(400).send('0|FAIL')
    }
  } else {
    res.status(404).end();
  }


}



// 計算 CheckMacValue
const computeCheckMacValue = (data) => {
  // 將參數按照參數名稱的字母順序排序
  const sortedData = Object.keys(data).sort().reduce((acc, key) => {
    acc[key] = data[key];
    return acc;
  }, {});

  // 將參數轉換成 URL 字串
  // const urlEncodedData = querystring.stringify(sortedData);
  const urlEncodedString = Object.entries(sortedData).map(([key, value]) => `${key}=${value}`).join('&');
  // 將 HashKey 加到 URL 字串的前面，將 HashIV 加到 URL 字串的後面
  const urlEncodedDataWithHash = `HashKey=${HASH_KEY}&${urlEncodedString}&HashIV=${HASH_IV}`;
  // console.log(urlEncodedDataWithHash)
  // 將 URL 字串轉換成小寫的 STRING
  const lowercaseEncodedDataWithHash = encodeURIComponent(urlEncodedDataWithHash).toLowerCase().replace(/%20/g, "+");

  // console.log(lowercaseEncodedDataWithHash)
  // 使用 SHA256 加密 HEX 字串，並轉換成大寫的 SHA256 字串
  const hash = crypto.createHash('sha256').update(lowercaseEncodedDataWithHash).digest('hex').toUpperCase();
  return hash;
};
