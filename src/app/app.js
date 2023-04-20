const express = require('express');

const conexao = require('../../database/config-db');

const pacienteRoutes = require('../api/v1/routes/paciente');
const medicoRoutes = require('../api/v1/routes/medico');
const enfermeiroRoutes = require('../api/v1/routes/enfermeiro');
const atendimentoRoutes = require('../api/v1/routes/atendimento');

const app = express();
app.use(express.json());

conexao.authenticate();
conexao.sync( { alter: true } );
console.log('Conexão foi estabelecida com sucesso');

app.get('/', (req, res) => {
    return res.json( { mensagem: 'Bem-vindo(a)!' } )
})

app.use(pacienteRoutes);
app.use(medicoRoutes);
app.use(enfermeiroRoutes);
app.use(atendimentoRoutes);

module.exports = app;