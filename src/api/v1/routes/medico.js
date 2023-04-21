const { Router } = require('express');

// MIDDLEWARES
const cadastro = require('../middlewares/medico/cadastro');
const atualizacao = require('../middlewares/medico/atualizacao');
const status = require('../middlewares/medico/status');

// CONTROLLERS
const cadastrarMedico = require('../controllers/medico/cadastrar-medico');
const atualizarMedico = require('../controllers/medico/atualizar-medico');
const atualizarEstado = require('../controllers/medico/atualizar-estado-medico');
const listarMedicos = require('../controllers/medico/listar-medicos');
const listarMedicoPorId = require('../controllers/medico/listar-medico-id');
const excluirMedicoPorId = require('../controllers/medico/excluir-medico');

// ROUTES
const medicoRoutes = new Router();

medicoRoutes
    // Cadastrar um novo médico
    .post('/api/medicos', cadastro.validarBody, cadastrarMedico)
    
    // Atualizar dados de um médico
    .put('/api/medicos/:id', atualizacao.validarBody, atualizarMedico)
    
    // Atualizar o estado de um médico
    .put('/api/medicos/:id/status', status.validarBody, atualizarEstado)

    // Listar todos os médicos
    .get('/api/medicos', listarMedicos)

    // Listar um médico
    .get('/api/medicos/:id', listarMedicoPorId)

    // Excluir cadastro de um médico
    .delete('/api/medicos/:id', excluirMedicoPorId);

module.exports = medicoRoutes;