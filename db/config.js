const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://fullcycle:secret@mysql:3306/fullcycle');

sequelize.authenticate()
.then(
    () => console.log('Autenticado.')
)
.catch(
    () => console.log('Erro na autenticação.')
);

sequelize.sync();

module.exports = sequelize;