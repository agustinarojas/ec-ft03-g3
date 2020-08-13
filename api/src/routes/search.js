const app = require('express').Router();
const {Product} = require('../db.js');
const {Op} = require('sequelize');

app.get('/', (req, res) => {
	const valor = req.query.valor;
	Product.findAll({
		where: {
			titulo: {[Op.like]: `%${valor}%`},
			descripcion: {[Op.like]: `%${valor}%`},
		},
	}).then(products => {
		if (!products[0]) return res.send(`error ${valor} no encontrado`);
		res.send(products);
	});
});

module.exports = app;
