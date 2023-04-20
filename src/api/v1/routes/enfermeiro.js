const { Router } = require('express');

const cadastrarEnfermeiro = require('../controllers/enfermeiro/cadastrar-enfermeiro');
const atualizarEnfermeiro = require('../controllers/enfermeiro/atualizar-enfermeiro');
const listarEnfermeiros = require('../controllers/enfermeiro/listar-enfermeiros');
const listarEnfermeiroPorId = require('../controllers/enfermeiro/listar-enfermeiro-id');
const excluirEnfermeiroPorId = require('../controllers/enfermeiro/excluir-enfermeiro');

const enfermeiroRoutes = new Router();

enfermeiroRoutes
    // Cadastrar um novo enfermeiro
    .post('/api/enfermeiros', cadastrarEnfermeiro)
    
    // Atualizar dados de um enfermeiro
    .put('/api/enfermeiros/:id', atualizarEnfermeiro)

    // Listar todos os enfermeiros
    .get('/api/enfermeiros', listarEnfermeiros)

    // Listar um enfermeiro
    .get('/api/enfermeiros/:id', listarEnfermeiroPorId)

    // Excluir cadastro de um enfermeiro
    .delete('/api/enfermeiros/:id', excluirEnfermeiroPorId);

module.exports = enfermeiroRoutes;