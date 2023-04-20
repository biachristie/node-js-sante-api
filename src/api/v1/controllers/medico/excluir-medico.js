const Medico = require('../../models/medico');

async function excluirMedicoPorId (req, res) {
    try {
        const medico = await Medico.findByPk(req.params.id);
        
        // VALIDAÇÃO: Médico não consta no cadastro
        if (!medico) {
            return res.status(404).json( { mensagem: 'Médico não encontrado' } );
        }

        // VALIDAÇÃO: médico possui atendimentos
        if (medico.total_atendimentos > 0) {
            return res.status(409).json({ mensagem: 'Médico possui atendimentos cadastrados'});
        }
    
        await medico.destroy();
        return res.status(204).json();

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = excluirMedicoPorId;