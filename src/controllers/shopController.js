
//CONTROLADORES DE TIENDA

const shop = (req, res) =>res.render('viewsTienda/shop', {layout: "layouts/layoutTienda"});
const item = (req, res) => res.render('viewsTienda/item', {layout: "layouts/layoutTienda"});
const cart = (req, res) => res.render('viewsTienda/carrito', {layout: "layouts/layoutTienda"});

module.exports = {
    shop,
    item,
    cart,

};