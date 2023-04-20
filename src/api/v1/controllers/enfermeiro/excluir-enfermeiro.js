const Enfermeiro = require('../../models/enfermeiro');

async function excluirEnfermeiroPorId (req, res) {
    try {
        const enfermeiro = await Enfermeiro.findByPk(req.params.id);
        
        // VALIDAÇÃO: Enfermeiro não consta no cadastro
        if (!enfermeiro) {
            return res.status(404).json( { mensagem: 'Enfermeiro não encontrado' } );
        }

        // VALIDAÇÃO: enfermeiro possui atendimentos
        if (enfermeiro.total_atendimentos > 0) {
            return res.status(409).json({ mensagem: 'Enfermeiro possui atendimentos cadastrados'});
        }
    
        await enfermeiro.destroy();
        return res.status(204).json();

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = excluirEnfermeiroPorId;