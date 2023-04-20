const conexao = require('../../../../database/config-db');
const { Sequelize } = require('sequelize');
const Atendimento = require('./atendimento');

const Medico = conexao.define('medico', {
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
    crm: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
        unique: true
    },
    especializacao: {
        type: Sequelize.ENUM,
        allowNull: false,
        notEmpty: true,
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

Medico.hasMany(Atendimento, { sourceKey: 'id', foreignKey: 'id_medico' } );
Atendimento.belongsTo(Medico, { foreignKey: 'id_medico' });

module.exports = Medico;