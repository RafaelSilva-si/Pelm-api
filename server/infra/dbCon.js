
const initOptions = {
    // global event notification;
    error(error, e) {
        if (e.cn) {
            // A connection-related error;
            //
            // Connections are reported back with the password hashed,
            // for safe errors logging, without exposing passwords.
            console.log('CN:', e.cn);
            console.log('EVENT:', error.message || error);
        }
    }
};

const pgp = require('pg-promise')(initOptions);

require('dotenv').config()

const db = pgp({
    user:process.env.USER_DB,
    password:process.env.PASS_DB,
    host:process.env.HOST_DB,
    port:5432,
    database:process.env.DATABASE,
    ssl: { rejectUnauthorized: false },
})

module.exports = db;