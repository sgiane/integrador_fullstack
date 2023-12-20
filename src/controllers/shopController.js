const path = require("path");
const modelProducts = require("../models/productModel");
// const modelCart = require("../models/cartModel");
const modelCategory = require('../models/categoryModel');




//CONTROLADORES DE TIENDA

const shop = async (req, res) => {

    try {
    const productos = await modelProducts.findAll();
    console.log(productos);

    // res.send("Listado de Items");
    res.render('viewsTienda/shop', { productos, layout: "layouts/layoutTienda" });

    } catch (error) {
    console.log(error);
    res.status(500).send(error);
    }

};


// const slider = async (req, res) => {

//     try {
//     const productos = await modelProducts.findAll();
//     console.log(productos);

//     // res.send("Listado de Items");
//     res.render('partials/tienda/slider', { productos, layout: "layouts/layoutTienda"});

//     } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//     }

// };


// const collection = async (req, res) => {

//     try {
//         const producto = await modelProducts.findAll();

//         if (producto){
//             const categories = await modelCategory.findAll();
//             // res.send('colección');
//             console.log(productos)
//             res.render('viewsTienda/collection', {layout: "layouts/layoutTienda", producto, categories })
//         } else {
//             res.redirect("viewsTienda/shop")
//         }
//         ;
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }

// };





const item = async (req, res) => {

    try {
        const producto = await modelProducts.findByPk(req.params.id);

        if (producto){
            res.render('viewsTienda/item', {layout: "layouts/layoutTienda", producto})
        } else {
            res.redirect("viewsTienda/shop")
        }
        ;
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};


// const itemAdd = async (req, res) => {
//     console.log(req.params.user_id);
//     console.log (req.params.id);

//     try {
//         const cart = await modelCart.findOrCreate(req.params.id);

//         if (producto){
//             res.render('viewsTienda/item', {layout: "layouts/layoutTienda", producto})
//         } else {
//             res.redirect("viewsTienda/shop")
//         }
//         ;
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//     }
// };





const cart = (req, res) => res.render('viewsTienda/carrito', {layout: "layouts/layoutTienda"});

module.exports = {
    shop,
    item,
    // collection,
    // slider,
    cart,
    // itemAdd,

};