const server = require('express').Router();
//const {Op} = require('sequelize');
const {User} = require('../db.js');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

server.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), function (req,res) {
	console.log(req.user + '         chausinio');
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

function isAuthenticated(req, res, next) {
	console.log(req.isAuthenticated())
	if (req.isAuthenticated()) {
		next();
	} else {
		//console.log('hola');
		res.send('TE HE FALLADO')
		res.status(404);
	}
}

server.get('/me', isAuthenticated, (req, res) => {
	console.log(req.user);
	res.send(req.user);
});

module.exports = server;
