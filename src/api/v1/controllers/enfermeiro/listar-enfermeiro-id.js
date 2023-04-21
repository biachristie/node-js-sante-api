const Enfermeiro = require('../../models/enfermeiro');

async function listarEnfermeiroPorId (req, res) {
    try {
        const enfermeiro = await Enfermeiro.findByPk(req.params.id);

        // VALIDAÇÃO: enfermeiro não consta no cadastro
        if (!enfermeiro) {
            return res.status(404).json( { mensagem: 'Enfermeiro não encontrado' } );
        }
    
        return res.status(200).json(enfermeiro);

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = listarEnfermeiroPorId;