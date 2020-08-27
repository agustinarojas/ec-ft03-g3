const server = require('express').Router();
//const {Op} = require('sequelize');
const {User} = require('../db.js');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const {isAuthenticated} = require('./validations');

server.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), function (
	req,
	res,
) {
	console.log(req.user);
	res.send('chausinio');
});

server.get('/', (req, res) => {
	console.log('chau');
});

server.get('/logout', (req, res) => {
	req.user;
	req.logout();
	res.send('hi');
});

server.get('/me', isAuthenticated, (req, res) => {
	console.log(req.user);
	res.send(req.user);
});

server.post('/promote/:id', (req, res) => {
	User.findByPk(req.params.id).then(user => {
		console.log(user);
		user.update({admin: true}), user.save();
		res.send(user);
	});
});

module.exports = server;
