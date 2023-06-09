const Atendimento = require('../../models/atendimento');
const Medico = require('../../models/medico');
const Paciente = require('../../models/paciente');

async function cadastrarAtendimento (req, res) {
    try {
        const paciente = await Paciente.findByPk(req.body.id_paciente);
        const medico = await Medico.findByPk(req.body.id_medico);

        // VALIDAÇÃO: paciente não consta no cadastro
        if (!paciente) {
            return res.status(404).json( { mensagem: 'Paciente não encontrado' } );
        }
        
        // VALIDAÇÃO: médico não consta no cadastro
        if (!medico) {
            return res.status(404).json( { mensagem: 'Médico não encontrado' } );
        }
        
        const atendimento = {
            id_paciente: paciente.id,
            id_medico: medico.id
        };
        
        paciente.status_atendimento = 'ATENDIDO';
        paciente.total_atendimentos += 1;
        medico.total_atendimentos += 1;
        
        await paciente.save();
        await medico.save();

        const novoAtendimento = await Atendimento.create(atendimento);
        return res.status(200).json(novoAtendimento);

    } catch (error) {
        return res.status(500).json( { message: 'Não foi possível processar a requisição'} );
    }
}

module.exports = cadastrarAtendimento;