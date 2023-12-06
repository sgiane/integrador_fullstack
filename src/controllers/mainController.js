
//CONTROLADORES PRINCIPALES

const index = (req, res) =>res.render('home', {layout: "layouts/layoutTienda"});
const contact = (req, res) => res.render('contacto', {layout: "layouts/layoutTienda"});
const about = (req, res) => res.render("about", {layout: "layouts/layoutTienda"});
const faqs = (req, res) => res.render("Faqs", {layout: "layouts/layoutTienda"});




module.exports = {
    index,
    contact,
    about,
    faqs,

};