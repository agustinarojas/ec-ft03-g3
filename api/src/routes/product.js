const server = require('express').Router();
const {Product} = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});

server.get('/:id', (req, res, next) => {
	Product.findOne({
		where: {
			id: req.params.id,
		},
	}).then(product => {
		res.send(product); // O product.dataValues ?
	});
});

server.post('/', (req, res) => {
	Product.create(req.body).then(product => {
		res.status(201);
		res.json(product);
	});
});

server.put('/:id', (req, res) => {
	var productId = req.params.id;
	var data = req.body;
	Product.findOne({
		where: {
			id: productId,
		},
	})
		.then(product => {
			product.update({
				titulo: data.titulo,
				descripcion: data.descripcion,
				precio: data.precio,
				stock: data.stock,
				categorias: data.categorias,
				imagen: data.imagen,
			});
			product.save();
			res.status(200).send('Producto Actualizado');
		})
		.catch(error => {
			res.status(400).send('Producto inexistente');
		});
});

server.delete('/:id', (req, res) => {
	var productId = req.params.id;
	Product.findOne({
		where: {
			id: productId,
		},
	})
		.then(product => {
			product.destroy();
			res.status(200).send('Producto Eliminado');
		})
		.catch(error => {
			res.status(400).send('Producto inexistente');
		});
});

module.exports = server;
