const { DataTypes } = require("sequelize");
const sequelize = require("../config/connect");

// Tabla Licencia

const License = sequelize.define('license', {
    license_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    license_description: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    license_image: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
});

 //Sincronización
 (async () => {
    await sequelize.sync();
})();

module.exports = License;