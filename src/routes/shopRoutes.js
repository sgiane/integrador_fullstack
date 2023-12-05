const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

router.get('/shop',shopController.shop);
router.get('/shop/item/:id',shopController.shop);
router.post('/shop/item/:id/add',shopController.shop);
router.get('/shop/cart',shopController.shop);
router.post('/shop/cart',shopController.shop);
// // - GET -> /shop
// // - GET -> /shop/item/:id
// // - POST -> /shop/item/:id/add
// // - GET -> /shop/cart
// // - POST -> /shop/cart    
module.exports = router;