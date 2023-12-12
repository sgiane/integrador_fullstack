const { DataTypes } = require('sequelize');
const sharp = require("sharp");
const { validatorResult } = require("express-validator");

const model = require('../models/productModel');
//CONTROLADORES DE ADMIN

//ADMIN
//Lista todos los productos de la base de datos)

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

//CREATE 
//Muestra la vista del formulario

const create = (req, res) => res.render('viewsAdmin/create', {layout: "layouts/layoutAdmin"});

//Crea nuevo producto
const createProduct = async (req, res) => {
    console.log(req.body, req.file);

    // const errors = validatorResult(req);

    // if (!errors.isEmpty()){
    //     return res.render("admin/create", {
    //         values: req.body,
    //         errors: errors.array(),
    //     });
    // } 
    if (req.file) {
        sharp(req.file.buffer)
          .resize(300)
          .toFile(
            path.resolve(
              __dirname,
              `../../../public/uploads/productos/producto_${producto.id}.jpg`
            )
          );
      }
    try {
        const producto = await model.create(req.body);
        console.log(producto);
        res.redirect("/admin");

    } catch (error) {
        res.send(error);
    }
}

// const edit = async (req, res) => {
//     try {
//         // const edition = await model.findOne( )
//         console.log(req.params);
//         res.send("Edición");
//         // res.render('viewsAdmin/edit/:id', {layout: "layouts/layoutAdmin", edition });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// };
   

// const edit = (req, res) => res.render('viewsAdmin/edit', {layout: "layouts/layoutAdmin"});


module.exports = {
    admin,
    create,
    createProduct,
    // edit,
};