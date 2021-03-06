const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET, verifyToken } = require("../middlewares/jwt-validate");
const db = require("../db");

const router = express.Router();
router.get("/", (req, res) => {
    res.json({ success: true });
});

router.post("/login", async(req, res) => {
    if (req.body.mail && req.body.name && req.body.password) {
        // Formato del mail
        if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
            res
                .status(400)
                .json({ success: false, message: "Formato de mail incorrecto" });
            return;
        }

        const usuarioBd = await db.query("Select * from users where mail = $1", [
            req.body.mail,
        ]);

        const existeUser = usuarioBd.rowCount > 0;

        if (existeUser) {
            res.status(400).json({ success: false, message: "Mail repetido" });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        const newUser = {
            name: req.body.name,
            mail: req.body.mail,
            password: password,
        };

        const resBd = await db.query(
            "Insert into users(name, mail, password) values ($1, $2, $3)", [newUser.name, newUser.mail, newUser.password]
        );

        return res.status(200).json({ success: true, newUser });
    } else {
        return res.status(400).json({
            success: false,
            message: "Faltan datos (requeridos: mail, name, password)",
        });
    }
});

router.get("/users", async(req, res) => {
    const users = await db.query("Select * from users");

    const result = users.rows;

    res.json({ error: null, result });
});

module.exports = {
    router: router,
};