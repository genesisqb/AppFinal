const express = require("express");
const { verifyToken } = require("../middlewares/jwt-validate");

const router = express.Router();

const listaDeProductos = [{
        "name": "Reme Shoes Love",
        "price": "700 UYU",
        "Image": "shoes.jpg"
    },
    {
        "name": "Reme London Love",
        "price": "700 UYU",
        "Image": "london.jpg"
    },
    {
        "name": "Reme Coffe Time",
        "price": "700 UYU",
        "Image": "coffe-time.jpg"
    },
    {
        "name": "Reme Goku",
        "price": "700 UYU",
        "Image": "goku.jpg"
    },
    {
        "name": "Reme FBC",
        "price": "700 UYU",
        "Image": "fbc.jpg"
    },

    {
        "name": "Reme Vegeta",
        "price": "700 UYU",
        "Image": "vegeta.jpg"
    },
    {
        "name": "Reme Luna",
        "price": "700 UYU",
        "Image": "luna.jpg"
    },
    {
        "name": "Reme para Papá",
        "price": "700 UYU",
        "Image": "corona.jpg"
    },
    {
        "name": "Reme para Papá Moderno",
        "price": "700 UYU",
        "Image": "papa-moderno.jpg"
    }
];

router.get("/", (req, res) => {
    res.send({
        producto: listaDeProductos,
    });
});

router.post("/", verifyToken, (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const image = req.body.image;

    const nuevaTarea = {
        name: name,
        price: price,
        image: image,
    };

    listaDeProductos.push(nuevaTarea);

    res.send({
        producto: listaDeProductos,
        productoNuevo: nuevoProducto,
    });
});

module.exports = {
    router: router,
    listaDeProductos: listaDeProductos,
};