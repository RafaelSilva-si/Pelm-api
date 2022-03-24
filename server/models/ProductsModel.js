const database = require('../infra/dbCon');

exports.getProducts = query => {
    console.log(query)
    return database.query('select * from get_product($1, $2, $3, $4, $5)', [query.id, query.status, query.marca, query.grupo, query.cod]);
}

exports.insertProduct = (query) => {
    return database.any('call INSERT_PRODUCT_PROCEDURE($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [query.cod, query.desc, query.ncm, query.forn , query.grupo, query.valor_compra, query.valor_venda, query.valor_margem, query.unidade_medida, query.unidade_vlr, query.marca]);
}

exports.updateProduct = (query) => {
    console.log(query)
    return database.any('call UPDATE_PRODUCT_PROCEDURE($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [query.id, query.cod, query.desc,  query.ncm, query.forn, query.grupo, query.valor_compra, query.valor_venda, query.valor_margem, query.unidade_medida, query.unidade_vlr, query.marca]);
}

exports.updateStatusProduct = query => {
    console.log(query)
    return database.any('call UPDATE_STATUS_PRODUCT_PROCEDURE($1,$2)', [query.params.id, query.body.active])
}

exports.deleteProduct = (query) => {
    console.log(query)
    return database.any('call DELETE_PRODUCT_PROCEDURE($1)', [query.params.id]);
}