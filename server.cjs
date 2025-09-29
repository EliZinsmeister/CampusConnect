const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql1',
  database: 'react_mysql_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.post('/SignUp', (req, res) => {
  const { name, email} = req.body;
  db.query('INSERT INTO users SET ?', { name, email}, (err, result) => {
    if (err) throw err;
    res.send('User registered');
  });
});

app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3306, () => console.log('Server running on port 3306'));
