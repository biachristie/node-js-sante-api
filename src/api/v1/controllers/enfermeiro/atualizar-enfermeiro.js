const Enfermeiro = require('../../models/enfermeiro');

async function atualizarEnfermeiro (req, res) {
    try {
        const enfermeiroJaCadastrado = await Enfermeiro.findByPk(req.params.id);

        // VALIDAÇÃO: enfermeiro não consta no cadastro
        if (!enfermeiroJaCadastrado) {
            return res.status(404).json( { mensagem: 'Enfermeiro não encontrado' } );
        }
        
        // VALIDAÇÃO: req.body vazio
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json( { mensagem: 'Requisição não pode ser vazia' } );
        }
        
        // VALIDAÇÃO: CPF já consta no cadastro
        if (req.body.cpf) {
            const cpfJaCadastrado = await Enfermeiro.findOne(
                { where: {cpf: req.body.cpf} }
            );
    
            if (cpfJaCadastrado) {
                return res.status(409).json( { mensagem: 'CPF já consta no cadastro' } );
            }
        }
        
        // VALIDAÇÃO: COFEN já consta no cadastro
        if (req.body.cofen) {
            const cofenJaCadastrado = await Enfermeiro.findOne(
                { where: {cofen: req.body.cofen} }
            );
    
            console.log(cofenJaCadastrado);
            if (cofenJaCadastrado) {
                return res.status(409).json( { mensagem: 'COFEN já consta no cadastro' } );
            }
        }

        enfermeiroJaCadastrado.nome = req.body.nome || enfermeiroJaCadastrado.nome;
        enfermeiroJaCadastrado.genero = req.body.genero || enfermeiroJaCadastrado.genero;
        enfermeiroJaCadastrado.data_nascimento = req.body.data_nascimento || enfermeiroJaCadastrado.data_nascimento;
        enfermeiroJaCadastrado.cpf = req.body.cpf || enfermeiroJaCadastrado.cpf;
        enfermeiroJaCadastrado.telefone = req.body.telefone || enfermeiroJaCadastrado.telefone;
        enfermeiroJaCadastrado.instituicao_ensino = req.body.instituicao_ensino || enfermeiroJaCadastrado.instituicao_ensino;
        enfermeiroJaCadastrado.cofen = req.body.crm || enfermeiroJaCadastrado.cofen;

        await enfermeiroJaCadastrado.save();
        return res.status(200).json(enfermeiroJaCadastrado);

    } catch (error) {
        console.log(error);
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = atualizarEnfermeiro;