const Enfermeiro = require('../../models/enfermeiro');

async function excluirEnfermeiroPorId (req, res) {
    try {
        const enfermeiro = await Enfermeiro.findByPk(req.params.id);
        
        // VALIDAÇÃO: enfermeiro não consta no cadastro
        if (!enfermeiro) {
            return res.status(404).json( { mensagem: 'Enfermeiro não encontrado' } );
        }
    
        await enfermeiro.destroy();
        return res.status(204).json();

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = excluirEnfermeiroPorId;