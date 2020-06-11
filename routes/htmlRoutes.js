const express = require('express')
const app = express();
const path = require('path');
const root = { root: path.join(__dirname, "../public") };

app.get('/', function (req, res) {
    res.sendFile('index.html', root);
});

app.get('/notes', function (req, res) {
    res.sendFile('notes.html', root);
});

module.exports = app;
