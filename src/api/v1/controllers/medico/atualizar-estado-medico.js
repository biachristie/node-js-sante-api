const Medico = require('../../models/medico');

async function atualizarEstado (req, res) {
    try {
        const medico = await Medico.findByPk(req.params.id);

        // VALIDAÇÃO: medico não consta no cadastro
        if (!medico) {
            return res.status(404).json( { mensagem: 'Médico não encontrado' } );
        }

        // VALIDAÇÃO: estado é igual ao já cadastrado
        if (medico.estado === req.body.estado) {
            return res.status(400).json( { mensagem: 'O novo estado deve ser diferente do estado atual' } );
        }

        medico.estado = req.body.estado;
        
        await medico.save();
        return res.status(200).json(medico);

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = atualizarEstado;