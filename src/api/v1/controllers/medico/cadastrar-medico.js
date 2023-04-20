const Medico = require('../../models/medico');

async function cadastrarMedico (req, res) {
    try {
        const medico = {
            nome_completo: req.body.nome_completo,
            genero: req.body.genero,
            data_nascimento: req.body.data_nascimento,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            instituicao_ensino: req.body.instituicao_ensino,
            crm: req.body.crm,
            especializacao: req.body.especializacao,
            estado: req.body.estado,
            total_atendimentos: req.body.total_atendimentos
        }

        // VALIDAÇÃO: nome é obrigatório
        if (!medico.nome_completo) {
            return res.status(400).json( { mensagem: 'Campo NOME_COMPLETO não pode ser vazio' } );
        }
        
        // VALIDAÇÃO: data de nascimento é obrigatória
            if (!medico.data_nascimento) {
                return res.status(400).json( { mensagem: 'Campo DATA_NASCIMENTO não pode ser vazio' } );
            }

        // VALIDAÇÃO: CPF é obrigatório
        if (!medico.cpf) {
            return res.status(400).json( { mensagem: 'Campo CPF não pode ser vazio' } );
        }

        // VALIDAÇÃO: instituição de ensino de formação é obrigatória
        if (!medico.instituicao_ensino) {
            return res.status(400).json( { mensagem: 'Campo INSTITUICAO_ENSINO não pode ser vazio' } );
        }

        // VALIDAÇÃO: CRM é obrigatório
        if (!medico.crm) {
            return res.status(400).json( { mensagem: 'Campo CRM não pode ser vazio' } );
        }

        // VALIDAÇÃO: especialização é obrigatória
        if (!medico.especializacao) {
            return res.status(400).json( { mensagem: 'Campo ESPECIALIZACAO não pode ser vazio' } );
        }

        // VALIDAÇÃO: especialização difere das opções permitidas
        if (!['CLINICA_GERAL', 'ANESTESIA', 'DERMATOLOGIA', 'GINECOLOGIA', 'NEUROLOGIA', 'PEDIATRIA', 'PSIQUIATRIA', 'ORTOPEDIA']
            .includes(medico.especializacao)) {
                return res.status(400).json(
                    { mensagem: 'O status deve ser CLINICA_GERAL, ANESTESIA, DERMATOLOGIA, GINECOLOGIA, NEUROLOGIA, PEDIATRIA, PSIQUIATRIA ou ORTOPEDIA' }
                );
        }
        
        // VALIDAÇÃO: médico já está cadastrado
        const medicoJaCadastrado = await Medico.findOne(
            { where: { cpf: medico.cpf } }
        );

        // VALIDAÇÃO: médico com CRM já cadastrado
        const crmJaCadastrado = await Medico.findOne(
            { where: { crm: medico.crm } }
        );

        if (medicoJaCadastrado !== null || crmJaCadastrado !== null) {
            return res
                .status(409)
                .json( { mensagem: 'Médico já possui cadastro' } );
        }
    
        const novoMedico = await Medico.create(medico);
        return res.status(201).json({
            medico,
            identificador: novoMedico.id,
            atendimentos: novoMedico.total_atendimentos
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = cadastrarMedico;