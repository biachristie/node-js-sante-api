const conexao = require('../../../../database/config-db');
const { Sequelize } = require('sequelize');

const Atendimento = conexao.define('atendimento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    }
});

module.exports = Atendimento;