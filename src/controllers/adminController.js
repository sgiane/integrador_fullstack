const fs = require("fs");
const { DataTypes } = require('sequelize');
const path = require("path");
const sharp = require("sharp");
const { validationResult } = require("express-validator");

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
//------------------------------------------------------------------------
//EDIT

//Mostrar la vista del formulario

const edit = async (req, res) => {
    try {
      const producto = await modelProduct.findByPk(req.params.id);
  
      if (producto) {
        const categories = await modelCategory.findAll();
        const licenses = await modelLicense.findAll();
        res.render('viewsAdmin/edit', { layout: "layouts/layoutAdmin", values: producto, categories, licenses } );
      } else {
        res.status(404).send("No existe el producto");
      }
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  };

//Editar el producto

  const update = async (req, res) => {
    console.log(req.params, req.body);
  
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      try {
        
        // const categories = await modelCategory.findAll();
        // const licenses = await modelCategory.findAll();

        return res.render("/admin/create", {
          // categories,
          // licenses,
          values: req.body,
          errors: errors.array(),
        });

      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }     
    }

  
    try {
      // console.log(req.body);
      const count = await modelProduct.update(req.body, {
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
              `../upload/producto_${req.params.id}.webp`
            )
          );
      }
  
      res.redirect("/admin");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  };
  
//------------------------------------------------------------------
//DELETE

const  destroy = async (req, res) => {
  console.log(req.params);

  try {
    const destroyed = await modelProduct.destroy({
      where:{
        id: req.params.id,
      },
    });
      console.log(destroyed);

      
    // if (destroyed == 1) {
    //   fs.unlink(
    //     path.resolve(__dirname, `../../public/upload/producto_${req.params.id}.webp`)
    //   ),
    //   (error) => {
    //     if (error) {
    //       console.log(error);
    //     }
    //   };
    // }

    res.redirect("/admin");


  } catch (error) {
    console.log(error);
    res.send(error);
  }
}





module.exports = {
    admin,
    create,
    createProduct,
    edit,
    update,
    destroy,
};