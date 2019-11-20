const express = require('express');
const router = express.Router();

// Rockscore Model
const Rockscore = require('../../models/Rockscore');

router.get('/', (req, res) => {
  Rockscore.find()
    .then(rockscores => res.json(rockscores));
});

router.post('/', (req, res) => {
  const newRockscore = new Rockscore({
    username: req.body.name,
    score: req.body.score
  });
  newRockscore.save().then(rockscore => res.json(rockscore));
});

module.exports = router;