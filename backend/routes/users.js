const express = require("express");
const { verifyToken } = require("../middlewares/jwt-validate");

const router = express.Router();

const listaUsers = [{
        "id": 1,
        "name": "Génesis Quiaragua",
        "mail": "genesisqb@gmail.com",
        "password": "$2a$12$8MOjRIhd2B.73Fa3tKL1M.QDZ0Q5VolzeNmDRNbMIZ6ABZ.yLVdM6"
    },
    {
        "id": 2,
        "name": "Marcos Quiaragua",
        "mail": "marcosqr@gmail.com",
        "password": "$2a$12$OACVxHNmf1zfMqnbUvB8suiwpS2JHxeai8SrhEeZPQ5pNoPXI1XnC"
    },
    {
        "id": 3,
        "name": "Lisbeth Balza",
        "mail": "lisjobr@gmail.com'",
        "password": "$2a$12$nGXEJafgnyUYjiBcH2fE0OQjRU1IWNiZUZ6Id4jDF6uWikbJiLr6y"
    },
    {
        "id": 4,
        "name": "Margarita Rodriguez",
        "mail": "margothroro@gmail.com",
        "password": "$2a$12$pyw/Ujh5zlgrDiLWS8w8kOY53zgYl9SyNKOEUzVI0DT66g9GBBJ6."
    },
    {
        "id": 5,
        "name": "Margarita Rodriguez",
        "mail": "yolanonita@gmail.com",
        "password": "$2a$12$JR/GY8pnj1WS5rEhLIZYguhzTeFT4A0NDdkb9gc1jQwnDstJSZ/Uy"
    }
];

router.get("/", (req, res, next) => {
    res.send({
        success: true,
        listaUsers: listaUsers
    });
});

router.post("/", verifyToken, (req, res) => {
    const name = req.body.name;
    const mail = req.body.mail;
    const password = req.body.password;

    const nuevoUsuario = {
        name: name,
        mail: mail,
        password: password,
    };

    users.push(nuevoUsuario);

    res.send({
        users: listaUsers,
        usuarioNuevo: nuevoUsuario,
    });
});

module.exports = {
    router: router,
    listaUsers: listaUsers,
};