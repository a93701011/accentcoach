
const sql = require('mssql');
import config from '../../config/config';
const pool = new sql.ConnectionPool(config);

const MERCHANT_ID = process.env.MERCHANT_ID;
const HASH_KEY = process.env.HASH_KEY;
const HASH_IV = process.env.HASH_IV;

export default async function ecpaycallback(req, res) {
  if (req.method === 'POST') {

    const data = req.body
    const getCheckMacValue = computeCheckMacValue(data);
    const checkMacValue = data.CheckMacValue
    if (checkMacValue == getCheckMacValue) {
        
      res.status(200).send('1|OK')
    } else {
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
