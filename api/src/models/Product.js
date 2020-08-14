const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
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
Product.belongsToMany(Cat,{through:"productCat"});
Cat.belongsToMany(Product,{through:"productCat"})
};
