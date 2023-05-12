const sql = require('mssql');
import config from '../../config/config';
const pool = new sql.ConnectionPool(config);

//0 init, 1 student confrimed, 2 pay completed, 3 teacher confirmed, 4 applied cancel, 6 refund completed

export default async function handler(req, res) {
  
  if (req.method === 'POST') {
    try {
      await pool.connect();

      const {  MerchantTradeNo, RtnCode ,RtnMsg} = req.body;
      const request = new sql.Request(pool);
      request.input('MerchantTradeNo', sql.VarChar, MerchantTradeNo);
      request.input('RtnCode', sql.VarChar, RtnCode);
      request.input('RtnMsg', sql.VarChar, RtnMsg);
      request.input('ecpay_callback_datetime', sql.DateTime, new Date());
      const result = await request.query(`
      INSERT INTO [accentcoach_epaycallback] (MerchantTradeNo, RtnCode, RtnMsg, ecpay_callback_datetime)
      VALUES ( @MerchantTradeNo, @RtnCode, @RtnMsg, @ecpay_callback_datetime )
      `);

      res.status(200).json({orderid});
    } catch (err) {
      console.error(err);
      res.status(500).json({message: 'Error insert ecpay callback'});
    } finally {
      await pool.close();
    }
  } else {
    res.status(404).end();
  }


}