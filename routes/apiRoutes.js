const express = require('express');
const app = express();
const path = require('path');
const db = path.join(__dirname, '../db/db.json');
const fs = require('fs');

app.use(express.urlencoded({ extended: true })); // ALLOWS PARSING OF INBOUND DATA

// READ
app.get('/notes', (req, res) => res.sendFile(db));

// CREATE
app.post('/notes', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(db));
    req.body.id = Date.now();
    notes.push(req.body);
    fs.writeFileSync(db, JSON.stringify(notes));

    res.sendFile(db);
});

// UPDATE
app.post('/notes/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(db)).map((note) => {
        if(note.id == req.params.id){
            note.title = req.body.title;
            note.text = req.body.text;
        }
        return note;
    });
    fs.writeFileSync(db, JSON.stringify(notes));
    res.sendFile(db);
});

// DELETE
app.delete('/notes/:id', (req, res) => {
    let notes = JSON.parse(fs.readFileSync(db)).filter((note) => note.id != req.params.id);
    fs.writeFileSync(db, JSON.stringify(notes));
    res.sendFile(db);
});

module.exports = app;
