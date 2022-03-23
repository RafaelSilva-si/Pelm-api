const database = require('../infra/dbCon');

exports.getProducts = () => {
    return database.query('select * from products_itens');
}

exports.getProduct = (id) => {
    return database.query(`select * from products_itens where id = &1`, [id]);
}

exports.insertProduct = (query) => {
    return database.any('call INSERT_PRODUCT_PROCEDURE($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [query.cod, query.desc, query.ncm, query.forn , query.grupo, query.valor_compra, query.valor_venda, query.valor_margem, query.unidade_medida, query.unidade_vlr]);
}

exports.updateProduct = (query) => {
    return database.any('call UPDATE_PRODUCT_PROCEDURE($1,$2,$3,$4,$5,$6,$7,$8)', [query.id, query.name, query.cod, query.nsc, query.forn , query.price_buy, query.price_sale, query.margem]);
}

exports.deleteProduct = (query) => {
    return database.any('call DELETE_PRODUCT_PROCEDURE($1)', [query.id]);
}