const express = require('express');
const dotenv = require('dotenv').config( { path:'./env/.env' } );

const conexao = require('./database/config-db');
const pacienteRoutes = require('./src/api/v1/routes/paciente');
const medicoRoutes = require('./src/api/v1/routes/medico');
const enfermeiroRoutes = require('./src/api/v1/routes/enfermeiro');
const atendimentoRoutes = require('./src/api/v1/routes/atendimento');

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

app.listen(6666, () => console.log('Aplicação está online'));