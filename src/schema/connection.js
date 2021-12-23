const Sequelize = require('sequelize');

/*
  const Connection = new Sequelize(Nome do banco, usuario do banco, senha do banco
*/

const Connection = new Sequelize('nomalia', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = Connection;