const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

//RUTAS PRINCIPALES 
router.get('/', mainController.index);
router.get('/contacto', mainController.contact);
router.get('/about', mainController.about);
router.get('/faqs', mainController.faqs);



module.exports = router;