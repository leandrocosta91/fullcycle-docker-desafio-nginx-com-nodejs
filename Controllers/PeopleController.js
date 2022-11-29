const sequelize = require('../db/config');
const People = require('../models/People');

module.exports = {
    async index(req, res) {
        await sequelize.sync().then(() => {         
            People.create({
                nome: "Leandro de Souza Costa",
                email: "leandro.costa91@outlook.com"
            }).then(response => {
                console.log(response);
            }).catch((error) => {
                console.error('Falha ao criar novo registro: ', error);
            });
         
        }).catch((error) => {
            console.error('Inabilitado para criar tabela: ', error);
        });

        await sequelize.sync().then(() => {
            People.findAll().then(peoples => {
                res.render('index', {peoples: peoples});
            }).catch((error) => {
                console.error('Falha ao recuperar dados: ', error);
            });
        }).catch((error) => {
            console.error('Inabilitado para criar tabela: ', error);
        });
    }
}