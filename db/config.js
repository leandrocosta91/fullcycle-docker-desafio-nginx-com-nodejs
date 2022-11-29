const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'fullcycle',
    'root',
    'secret',
    {
        host: 'mysql',
        dialect: 'mysql'
    }
);

sequelize.authenticate()
.then(
    () => console.log('Autenticado.')
)
.catch(
    () => console.log('Erro na autenticação.')
);

sequelize.sync();

module.exports = sequelize;