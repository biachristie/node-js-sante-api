const Paciente = require('../../models/paciente');

async function atualizarStatus (req, res) {
    try {
        const paciente = await Paciente.findByPk(req.params.id);

        // VALIDAÇÃO: paciente não consta no cadastro
        if (!paciente) {
            return res.status(404).json( { mensagem: 'Paciente não encontrado' } );
        }

        // VALIDAÇÃO: status é igual ao já cadastrado
        if (paciente.status_atendimento === req.body.status_atendimento) {
            return res.status(400).json( { mensagem: 'O novo status deve ser diferente do status atual' } );
        }

        paciente.status_atendimento = req.body.status_atendimento;
        
        await paciente.save();
        return res.status(200).json(paciente);

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = atualizarStatus;