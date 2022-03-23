const productsModel = require('../models/ProductsModel');
const resNotification = require('../helpers/res');

exports.getProducts = async function (req, res, next) {
    const response =  await productsModel.getProducts();
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
};

exports.getProduct = async function (req, res, next){
    const response = await productsModel.getProduct(req);
    if(!response){
        resNotification.error(next, response)
    } else {
        resNotification.sucess(res, response)
    }
};

exports.insertProduct = async function (req, res, next){
    console.log(req)
    const data ={
        cod: req.cod,
        desc: req.desc,
        ncm: req.ncm,
        forn: parseInt(req.forn),
        grupo: '1',
        valor_compra: parseFloat(req.vlr_compra),
        valor_venda: parseFloat(req.vlr_venda),
        valor_margem: parseFloat(req.margem),
        unidade_medida: 'KG',
        unidade_vlr: '1.00',
        
    }

    const response = await productsModel.insertProduct(data);
    if(!response){
        resNotification.error(next, response)
    } else {
        resNotification.sucess(res, response)
    }
};

exports.updateProduct = async function (req, res, next){
    const response = await productsModel.updateProduct(req);
    if(!response){
        resNotification.error(next, response)
    } else {
        resNotification.sucess(res, response)
    }
};

exports.deleteProduct = async function (req, res, next){
    const response = await productsModel.deleteProduct(req);
    if(!response){
        resNotification.error(next, response)
    } else {
        resNotification.sucess(res, response)
    }
};