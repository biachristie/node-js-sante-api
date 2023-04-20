const Paciente = require('../../models/paciente');

async function listarPacientePorId (req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.id);

        // VALIDAÇÃO: paciente não consta no cadastro
        if (!paciente) {
            return res.status(404).json( { mensagem: 'Paciente não encontrado' } );
        }
    
        return res.status(200).json(paciente);

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = listarPacientePorId;