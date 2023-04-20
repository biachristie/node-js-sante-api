const { Router } = require('express');
const cadastrarAtendimento = require('../controllers/atendimento/cadastrar-atendimento');

const atendimentoRoutes = new Router();

atendimentoRoutes
    // Cadastra um novo atendimento
    .post('/api/atendimentos', cadastrarAtendimento);

module.exports = atendimentoRoutes;