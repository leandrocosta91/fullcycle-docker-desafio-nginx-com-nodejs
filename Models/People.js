const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const People = sequelize.define('peoples', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true
      }
});

sequelize.sync().then(() => {
  console.log('Tabela people foi criada com sucesso!');
}).catch((error) => {
  console.error('Inabilitado para criar tabela: ', error);
});

module.exports = People;