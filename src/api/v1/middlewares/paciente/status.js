function validarBody (req, res, next) {
    const { body } = req;

    // VALIDAÇÃO: req.body vazio
    if (Object.keys(body).length === 0) {
        return res.status(400).json( { mensagem: 'Campo STATUS_ATENDIMENTO é obrigatório' } );
    }

    // VALIDAÇÃO: status difere das opções permitidas
    if (!['AGUARDANDO_ATENDIMENTO', 'EM_ATENDIMENTO', 'ATENDIDO', 'NAO_ATENDIDO'].includes(body.status_atendimento)) {
        return res.status(400).json( { mensagem: 'O status deve ser AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO ou NAO_ATENDIDO' } );
    }

    next();
}

module.exports = {
    validarBody
};