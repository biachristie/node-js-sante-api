const Paciente = require('../../models/paciente');

async function listarPacientes (req, res) {
    try {
        const filtro = req.query;

        if (filtro.status || filtro.status === '') {
            if(!['AGUARDANDO_ATENDIMENTO', 'EM_ATENDIMENTO', 'ATENDIDO', 'NAO_ATENDIDO'].includes(filtro.status)) {
                return res.status(400).json( { mensagem: 'O status deve ser AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO ou NAO_ATENDIDO' } );
            }
    
            const pacientes = await Paciente.findAll(
                { where: { status_atendimento: filtro.status } }
            );
    
            return res.status(200).json(pacientes);            
        } else {
            const pacientes = await Paciente.findAll();
            return res.status(200).json(pacientes);
        }

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = listarPacientes;