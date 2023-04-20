const conexao = require('../../../../database/config-db');
const { Sequelize } = require('sequelize');
const Atendimento = require('./atendimento');

const Paciente = conexao.define('paciente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    contato_emergencia: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
    },
    lista_alergias: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lista_cuidados_especificos: {
        type: Sequelize.STRING,
        allowNull: true
    },
    convenio: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status_atendimento: {
        type: Sequelize.ENUM,
        values: ['AGUARDANDO_ATENDIMENTO', 'EM_ATENDIMENTO', 'ATENDIDO', 'NAO_ATENDIDO']
    },
    total_atendimentos: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

Paciente.hasMany(Atendimento, {
    foreignKey: {
        name: 'id_paciente',
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
});

module.exports = Paciente;