const express = require("express");
const router = express.Router();
const conn = require('../conexion');

// ------------------- CRUD CATEGORIAS -------------------

//  agregar categorias
router.post('/agregarC', (req, res) => {
    const { nombre, descripcion } = req.body;
    let sql = `INSERT INTO Categoria(nombre, descripcion, fecha_creacion, estado) 
    VALUES ('${nombre}', '${descripcion}', (select now()), false)`;   
    let query = conn.query(sql, (err, results) => {
        if (err) {
            res.send({ auth: false });
        } else {
            res.send({ auth: true });
        }
    });
});

// ver categorias
router.get('/verC', (req, res) => {
    const sql = `SELECT * FROM Categoria`;
    const query = conn.query(sql, (err, results) => {
        if (err) {
            res.send([]);
        } else {
            res.send(results);
        }
    });
});

// modificar categorias
router.post('/modificarC', (req, res) => {
    const { categoria, nombre, descripcion, estado } = req.body;
    //nombre, descripcion, fecha_creacion, estado
    const sql = `
        UPDATE categoria
        SET nombre = '${nombre}', 
        descripcion = '${descripcion}', 
        estado = '${estado}'
        WHERE categoria = '${categoria}';`;
        const query = conn.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.send({ auth: false });
        } else {
            console.log(results);
            res.send({ auth: true });
        }
    });
});

// eliminar categorias
router.post('/eliminarC', (req, res) => {
    const { categoria } = req.body;
    
    const sql = `delete from categoria where categoria = '${categoria}';`;
    const query = conn.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.send({ auth: false });
        } else {
            console.log(results);
            res.send({ auth: true });
        }
    });
});


// ------------------- CRUD PRODUCTOS -------------------

//  agregar productos
router.post('/agregarP', (req, res) => {
    const { nombre, descripcion, stock, estado, categoria } = req.body;
    let sql = `INSERT INTO Producto(nombre, descripcioin, stock, fecha_creacion, estado, categoria) 
    VALUES (${nombre}, ${descripcion}, ${stock}, (select now()), ${estado}, ${categoria});`;   
    let query = conn.query(sql, (err, results) => {
        if (err) {
            res.send({ auth: false });
        } else {
            res.send({ auth: true });
        }
    });
});

// ver productos
router.get('/verP', (req, res) => {
    const sql = `SELECT * FROM Producto`;
    const query = conn.query(sql, (err, results) => {
        if (err) {
            res.send([]);
        } else {
            res.send(results);
        }
    });
});

// modificar productos
router.post('/modificarP', (req, res) => {
    const { producto, nombre, descripcion, stock, estado, categoria } = req.body;
    //nombre, descripcion, fecha_creacion, estado
    const sql = `
        UPDATE producto
        SET nombre = '${nombre}', 
        descripcioin = '${descripcion}', 
        stock = '${stock}',
        estado = '${estado}',
        categoria = '${categoria}'
        WHERE producto = '${producto}';`;
        const query = conn.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.send({ auth: false });
        } else {
            console.log(results);
            res.send({ auth: true });
        }
    });
});

// eliminar productos
router.post('/eliminarP', (req, res) => {
    const { producto } = req.body;
    
    const sql = `delete from Producto where producto = '${producto}';`;
    const query = conn.query(sql, (err, results) => {
        if (err) {
            console.log(err);
            res.send({ auth: false });
        } else {
            console.log(results);
            res.send({ auth: true });
        }
    });
});





module.exports = router;