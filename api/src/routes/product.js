const server = require('express').Router();
const {Product} = require('../db.js');

const productos = {
	titulo: 'Auto',
	descripcion: 'Auto veloz rojo potente',
	precio: 400,
	stock: 50,
	categorias: 'vehiculos',
	imagen: 'autoRojo.jpg',
};
const productos2 = {
	titulo: 'Barbie',
	descripcion: 'Barbie furiosa potente',
	precio: 950,
	stock: 15,
	categorias: 'Muniecas',
	imagen: 'BarbieFuriosa.jpg',
};
const productos3 = {
	titulo: 'Peluche',
	descripcion: 'Peluche amigo de barbie potente esponjoso',
	precio: 1500,
	stock: 5,
	categorias: 'Peluches',
	imagen: 'Peluche.jpg',
};

// Product.sync({force: true})
// 	.then(() => Product.create(productos))
// 	.then(() => Product.create(productos2))
// 	.then(() => Product.create(productos3));

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

module.exports = server;
