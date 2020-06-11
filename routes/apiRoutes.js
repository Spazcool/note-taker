const express = require('express');
const app = express();
const path = require('path');
const db = path.join(__dirname, '../db/db.json');
const fs = require('fs');

app.use(express.urlencoded({ extended: true })); // ALLOWS PARSING OF INBOUND DATA

app.get('/notes', (req, res) => res.sendFile(db));

app.post('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(db));
    req.body.id = Date.now();
    notes.push(req.body);
    fs.writeFileSync(db, JSON.stringify(notes));

    res.sendFile(db);
});

app.delete('/notes/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(db)).filter((note) => note.id != req.params.id);
    fs.writeFileSync(db, JSON.stringify(notes));
    res.sendFile(db);
});

module.exports = app;
