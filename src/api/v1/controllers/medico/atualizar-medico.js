const Medico = require('../../models/medico');

async function atualizarMedico (req, res) {
    try {        
        // VALIDAÇÃO: req.body vazio
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json( { mensagem: 'Requisição não pode ser vazia' } );
        }

        // VALIDAÇÃO: req.body.nome_completo vazio
        if (req.body.nome_completo === "") {
            return res.status(400).json( { mensagem: 'Campo NOME_COMPLETO não pode ser vazio' } );
        }

        // VALIDAÇÃO: req.body.data_nascimento vazio
        if (req.body.data_nascimento === "") {
            return res.status(400).json( {mensagem: 'Campo DATA_NASCIMENTO não pode ser vazio'} );
        }

        // VALIDAÇÃO: req.body.cpf vazio
        if (req.body.cpf === "") {
            return res.status(400).json( { mensagem: 'Campo CPF não pode ser vazio' } );
        }

        // VALIDAÇÃO: req.body.instituicao_ensino vazio
        if (req.body.instituicao_ensino === "") {
            return res.status(400).json( { mensagem: 'Campo INSTITUICAO_ENSINO não pode ser vazio' } );
        }

        // VALIDAÇÃO: req.body.crm vazio
        if (req.body.crm === "") {
            return res.status(400).json( { mensagem: 'Campo CRM não pode ser vazio' } );
        }
        
        // VALIDAÇÃO: CPF já consta no cadastro
        if (req.body.cpf) {
            const cpfJaCadastrado = await Medico.findOne(
                { where: {cpf: req.body.cpf} }
            );
    
            if (cpfJaCadastrado) {
                return res.status(409).json( { mensagem: 'CPF já consta no cadastro' } );
            }
        }
        
        // VALIDAÇÃO: CRM já consta no cadastro
        if (req.body.crm) {
            const crmJaCadastrado = await Medico.findOne(
                { where: {crm: req.body.crm} }
            );
    
            if (crmJaCadastrado) {
                return res.status(409).json( { mensagem: 'CRM já consta no cadastro' } );
            }
        }

        const medicoJaCadastrado = await Medico.findByPk(req.params.id);

        // VALIDAÇÃO: médico não consta no cadastro
        if (!medicoJaCadastrado) {
            return res.status(404).json( { mensagem: 'Médico não encontrado' } );
        }

        medicoJaCadastrado.nome_completo = req.body.nome_completo || medicoJaCadastrado.nome_completo;
        medicoJaCadastrado.genero = req.body.genero || medicoJaCadastrado.genero;
        medicoJaCadastrado.data_nascimento = req.body.data_nascimento || medicoJaCadastrado.data_nascimento;
        medicoJaCadastrado.cpf = req.body.cpf || medicoJaCadastrado.cpf;
        medicoJaCadastrado.telefone = req.body.telefone || medicoJaCadastrado.telefone;
        medicoJaCadastrado.instituicao_ensino = req.body.instituicao_ensino || medicoJaCadastrado.instituicao_ensino;
        medicoJaCadastrado.crm = req.body.crm || medicoJaCadastrado.crm;
        medicoJaCadastrado.especializacao = req.body.especializacao || medicoJaCadastrado.especializacao

        await medicoJaCadastrado.save();
        return res.status(200).json(medicoJaCadastrado);

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = atualizarMedico;