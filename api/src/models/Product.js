const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
    // defino el modelo
    const Product = sequelize.define('product', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    const Cat = sequelize.define('cat', {
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
    const Carrito = sequelize.define("carrito", {
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        estado: {
            type: DataTypes.ENUM("carrito", "creada", "procesando", "cancelada", "completa")
        }
    })
    const User = sequelize.define("user", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        }
    })
const lineorder = sequelize.define("lineorder", {
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    Carrito.belongsToMany(Product, { through: lineorder });
    Product.belongsToMany(Carrito, { through: lineorder });
    Carrito.belongsTo(User);
    Product.belongsToMany(Cat, { through: 'productcat' });
    Cat.belongsToMany(Product, { through: 'productcat' });
}
