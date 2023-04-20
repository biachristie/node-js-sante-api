const conexao = require('../../../../database/config-db');
const { Sequelize } = require('sequelize');

const Enfermeiro = conexao.define('enfermeiro', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true,
        onUpdate: 'CASCADE'
    },
    nome_completo: {
        type: Sequelize.STRING(128),
        allowNull: false,
        notEmpty: true
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: true
    },
    data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        notEmpty: true
    },
    cpf: {
        type: Sequelize.STRING(14),
        allowNull: false,
        notEmpty: true,
        unique: true
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    instituicao_ensino: {
        type: Sequelize.STRING(128),
        allowNull: false,
        notEmpty: true
    },
    cofen: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        notEmpty: true
    }
});

module.exports = Enfermeiro;