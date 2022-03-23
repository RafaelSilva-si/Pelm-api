const axios = require('axios');
const db = require('../infra/dbCon');

const dbconn = require('../infra/dbCon');

test('Should get prods', async function(){
    /*
    const response = await axios({
        url:'http://localhost:3001/products',
        method: 'get'
    })*/

    const response2 = await db.any('call INSERT_PRODUCT_PROCEDURE($1,$2,$3,$4,$5,$6,$7)', ['rafa2', 'testee', 'teste', 1, 1, 1, undefined])
    console.log(response2)
});

