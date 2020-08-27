const server = require('express').Router();
const {Carrito, Product} = require('../db.js');
const {isAdmin, isAuthenticated} = require('./validations');

server.get('/', isAdmin, (req, res) => {
	//Ruta trae todas las ordenes... Dentro de tabla de orden
	Carrito.findAll({
		where: {
			estado: 'completa',
		},
		include: {
			model: Product,
		},
	})
		.then(completados => {
			res.send(completados);
		})
		.catch(err => {
			console.log(err);
		});
});

server.get('/:id', isAuthenticated, (req, res) => {
	// Ruta trae orden de usuario en especifico, completadas... de componente orden
	Carrito.findOne({
		where: {
			userId: req.params.id,
			estado: 'completa',
		},
		include: {
			model: Product,
		},
	})
		.then(completados => {
			res.send(completados);
		})
		.catch(err => {
			console.log(err);
		});
});

server.put('/:id', isAdmin, (req, res) => {
	//ruta actualiza orden
	var data = req.body;
	Carrito.findOne({
		where: {
			userId: req.params.id,
		},
	})
		.then(completados => {
			completados.update({
				estado: data.estado,
			});
			completados.save();
			res.send('Actualizado');
		})
		.catch(err => {
			console.log(err);
		});
});

module.exports = server;
