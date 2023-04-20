const conexao = require('../../../../database/config-db');
const { Sequelize } = require('sequelize');

const Enfermeiro = conexao.define('enfermeiro', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genero: {
        type: Sequelize.STRING,
        allowNull: true
    },
    data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true
    },
    instituicao_ensino: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cofen: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

module.exports = Enfermeiro;