
const querystring = require('querystring');
const crypto = require('crypto');


const ECPAY_PAYMENT_API_URL = 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5';

const MERCHANT_ID = process.env.MERCHANT_ID;
const HASH_KEY = process.env.HASH_KEY;
const HASH_IV = process.env.HASH_IV;


export default async function ecpayinfo (req, res){

  const { orderid, amount } = req.body;
  console.log(orderid, amount)
  
  let data = {
    MerchantID: MERCHANT_ID,
    MerchantTradeNo: `aapc${orderid}${Math.floor(Math.random()*100)}`, // 產生一個唯一的訂單編號
    MerchantTradeDate: new Date().toISOString().substring(0, 19).replace('T', ' ').replace('-','/').replace('-','/'), // 訂單建立日期時間，格式為 yyyy/MM/dd HH:mm:ss
    PaymentType: 'aio',
    TotalAmount: amount, // 訂單總金額
    TradeDesc: 'Test Trade', // 交易描述
    ItemName: 'Test Item', // 商品名稱
    ReturnURL: 'http://www.ecpay.com.tw/receive.php', // 付款完成後返回的網址
    // ClientBackURL: 'http://localhost:3000', // 付款取消後返回的網址
    ChoosePayment: 'ALL',
    EncryptType: 1, // 交易資料加密類型，固定為 1
    
  };
    
  const checkMacValue = computeCheckMacValue(data);
  data.CheckMacValue = checkMacValue;
  console.log(data)
  
  res.status(200).send(data);
  // let config = {
  //   method: 'post',
  //   maxBodyLength: Infinity,
  //   url: ECPAY_PAYMENT_API_URL,
  //   headers: { 
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   data:data
  // };
  // await axios.request(config)
  // .then((response) => {
  //   res.status(200).send(response.data);

  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  
};

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
  const lowercaseEncodedDataWithHash =encodeURIComponent(urlEncodedDataWithHash).toLowerCase().replace(/%20/g, "+");

  // console.log(lowercaseEncodedDataWithHash)
  // 使用 SHA256 加密 HEX 字串，並轉換成大寫的 SHA256 字串
  const hash = crypto.createHash('sha256').update(lowercaseEncodedDataWithHash).digest('hex').toUpperCase();
   return hash;
};


