const server = require('express').Router();
const {Product} = require('../db.js');


server.post('/:id/review', (req, res) => {
  var userId = req.params.id;
  Review.create(req.body)
  .then(rev => {
    res.status(201).send(rev)
  })
  .catch(err => {
    res.sendStatus(400)
  })
})

module.exports = server;
