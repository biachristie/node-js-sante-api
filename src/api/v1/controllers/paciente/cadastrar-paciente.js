const Paciente = require('../../models/paciente');

async function cadastrarPaciente (req, res) {
    try {
        const paciente = {
            nome: req.body.nome,
            genero: req.body.genero,
            data_nascimento: req.body.data_nascimento,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            contato_emergencia: req.body.contato_emergencia,
            lista_alergias: req.body.lista_alergias,
            lista_cuidados_especificos: req.body.lista_cuidados_especificos,
            convenio: req.body.convenio,
            status_atendimento: req.body.status_atendimento,
            total_atendimentos: req.body.total_atendimentos
        }

        // VALIDAÇÃO: nome é obrigatório
        if (!paciente.nome) {
            return res.status(400).json( { mensagem: 'Campo NOME não pode ser vazio' } );
        }
        
        // VALIDAÇÃO: data de nascimento é obrigatória
        if (!paciente.data_nascimento) {
            return res.status(400).json( { mensagem: 'Campo DATA_NASCIMENTO não pode ser vazio' } );
        }

        // VALIDAÇÃO: CPF é obrigatório
        if (!paciente.cpf) {
            return res.status(400).json( { mensagem: 'Campo CPF não pode ser vazio' } );
        }

        // VALIDAÇÃO: contato de emergência é obrigatório
        if (!paciente.contato_emergencia) {
            return res.status(400).json( { mensagem: 'Campo CONTATO_EMERGENCIA não pode ser vazio' } );
        }
        
        // VALIDAÇÃO: paciente já está cadastrado
        const pacienteJaCadastrado = await Paciente.findOne(
            { where: { cpf: paciente.cpf } }
        );

        if (pacienteJaCadastrado !== null) {
            return res
                .status(409)
                .json( { mensagem: 'Paciente já possui cadastro' } );
        }
    
        const novoPaciente = await Paciente.create(paciente);
        return res.status(201).json({
            paciente,
            identificador: novoPaciente.id,
            atendimentos: novoPaciente.total_atendimentos
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = cadastrarPaciente;