const Medico = require('../../models/medico');

async function listarMedicos (req, res) {
    try {
        const filtro = req.query;

        if (filtro.status || filtro.status === '') {
            if(!['ATIVO', 'INATIVO'].includes(filtro.status)) {
                return res.status(400).json( { mensagem: 'O status deve ser ATIVO ou INATIVO' } );
            }
    
            const medicos = await Medico.findAll(
                { where: { estado: filtro.status } }
            );
    
            return res.status(200).json(medicos);            
        } else {
            const medicos = await Medico.findAll();
            return res.status(200).json(medicos);
        }

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = listarMedicos;