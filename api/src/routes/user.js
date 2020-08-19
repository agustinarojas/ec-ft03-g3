const server = require('express').Router();
const { User, Carrito, Product } = require('../db.js');

server.get('/', (req, res) => {
    User.findAll().then(users => {
        res.send(users)
    })
        .catch(err => {
            console.log(err)
        })
})

server.post('/', (req, res) => {
    User.create(req.body).then(user => {
        res.status(201).send(user)
    })
        .catch(err => {
            console.log(err)
        })
})

server.put('/:id', (req, res) => {
    var newEmail = req.body.email
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(user => {
            user.update({
                email: newEmail
            })
            user.save()
            res.status(200).send('Usuario actualizado')
        })
        .catch(err => {
            res.send('Usuario inexistente')
        })
})

server.delete('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    }).then(user => {
        if (!user) {
            res.send('Usuario inexistente')
        } else {
            user.destroy()
            res.status(200).send('Usuario eliminado')
        }
    }).catch(err => {
        console.log(err)
    })
})

server.post('/:ids/cart', (req, res) => {
    var ids = req.params.ids;
    const { id } = req.body;
    let pProduct = Product.findByPk(id);
    let pCarrito = Carrito.findOrCreate({
        where: {
            userId: ids,
            precio: req.body.precio,
            productId: id,
            estado: req.body.estado,
            cantidad: 1
        }
    });
    Promise.all([pCarrito, pProduct])
        .then(values => {
            console.log(values)
            let carrito = values[0];
            let producto = values[1];
            producto.addCarrito(carrito);
            res.send(carrito);
        })
        .catch(err => console.log(err))
})

server.get('/:ids/cart', (req, res) => {
    var ids = req.params.ids;
    Carrito.findAll({
        where: {
            userId: ids
        }
    }).then(carrito => {
        res.send(carrito)
    })
        .catch(err => {
            console.log(err)
        })
})

server.delete('/:ids/cart', (req, res) => {
    var ids = req.params.ids;
    Carrito.findAll({
        where: {
            userId: ids
        }
    }).then(carrito => {
        carrito.map(c => c.destroy())
        res.status(201).send('Carrito vaciado.')
    })
        .catch(err => {
            console.log(err)
        })
})

server.put('/:ids/cart', (req, res) => {
    var ids = req.params.ids;
    var data = req.body;
    Carrito.findOne({
        where: {
            userId: ids,
            productId: req.body.id
        }
    }).then(carrito => {
        carrito.update({
            cantidad: data.cantidad
        })
        carrito.save()
        res.send('Cantidad actualizada')
    })
    .catch(err => {
        console.log(err)
    })
})

server.get('/:ids/orders', (req,res) => {  //Ruta trae toda las ordenes de un usuario.
    Carrito.findAll({
        where: {
            userId: req.params.ids,
            estado: 'completa'
        }
    }).then(completados => {
        res.send(completados)
    })
    .catch(err => {
        console.log(err)
    })
})


module.exports = server;