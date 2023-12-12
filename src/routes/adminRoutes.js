const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");


//RUTAS DE ADMIN


router.get('/admin', adminController.admin);
router.get('/admin/create', adminController.create);
router.post("/admin/create", adminController.createProduct);


// router.get('/:id/admin/edit', adminController.edit);
// router.put('/admin/edit/:id',adminController.edit);
// router.delete('/admin/delete/:id',adminController.delete);
// - GET -> /admin
// - GET -> /admin/create
// - POST -> /admin/create
// - GET -> /admin/edit/:id
// - PUT -> /admin/edit/:id
// - DELETE -> /admin/delete/:id
module.exports = router;