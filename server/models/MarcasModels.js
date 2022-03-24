const dbConn = require('../infra/dbCon');

exports.getMarcas = query => {
    return dbConn.query("select * from get_marcas($1,$2,$3)", [query.id, query.status, query.forn]);
}

exports.insertMarcas = query => {
    return dbConn.any('call INSERT_MARCA_PROCEDURE($1,$2)', [query.name, query.forn]);
}

exports.updateMarcas = query => {
    return dbConn.any('call UPDATE_MARCA_PROCEDURE($1,$2,$3)', [query.params.id, query.body.name, query.body.forn])
}

exports.updateStatusMarcas = query => {
    return dbConn.any('call UPDATE_STATUS_MARCA_PROCEDURE($1,$2)', [query.params.id, query.body.active]);
}

exports.deleteMarcas = query => {
    return dbConn.any('call DELETE_MARCA_PROCEDURE($1)', [query]);
}

