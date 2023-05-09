const sql = require('mssql');
import config from '../../config/config';

const pool = new sql.ConnectionPool(config);

export default async function handler(req, res) {

  if (req.method === 'POST') {
    try {
      await pool.connect();

      const {email} = req.body;
      const query = `SELECT * FROM accentcoach_bookings where email = '${email}'`;
      const result = await pool.request().query(query);

      res.status(200).json(result.recordset);
    } catch (err) {
      console.error(err);
      res.status(500).json({message: 'Error query booking'});
    } finally {
      await pool.close();
    }
  } else {
    res.status(404).end();
  }


}
