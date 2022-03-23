const  { getStatusText, INTERNAL_SERVER_ERROR } = require('http-status-codes');

function error(err, res) {
  const { statusCode, message } = err;

  const status = statusCode || INTERNAL_SERVER_ERROR;

  const response = {
    status,
    message: getStatusText(status),
  };

  if (message) {
    console.log(message);
    response.data = message;
  } else {
    console.error(err);
  }

  res.status(status).json(response);
}

const errorHandler = (err, req, res, next) => {
  error(err, res);
};

class ErrorRoute extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = ErrorRoute;

module.exports = errorHandler;
