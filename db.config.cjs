const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql1',
  database: 'react_mysql_db'
});


db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

module.exports = db;
