const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const db = './db/db.json';
// const indexRoutes = require('./routes/index.js');
// const notesRoutes = require('./routes/notes.js');
// const notes = require('./public/index.html');

// SET FRONTEND ROOT TO PUBLIC FOLDER
app.use(express.static('public'));
// ALLOW PARSING OF INBOUD REQUEST BODY
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// HTML ROUTES
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// API ROUTES
app.get('/api/notes', function (req, res) {
    res.sendFile(path.join(__dirname, db));
});

app.post('/api/notes', function (req, res) {
    req.body.id = Date.now();
    let notes = JSON.parse(fs.readFileSync(db));
    notes.push(req.body);
    fs.writeFileSync(db, JSON.stringify(notes));

    res.sendFile(path.join(__dirname, db));
});

app.delete('/api/notes/:id', function (req, res) {
    let notes = JSON.parse(fs.readFileSync(db)).filter((note) => note.id != req.params.id);
    fs.writeFileSync(db, JSON.stringify(notes));
    res.sendFile(path.join(__dirname, db));
});
 
app.listen(58008)