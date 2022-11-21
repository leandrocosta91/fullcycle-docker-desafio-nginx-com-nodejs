const sequelize = require('../db/config');
const People = require('../Models/People');

module.exports = {
    async index(req, res) {

        await sequelize.sync().then(() => {         
            People.create({
                nome: "Leandro de Souza Costa",
                email: "leandro.costa91@outlook.com"
            }).then(res => {
                console.log(res)
            }).catch((error) => {
                console.error('Falha ao criar novo registro : ', error);
            });
         
        }).catch((error) => {
            console.error('Inabilitado para criar tabela : ', error);
        });

        await sequelize.sync().then(() => {
            People.findAll().then(res => {
                res.render('index', {res: res});
            }).catch((error) => {
                console.error('Falha ao recuperar dados : ', error);
            });
        }).catch((error) => {
            console.error('Inabilitado para criar tabela : ', error);
        });
    }
}