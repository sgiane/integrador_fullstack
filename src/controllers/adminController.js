const { DataTypes } = require('sequelize');
const path = require("path");
const sharp = require("sharp");
const { validatorResult } = require("express-validator");

const modelProduct = require('../models/productModel');
const modelCategory = require('../models/categoryModel');
const modelLicense = require('../models/licenseModel');
//CONTROLADORES DE ADMIN

//ADMIN
//Lista todos los productos de la base de datos)

const admin =  async (req, res) => {
    try {
        const productos = await modelProduct.findAll();

    console.log(productos);
    // res.send("Listado de Productos");
    res.render('viewsAdmin/admin', { productos, layout: "layouts/layoutAdmin"});
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};
//---------------------------------------------------------------------------------------
//CREATE 
//Muestra la vista del formulario

const create = async (req, res) => 
{
    try {
        const licenses = await modelLicense.findAll();
        if (licenses) {
            const categories = await modelCategory.findAll();
            res.render('viewsAdmin/create', { categories, licenses, layout: "layouts/layoutAdmin" });
        }
        
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
};


//Crea nuevo producto
const createProduct = async (req, res) => {
    // console.log(req.body, req.file);

    // const errors = validatorResult(req);

    // if (!errors.isEmpty()){
    //     return res.render("admin/create", {
    //         values: req.body,
    //         errors: errors.array(),
    //     });
    // } 
    
    try {
        const producto = await modelProduct.create(req.body);
        console.log(producto);

        if (req.file) {
            sharp(req.file.buffer)
              .resize(300)
              .toFile(
                path.resolve(
                  __dirname,
                  `../../public/upload/producto_${producto.id}.webp`
                )
              );
          }

        res.redirect("/admin");

    } catch (error) {
        console.log(error);
        res.send(error);
    }
};
//---------------------------------------------------------------------------------------------
const edit = async (req, res) => {
    try {
      const producto = await modelProduct.findByPk(req.params.id);
  
      if (producto) {
        res.render('viewsAdmin/edit', {layout: "layouts/layoutAdmin", values: producto } );
      } else {
        res.status(404).send("No existe el producto");
      }
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  };

  const update = async (req, res) => {
    console.log(req.params, req.body);
  
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.render("admin/create", {
        values: req.body,
        errors: errors.array(),
      });
    }
  
    try {
      const count = await model.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      console.log(count);
  
      if (req.file) {
        sharp(req.file.buffer)
          .resize(300)
          .toFile(
            path.resolve(
              __dirname,
              `../../../public/uploads/productos/producto_${req.params.id}.jpg`
            )
          );
      }
  
      res.redirect("/admin/productos");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  };
  
// const edit = (req, res) => res.render('viewsAdmin/edit', {layout: "layouts/layoutAdmin"});


module.exports = {
    admin,
    create,
    createProduct,
    edit,
    update,
};