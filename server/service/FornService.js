const FornModel = require('../models/FornModel');
const resNotification = require('../helpers/res');

exports.getForn =  async function(req, res, next){
    const response = await FornModel.getForn(req.query);
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
}

exports.insertForn = async function(req, res, next){
    const response = await FornModel.insertForn(req.body);
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
}

exports.updateStatus = async function(req, res, next){
    const response = await FornModel.updateStatus(req);
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
}

exports.updateForn = async function(req, res, next){
    const response = await FornModel.updateForn(req);
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
}

exports.deleteForn = async function(req, res, next){
    const response = await FornModel.deleteForn(req.params.id);
    if(!response){
        resNotification.error(next, response)
    } else {
        return resNotification.sucess(res, response)
    }
}