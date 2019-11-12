const express = require('express');
const router = express.Router();

// Rockscore Model
const Rockscore = require('../../models/Rockscore');

router.get('/', (req, res) => {
  Rockscore.find()
    .select('-email')
    .then(rockscores => res.json(rockscores));
});

router.post('/', (req, res) => {
  const newRockscore = new Rockscore({
    name: req.body.name,
    email: req.body.email,
    score: req.body.score
  });
  newRockscore.save().then(rockscore => res.json(rockscore));
});

module.exports = router;