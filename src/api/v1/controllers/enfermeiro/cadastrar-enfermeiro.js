const Enfermeiro = require('../../models/enfermeiro');

async function cadastrarEnfermeiro (req, res) {
    try {
        const enfermeiro = {
            nome_completo: req.body.nome_completo,
            genero: req.body.genero,
            data_nascimento: req.body.data_nascimento,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            instituicao_ensino: req.body.instituicao_ensino,
            cofen: req.body.cofen
        }

        // VALIDAÇÃO: nome é obrigatório
        if (!enfermeiro.nome_completo) {
            return res.status(400).json( { mensagem: 'Campo NOME_COMPLETO não pode ser vazio' } );
        }
        
        // VALIDAÇÃO: data de nascimento é obrigatória
            if (!enfermeiro.data_nascimento) {
                return res.status(400).json( { mensagem: 'Campo DATA_NASCIMENTO não pode ser vazio' } );
            }

        // VALIDAÇÃO: CPF é obrigatório
        if (!enfermeiro.cpf) {
            return res.status(400).json( { mensagem: 'Campo CPF não pode ser vazio' } );
        }

        // VALIDAÇÃO: instituição de ensino de formação é obrigatória
        if (!enfermeiro.instituicao_ensino) {
            return res.status(400).json( { mensagem: 'Campo INSTITUICAO_ENSINO não pode ser vazio' } );
        }

        // VALIDAÇÃO: CRM é obrigatório
        if (!enfermeiro.cofen) {
            return res.status(400).json( { mensagem: 'Campo COFEN não pode ser vazio' } );
        }
        
        // VALIDAÇÃO: enfermeiro já está cadastrado
        const enfermeiroJaCadastrado = await Enfermeiro.findOne(
            { where: { cpf: enfermeiro.cpf } }
        );

        // VALIDAÇÃO: enfermeiro com COFEN já cadastrado
        const cofenJaCadastrado = await Enfermeiro.findOne(
            { where: { cofen: enfermeiro.cofen } }
        );

        if (enfermeiroJaCadastrado !== null || cofenJaCadastrado !== null) {
            return res
                .status(409)
                .json( { mensagem: 'Enfermeiro já possui cadastro' } );
        }
    
        const novoEnfermeiro = await Enfermeiro.create(enfermeiro);
        return res.status(201).json({
            enfermeiro,
            identificador: novoEnfermeiro.id
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = cadastrarEnfermeiro;