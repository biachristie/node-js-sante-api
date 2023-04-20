const conexao = require('../../../../database/config-db');
const { Sequelize } = require('sequelize');

const Atendimento = conexao.define('atendimento', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true,
        onUpdate: 'CASCADE'
    },
    id_paciente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE'
    },
    id_medico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE'
    }
});

module.exports = Atendimento;