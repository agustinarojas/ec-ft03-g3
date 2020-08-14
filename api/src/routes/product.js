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


server.get ("/category/:nombreCat", (req, res, next) => {
	Cat.findByPk(req.params.nombreCat).then(cat => {
		cat.getProducts({ attributes: ['titulo', 'descripcion'] }).then(products => {
			res.send(products)
		})
	});
})

server.post ('/category', (req,res) => {
    Cat.create(req.body).then((category) => {
        res.status(201).send(category)
    })
})

server.delete('/category/:id', (req, res) => {
	var categoriaId = req.params.id;
	Cat.findOne({
		where: {
			id: categoriaId,
		},
	})
		.then(category => {
			category.destroy();
			res.status(200).send('Categoria Eliminada');
		})
		.catch(error => {
			res.status(400).send('Categoria inexistente');
		});
});

server.put('/category/:id', (req, res) => {
	var categoriaId = req.params.id;
	var data = req.body;
	Cat.findOne({
		where: {
			id: categoriaId,
		},
	})
		.then(category => {
			category.update({
				titulo: data.titulo,
				descripcion: data.descripcion
			});
			category.save();
			res.status(200).send('Categoria Actualizada');
		})
		.catch(error => {
			res.status(400).send('Producto inexistente');
		});
});

module.exports = server;
