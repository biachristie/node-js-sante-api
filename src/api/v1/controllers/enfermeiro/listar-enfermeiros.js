const Enfermeiro = require('../../models/enfermeiro');

async function listarEnfermeiros (req, res) {
    try {        
        const enfermeiros = await Enfermeiro.findAll();
        return res.status(200).json(enfermeiros);

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = listarEnfermeiros;