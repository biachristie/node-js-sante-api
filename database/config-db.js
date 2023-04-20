const { Sequelize } = require('sequelize');

const conexao = new Sequelize({
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
});

module.exports = conexao;