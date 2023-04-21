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
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = cadastrarMedico;