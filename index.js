const express = require('express');
const path = require('path');
 const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HIVE', 'index.html'))
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Server Running'));