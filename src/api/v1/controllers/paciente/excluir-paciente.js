const Paciente = require('../../models/paciente');

async function excluirPacientePorId (req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.id);
        
        // VALIDAÇÃO: paciente não consta no cadastro
        if (!paciente) {
            return res.status(404).json( { mensagem: 'Paciente não encontrado' } );
        }

        // VALIDAÇÃO: paciente possui atendimentos
        if (paciente.total_atendimentos > 0) {
            return res.status(409).json({ mensagem: 'Paciente possui atendimentos cadastrados'});
        }
    
        await paciente.destroy();
        return res.status(204).json();

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = excluirPacientePorId;