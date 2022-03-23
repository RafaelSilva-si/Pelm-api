const database = require('../infra/dbCon');

exports.getForn = (query) => {
    return database.query('select * from GET_FORNS($1,$2,$3)', [query.id, query.status, query.doc])
}

exports.insertForn =  query => {
    return database.any('call INSERT_FORN_PROCEDURE($1,$2,$3,$4,$5, $6)', [query.forn, query.documento, query.endereco, query.telefone, query.celular , query.representante]);
}

exports.updateForn =  query => {
    return database.any('call UPDATE_FORN_PROCEDURE($1,$2,$3,$4,$5,$6,$7)', [query.params.id, query.body.forn, query.body.documento, query.body.endereco, query.body.telefone, query.body.celular, query.body.representante]);
}

exports.deleteForn =  id => {
    return database.any('call DELECT_FORN_PROCEDURE($1)', [id]);
}

exports.updateStatus =  query => {
    return database.any('call UPDATE_STATUS_FORN_PROCEDURE($1,$2)', [query.params.id, query.body.active]);
}