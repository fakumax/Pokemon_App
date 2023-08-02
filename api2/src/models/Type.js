import { DataTypes } from 'sequelize';

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Type = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  });
};

export default Type;
