const { Router } = require('express');

const cadastrarPaciente = require('../controllers/paciente/cadastrar-paciente');
const atualizarPaciente = require('../controllers/paciente/atualizar-paciente');
const atualizarStatus = require('../controllers/paciente/atualizar-status-paciente');
const listarPacientes = require('../controllers/paciente/listar-pacientes');
const listarPacientePorId = require('../controllers/paciente/listar-paciente-id');
const excluirPacientePorId = require('../controllers/paciente/excluir-paciente');

const pacienteRoutes = new Router();

pacienteRoutes
    // Cadastrar um novo paciente
    .post('/api/pacientes', cadastrarPaciente)

    // Atualizar dados de um paciente
    .put('/api/pacientes/:id', atualizarPaciente)
    
    // Atualizar status de atendimento de um paciente
    .put('/api/pacientes/:id/status', atualizarStatus)
    
    // Listar todos os pacientes
    .get('/api/pacientes', listarPacientes)
    
    // Listar um paciente
    .get('/api/pacientes/:id', listarPacientePorId)
    
    // Excluir cadastro de um paciente
    .delete('/api/pacientes/:id', excluirPacientePorId);

module.exports = pacienteRoutes;