function validarBody (req, res, next) {
    const { body } = req;

    // VALIDAÇÃO: req.body vazio
    if (Object.keys(body).length === 0) {
        return res.status(400).json( { mensagem: 'Campo ESTADO é obrigatório' } );
    }

    // VALIDAÇÃO: estado difere das opções permitidas
    if (!['ATIVO', 'INATIVO'].includes(body.estado)) {
        return res.status(400).json( { mensagem: 'O estado deve ser ATIVO ou INATIVO' } );
    }

    next();
}

module.exports = {
    validarBody
};