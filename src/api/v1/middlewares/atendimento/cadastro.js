function validarBody (req, res, next) {
    const { body } = req;

    // VALIDAÇÃO: req.body vazio
    if (Object.keys(body).length === 0) {
        return res.status(400).json( { mensagem: 'Requisição não pode ser vazia' } );
    }

    // VALIDAÇÃO: id_paciente e id_medico são obrigatórios
    if (!body.id_paciente || !body.id_medico) {
        return res.status(400).json( { mensagem: 'Campos ID_PACIENTE e ID_MEDICO são obrigatórios' } );
    }

    next();
}

module.exports = {
    validarBody
};