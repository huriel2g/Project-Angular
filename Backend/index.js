const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const productsRoutes = require('./routes/products');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//app.use('', indexRoutes);
app.use('/product', productsRoutes);

app.listen(port, () => console.log(`Escuchando en puerto ${port}...`));