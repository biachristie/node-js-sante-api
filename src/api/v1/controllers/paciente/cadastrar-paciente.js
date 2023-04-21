const Paciente = require('../../models/paciente');

async function cadastrarPaciente (req, res) {
    try {
        const paciente = {
            nome_completo: req.body.nome_completo,
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
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = cadastrarPaciente;