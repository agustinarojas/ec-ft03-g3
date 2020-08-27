const server = require('express').Router();
//const {Op} = require('sequelize');
const {User} = require('../db.js');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;



server.post('/login', (req, res) => {
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
});

server.get('/login', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = server;
