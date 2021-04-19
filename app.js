const express = require('express');
const mongoose = require('./db/connection');
const bodyParser = require('body-parser');

const routes = require('./user/routes');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(routes);

app.listen(port, ()=>{
    console.log(`server is up and running at port ${port}`);
});
