const server = require('express').Router();
const {User} = require('../db.js');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
/* const {isAuthenticated, isAdmin} = require('./validations'); */

server.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), function (
	req,
	res,
) {
	console.log(req.user);
	// res.redirect('/auth/me');
	res.send(req.user);
});

server.get('/', (req, res) => {
	console.log('chau');
});

server.get('/logout', (req, res) => {
	req.logout();
	res.send('logout');
});

server.get('/me', isAuthenticated, (req, res) => {
	console.log(req.user);
	res.send(req.user);
});

server.post('/promote/:id', isAdmin, (req, res) => {
	console.log(req.params.id);
	User.findByPk(req.params.id)
		.then(user => {
			user.update({admin: true}), user.save();
			res.send(user);
		})
		.catch(err => {
			res.status(400).send(err);
		});
});

function isAuthenticated(req, res, next) {
	console.log('HOLAAAA' + req.user);
	if (req.isAuthenticated()) {
		next();
	} else {
		res.send('TE HE FALLADO');
		res.status(404);
	}
}

function isAdmin(req, res, next) {
	/* if (req.user && req.user.admin === true) {
			next();
		} else {
			console.log(req.user)
			res.send('Permiso denegado');
		} */
	console.log('ESTOY ACA');
	next();
}
module.exports = server;
