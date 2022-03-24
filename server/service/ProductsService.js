const productsModel = require('../models/ProductsModel');
const resNotification = require('../helpers/res');

exports.getProducts = async function (req, res, next) {
    const response = await productsModel.getProducts(req.query);
    if (!response) {
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
};



exports.insertProduct = async function (req, res, next) {

    const data = {
        cod: req.body.cod,
        desc: req.body.descr,
        ncm: req.body.ncm,
        forn: req.body.forn,
        grupo: req.body.grupo,
        valor_compra: req.body.vlr_compra,
        valor_venda: req.body.vlr_venda,
        valor_margem: req.body.margem,
        unidade_medida: req.body.unidade_medida == 1 || req.body.unidade_medida === 'KG' ? 'KG' : 'UNID',
        unidade_vlr: req.body.unidade_valor,
        marca: req.body.marca

    }

    const response = await productsModel.insertProduct(data);
    if (!response) {
        resNotification.error(next, response)
    } else {
        resNotification.sucess(res, response)
    }
};

exports.updateProduct = async function (req, res, next) {
    const data = {
        id: parseInt(req.params.id),
        cod: req.body.params.cod,
        desc: req.body.params.descr,
        ncm: req.body.params.ncm,
        forn: req.body.params.forn,
        grupo: req.body.params.grupo,
        valor_compra: req.body.params.vlr_compra,
        valor_venda: req.body.params.vlr_venda,
        valor_margem: req.body.params.margem,
        unidade_medida: req.body.params.unidade_medida == 1 || req.body.unidade_medida === 'KG' ? 'KG' : 'UNID',
        unidade_vlr: req.body.params.unidade_valor,
        marca: req.body.params.marca
    }
    const response = await productsModel.updateProduct(data);
    if (!response) {
        resNotification.error(next, response)
    } else {
        resNotification.sucess(res, response)
    }
};

exports.deleteProduct = async function (req, res, next) {
    const response = await productsModel.deleteProduct(req);
    if (!response) {
        resNotification.error(next, response)
    } else {
        resNotification.sucess(res, response)
    }
};

exports.updateStatusProduct = async function (req, res, next) {
    const response = await productsModel.updateStatusProduct(req);
    if (!response) {
        resNotification.error(next, response)
    } else {
        resNotification.sucess(res, response)
    }
}