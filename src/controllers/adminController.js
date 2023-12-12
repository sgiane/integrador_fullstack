const { DataTypes } = require('sequelize');
const model = require('../models/productModel');


//CONTROLADORES DE ADMIN

const admin =  async (req, res) => {
    try {
        const productos = await model.findAll();

    console.log(productos);
    // res.send("Listado de Productos");
    res.render('viewsAdmin/admin', { productos, layout: "layouts/layoutAdmin"});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

   
// const admin = (req, res) => res.render('viewsAdmin/admin', {layout: "layouts/layoutAdmin"});
const create = (req, res) => res.render('viewsAdmin/create', {layout: "layouts/layoutAdmin"});
const edit = (req, res) => res.render('viewsAdmin/edit', {layout: "layouts/layoutAdmin"});


module.exports = {
    admin,
    create,
    edit,
};