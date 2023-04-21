const Medico = require('../../models/medico');

async function listarMedicoPorId (req, res) {
    try {
        const medico = await Medico.findByPk(req.params.id);

        // VALIDAÇÃO: médico não consta no cadastro
        if (!medico) {
            return res.status(404).json( { mensagem: 'Médico não encontrado' } );
        }
    
        return res.status(200).json(medico);

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = listarMedicoPorId;