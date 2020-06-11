const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(58008)

// const path = require('path');
// const fs = require('fs');
// const db = './db/db.json';
// // HTML ROUTES
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// app.get('/notes', function (req, res) {
//     res.sendFile(path.join(__dirname, "./public/notes.html"));
// });

// // API ROUTES
// app.get('/api/notes', function (req, res) {
//     res.sendFile(path.join(__dirname, db));
// });

// app.post('/api/notes', function (req, res) {
//     req.body.id = Date.now();
//     let notes = JSON.parse(fs.readFileSync(db));
//     notes.push(req.body);
//     fs.writeFileSync(db, JSON.stringify(notes));

//     res.sendFile(path.join(__dirname, db));
// });

// app.delete('/api/notes/:id', function (req, res) {
//     let notes = JSON.parse(fs.readFileSync(db)).filter((note) => note.id != req.params.id);
//     fs.writeFileSync(db, JSON.stringify(notes));
//     res.sendFile(path.join(__dirname, db));
// });