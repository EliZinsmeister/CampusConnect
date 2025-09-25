const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db.config');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Example: Fetch all records
app.get('/api/items', (req, res) => {
    db.query('SELECT * FROM items', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Start server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
