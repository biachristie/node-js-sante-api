const { Router } = require('express');

// MIDDLEWARES
const cadastro = require('../middlewares/atendimento/cadastro');

// CONTROLLERS
const cadastrarAtendimento = require('../controllers/atendimento/cadastrar-atendimento');

// ROUTES
const atendimentoRoutes = new Router();

atendimentoRoutes
    // Cadastra um novo atendimento
    .post('/api/atendimentos', cadastro.validarBody, cadastrarAtendimento);

module.exports = atendimentoRoutes;