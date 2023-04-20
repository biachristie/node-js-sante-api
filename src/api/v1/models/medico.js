const conexao = require('../../../../database/config-db');
const { Sequelize } = require('sequelize');
const Atendimento = require('./atendimento');

const Medico = conexao.define('medico', {
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
    crm: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    especializacao: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ['CLINICA_GERAL', 'ANESTESIA', 'DERMATOLOGIA', 'GINECOLOGIA', 'NEUROLOGIA', 'PEDIATRIA', 'PSIQUIATRIA', 'ORTOPEDIA']
    },
    estado: {
        type: Sequelize.ENUM,
        values: ['ATIVO', 'INATIVO'],
        defaultValue: 'ATIVO'
    },
    total_atendimentos: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
});

Medico.hasMany(Atendimento, {
    foreignKey: {
        name: 'id_medico',
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
});

module.exports = Medico;