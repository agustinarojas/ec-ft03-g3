const server = require('express').Router();
const {Product, Cat} = require('../db.js');


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
			id: req.params.id
		}
	})
	.then(product => {
		res.send(product) // O product.dataValues ?
	})
})
server.get ("/categorias/:nombreCat", (req, res, next) => {
	Product.findAll({
		where: {
		'Cat.titulo': req.params.nombreCat
		},
		include: [
			{model: Cat, as: Cat.tableName}
		]
	});
})
module.exports = server;
