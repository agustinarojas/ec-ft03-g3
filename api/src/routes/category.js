const server = require('express').Router();
const {Cat} = require('../db.js');

// server.get('/', (req, res) => {
// 	//prettier-ignore
// 	Cat.findAll()
// 	.then(cats => res.send(cats)
// 	.catch(err => res.status(400).send(err)));
// });

server.post('/', (req, res) => {
	Cat.create(req.body).then(category => {
		res.status(201).send(category);
	});
});

server.delete('/:id', (req, res) => {
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

server.put('/:id', (req, res) => {
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
				descripcion: data.descripcion,
			});
			category.save();
			res.status(200).send('Categoria Actualizada');
		})
		.catch(error => {
			res.status(400).send('Producto inexistente');
		});
});

module.exports = server;
