const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shopController");

//RUTAS TIENDA

router.get('/shop', shopController.shop);

router.get('/items/:id', shopController.item);
// router.post('/items/:id/add', shopController.itemAdd);
// router.get('/cart', shopController.cart);
// router.post('/cart', shopController.cart);


// // - GET -> /shop
// // - GET -> /shop/item/:id
// // - POST -> /shop/item/:id/add
// // - GET -> /shop/cart
// // - POST -> /shop/cart    
module.exports = router;