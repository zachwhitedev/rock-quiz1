const express = require('express');
const router = express.Router();

// Rockscore Model
const Rockscore = require('../../models/Rockscore');

router.get('/', (req, res) => {
  // Rockscore.findOneAndUpdate({ username: 'pedroro' }, { $set: { score: 50 } }, { new: true }, function(err, doc) {
  // });

  // ^^^ABOVE IS HOW TO SUCCESSFULLY UPDATE A DOC IN MONGODB USING MONGOOSE!!!!

  Rockscore.find()
  .sort({ score: -1 })
  .then(rockscores => res.json(rockscores));
});



router.post('/', (req, res) => {
  const filter = { username: 'pedroro' };
  const update = { score: 59 };
  
  Rockscore.findOneAndUpdate(filter, update);
  

  const newRockscore = new Rockscore({
    username: req.body.name,
    score: req.body.score
  });
  newRockscore.save().then(rockscore => res.json(rockscore));
});

module.exports = router;