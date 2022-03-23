const marcasModel = require('../models/MarcasModels');
const resNotification = require('../helpers/res');
const { func } = require('../infra/dbCon');

exports.getMarcas = async function(req, res, next){
    const response = await marcasModel.getMarcas(req.query);
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
};


exports.getMarcasById = async function(req, res, next){
    const response = await marcasModel.getMarcasById(req.params.id);
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
};

exports.insertMarca = async function(req, res, next){
    const response = await marcasModel.insertMarcas(req.body);
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
};

exports.updateMarca = async function(req, res, next){

    const response = await marcasModel.updateMarcas(req);
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
};

exports.updateStatusMarca = async function(req, res, next){
    const response = await marcasModel.updateStatusMarcas(req);
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
};

exports.deleteMarca = async function(req, res, next){
    const response = await marcasModel.deleteMarcas(req.params.id);
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
};
