const Paciente = require('../../models/paciente');

async function atualizarPaciente (req, res) {
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

        // VALIDAÇÃO: req.body.contato_emergencia vazio
        if (req.body.contato_emergencia === "") {
            return res.status(400).json( { mensagem: 'Campo CONTATO_EMERGENCIA não pode ser vazio' } );
        }
        
        // VALIDAÇÃO: CPF já consta no cadastro
        if (req.body.cpf) {
            const cpfJaCadastrado = await Paciente.findOne(
                { where: {cpf: req.body.cpf} }
            );
    
            if (cpfJaCadastrado) {
                return res.status(409).json( { mensagem: 'CPF já consta no cadastro' } );
            }
        }

        const pacienteJaCadastrado = await Paciente.findByPk(req.params.id);

        // VALIDAÇÃO: paciente não consta no cadastro
        if (!pacienteJaCadastrado) {
            return res.status(404).json( { mensagem: 'Paciente não encontrado' } );
        }

        pacienteJaCadastrado.nome_completo = req.body.nome || pacienteJaCadastrado.nome_completo;
        pacienteJaCadastrado.genero = req.body.genero || pacienteJaCadastrado.genero;
        pacienteJaCadastrado.data_nascimento = req.body.data_nascimento || pacienteJaCadastrado.data_nascimento;
        pacienteJaCadastrado.cpf = req.body.cpf || pacienteJaCadastrado.cpf;
        pacienteJaCadastrado.telefone = req.body.telefone || pacienteJaCadastrado.telefone;
        pacienteJaCadastrado.contato_emergencia = req.body.contato_emergencia || pacienteJaCadastrado.contato_emergencia;
        pacienteJaCadastrado.lista_alergias = req.body.lista_alergias || pacienteJaCadastrado.lista_alergias;
        pacienteJaCadastrado.lista_cuidados_especificos = req.body.lista_cuidados_especificos || pacienteJaCadastrado.lista_cuidados_especificos;
        pacienteJaCadastrado.convenio = req.body.convenio || pacienteJaCadastrado.convenio;
        
        await pacienteJaCadastrado.save();
        return res.status(200).json(pacienteJaCadastrado);

    } catch (error) {
        return res.status(500).json( { mensagem: 'Não foi possível processar a requisição' } );
    }
}

module.exports = atualizarPaciente;