const express = require('express');
const bodyParser = require('body-parser');

require('../drivers/connect-mongodb');

//Inicializations
const app = express();

//Settings
app.set('port',process.env.PORT || 3200 );

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routing
app.use('/api/departments',require('./../routes/departments'));
app.use('/api/towns',require('./../routes/towns'));

//Server
app.listen(app.get('port'),()=>console.log(`Server Listen to Port ${app.get('port')}`));
