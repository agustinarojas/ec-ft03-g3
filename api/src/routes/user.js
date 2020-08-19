const server = require('express').Router();
const { User } = require('../db.js');

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

module.exports = server;