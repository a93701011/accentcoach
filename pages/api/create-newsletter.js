const sql = require('mssql');
import config from '../../config/config';

// const config = {
//   "user": process.env.sqluser,
//   "password": process.env.sqlpassword,
//   "server": process.env.sqlserver,
//   "database": process.env.sqldatabase,
//   options: {
//     encrypt: true // enable SSL encryption
//   }
// };

const pool = new sql.ConnectionPool(config);

export default async function handler(req, res) {

  if (req.method === 'POST') {
    try {
      await pool.connect();


      const { email } = req.body;
      const request = new sql.Request(pool);

      request.input('email', sql.VarChar, email);
 
      const result = await request.query(`
        INSERT INTO accentcoach_newsletter (email)
        VALUES ( @email)
      `);
      // res.status(200).json({ message: 'Booking created successfully' });
      res.status(200).json({email});
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