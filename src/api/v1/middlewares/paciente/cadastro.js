function validarBody (req, res, next) {
    const { body } = req;

    // VALIDAÇÃO: req.body vazio
    if (Object.keys(body).length === 0) {
        return res.status(400).json( { mensagem: 'Requisição não pode ser vazia' } );
    }

    // VALIDAÇÃO: nome é obrigatório
    if (!body.nome_completo) {
        console.log(body.nome_completo);
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

    // VALIDAÇÃO: contato de emergência é obrigatório
    if (!body.contato_emergencia) {
        return res.status(400).json( { mensagem: 'Campo CONTATO_EMERGENCIA não pode ser vazio' } );
    }

    next();
}

module.exports = {
    validarBody
};