const { getStatusText, INTERNAL_SERVER_ERROR, OK } = require('http-status-codes');
const {ErrorRoute} = require('../helpers/erros');


exports.sucess = (res, data) => {
    return res.status(OK).send({
        status: OK,
        message: getStatusText(OK),
        data,
      });
}

exports.error = (err, data) => {

  let errr = error;

  if (typeof error === 'object'
      && Object.hasOwnProperty.call(error, 'message')) {
    errr = error.message;
  }

  next(new ErrorRoute(INTERNAL_SERVER_ERROR, errr));

}