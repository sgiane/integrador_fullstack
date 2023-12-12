const { DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

// Tabla Categoría

const Category = sequelize.define('category', {
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category_description: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
});

 //Sincronización
 (async () => {
    await sequelize.sync();
})();

module.exports = Category;