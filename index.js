require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const methosOverride = require("method-override");

const sequelize = require("./src/config/connect");

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.use(expressLayouts);
app.set('layout', "layouts/layout");

app.use(express.urlencoded({extended:false}));
app.use(methosOverride("_method"));

// app.use(require("./src/routes/authRoutes"));

const mainRoutes = require('./src/routes/mainRoutes');
app.use(mainRoutes);

const shopRoutes = require('./src/routes/shopRoutes');
app.use(shopRoutes);

const adminRoutes = require('./src/routes/adminRoutes');
app.use(adminRoutes);

const authRoutes = require('./src/routes/authRoutes');
app.use(authRoutes);

// const productRoutes = require("./scr/routes/admin/adminRoutes");
 // app.use(productRoutes);
// app.use('/admin', productRoutes);


app.use((req, res, next) => {
    res.status(404).send("La pagina no existe");
});


const PORT = 3000;
app.listen(PORT, () => {
    try {
        sequelize.authenticate();
    } catch (error) {
        console.log(error);
    }
    
    console.log(`http://localhost:${PORT}`)
});
