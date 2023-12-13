const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const multer = require("multer");
const upload = multer({storage:multer.memoryStorage() });


//RUTAS DE ADMIN


router.get('/admin', adminController.admin);
router.get('/admin/create', adminController.create);
router.post("/admin/create", upload.single("imagen"), adminController.createProduct);

router.get("/admin/edit/:id", adminController.edit);
router.put("/:id", upload.single("imagen"),  adminController.update);

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