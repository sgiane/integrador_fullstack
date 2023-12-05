const express = require("express");
const app = express();
const path = require("path");
const expressLayouts =require("express-ejs-layouts");
const methosOverride = require("method-override");


app.use(express.static( path.join(__dirname,"/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.use(expressLayouts);
app.set("layout", "layouts/layout"); 

app.use(express.urlencoded({extended:false}));
app.use(methosOverride("_method"));


// const mainRoutes = require("./scr/routes/mainRoutes");
// const shopRoutes = require("./scr/routes/shop/shopRoutes");
// const productRoutes = require("./scr/routes/admin/adminRoutes");
// const authRoutes = require("./scr/routes/auth/authRoutes");

// app.use('/', mainRoutes);
// app.use('/', shopRoutes);
// app.use('/admin', productRoutes);
// app.use('/admin', authRoutes);

app.use((req, res, next) => {
    res.status(404).send("la pagina no existe");
});


const PORT = 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
