const router = require('express').Router();

router.get('/api/notes', function (req, res) {
    res.sendFile(path.join(__dirname, db));
});

router.post('/api/notes', function (req, res) {
    req.body.id = Date.now();
    let notes = JSON.parse(fs.readFileSync(db));
    notes.push(req.body);
    fs.writeFileSync(db, JSON.stringify(notes));

    res.sendFile(path.join(__dirname, db));
});

router.delete('/api/notes/:id', function (req, res) {
    let notes = JSON.parse(fs.readFileSync(db)).filter((note) => note.id != req.params.id);
    fs.writeFileSync(db, JSON.stringify(notes));
    res.sendFile(path.join(__dirname, db));
});

module.exports = router;
