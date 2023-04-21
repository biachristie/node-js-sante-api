function validarBody (req, res, next) {
    const { body } = req;

    // VALIDAÇÃO: req.body vazio
    if (Object.keys(body).length === 0) {
        return res.status(400).json( { mensagem: 'Requisição não pode ser vazia' } );
    }
    
    // VALIDAÇÃO: nome é obrigatório
    if (!body.nome_completo) {
        return res.status(400).json( { mensagem: 'Campo NOME_COMPLETO não pode ser vazio' } );
    }
    
    // VALIDAÇÃO: data de nascimento é obrigatória
    if (!body.data_nascimento) {
        return res.status(400).json( { mensagem: 'Campo DATA_NASCIMENTO não pode ser vazio' } );
    }

    // VALIDAÇÃO: CPF é obrigatório
    if (!body.cpf) {
        return res.status(400).json( { mensagem: 'Campo CPF não pode ser vazio' } );
    }

    // VALIDAÇÃO: instituição de ensino de formação é obrigatória
    if (!body.instituicao_ensino) {
        return res.status(400).json( { mensagem: 'Campo INSTITUICAO_ENSINO não pode ser vazio' } );
    }

    // VALIDAÇÃO: CRM é obrigatório
    if (!body.crm) {
        return res.status(400).json( { mensagem: 'Campo CRM não pode ser vazio' } );
    }

    // VALIDAÇÃO: especialização é obrigatória
    if (!body.especializacao) {
        return res.status(400).json( { mensagem: 'Campo ESPECIALIZACAO não pode ser vazio' } );
    }

    next();
}

module.exports = {
    validarBody
};