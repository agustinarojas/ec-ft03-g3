const server = require('express').Router();
const {Product, Review} = require('../db.js');

server.post('/:id/review', (req, res) => {
	var userId = req.params.id;
	Review.create(req.body) //req.body recibe producto, rating y descripcion
		.then(rev => {
			res.status(201).send(rev);
		})
		.catch(err => {
			res.sendStatus(400);
		});
});

module.exports = server;
/* server.post('/:idProducto/category/:idCategoria', isAdmin, (req, res) => {
	const {idProducto, idCategoria} = req.params;
	let promiseProduct = Product.findByPk(idProducto);
	let promiseCat = Cat.findByPk(idCategoria);
	Promise.all([promiseProduct, promiseCat])
		.then(values => {
			let product = values[0];
			let cat = values[1];
			cat.addProducts(product);
			res.send(product);
		})
		.catch(err => res.sendStatus(400));
}); */
