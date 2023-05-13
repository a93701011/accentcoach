// 綠界 API 商店相關參數
const MERCHANT_ID = process.env.MERCHANT_ID;
const HASH_KEY = process.env.HASH_KEY;
const HASH_IV = process.env.HASH_IV;

export default async function ecpaycallback(req, res) {

  if (req.method === 'POST') {
    console.log(req.body)
    const { RtnCode, RtnMsg, MerchantTradeNo} = req.body
    // const getCheckMacValue = computeCheckMacValue(data);

    // const RtnCode = data.RtnCode
    // const RtnMsg = data.RtnMsg
    // const checkMacValue = data.CheckMacValue
    // const MerchantTradeNo = data.MerchantTradeNo
    // if (checkMacValue == getCheckMacValue && RtnMsg == 'Succeeded' && RtnCode == '1') {
    // if (RtnCode == '1' ) {
    //   res.redirect(307, '/order_success');
    // } else {
    //   res.redirect(307, '/order_fail');
    // }
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
