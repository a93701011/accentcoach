const sql = require('mssql');
import config from '../../../config/config';

const pool = new sql.ConnectionPool(config);

export default async function handler(req, res) {

  if (req.method === 'GET') {
    try {
      await pool.connect();

      const {orderid} = req.query
      const query = `SELECT * FROM accentcoach_bookings WHERE orderid = ${orderid}`;
      const result = await pool.request().query(query);
      // console.log(result.recordset[0])

      res.status(200).json(result.recordset[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating booking' });
    } finally {
      await pool.close();
    }
  } else {
    res.status(404).end();
  }

}