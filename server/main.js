const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes/ProdRoute'));
app.use('/', require('./routes/FornRoute'));
app.use('/', require('./routes/MarcasRoute'));

app.listen(process.env.PORT || '4000')