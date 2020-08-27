function isAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		next();
	} else {
		res.send('TE HE FALLADO');
		res.status(404);
	}
}

function isAdmin(req, res, next) {
	if (req.user && req.user.admin === true) {
		next();
	} else {
		res.send('Permiso denegado');
	}
}
module.exports = {isAuthenticated, isAdmin};
