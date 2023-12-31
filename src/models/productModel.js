const { DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

// Tabla Producto

const Producto = sequelize.define('product', {
    
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_description: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: { 
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    stock: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    discount: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    sku: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    dues: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // image_front: { 
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // image_back: { 
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // create_time: { 
    //     type: DataTypes.DATE,
    //     allowNull: false,
    // },
    license_id: { 
        type: DataTypes.INTEGER,
        
        allowNull: false,
    },
    category_id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

 //Sincronización
(async () => {
    await sequelize.sync();
})();

module.exports = Producto;