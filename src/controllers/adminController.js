const model = require('../../models/productModel');
// const model = require('../../models/userModel');


//CONTROLADORES DE ADMIN

const admin = (req, res) => res.render('viewsAdmin/admin', {layout: "layouts/layoutAdmin"});
const create = (req, res) => res.render('viewsAdmin/create', {layout: "layouts/layoutAdmin"});
const edit = (req, res) => res.render('viewsAdmin/edit', {layout: "layouts/layoutAdmin"});


module.exports = {
    admin,
    create,
    edit,
};