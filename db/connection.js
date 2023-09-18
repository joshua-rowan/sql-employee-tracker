const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'IEatLunch4Desayunar',
    database: 'employee_tracker_db'
  },
  console.log('Database connected.')
);

module.exports = db;
