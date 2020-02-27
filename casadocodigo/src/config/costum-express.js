
require('marko/node-require').install();
require('marko/express');

const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');

app.use('/estatico', express.static('src/app/public'))
//sempre que o express encontrar a url /estatico ee ative este middlewares aqui
//um identificador que indicará para nossa aplicação que está sendo requerido um recurso estático.
//Como segundo parâmetro, passaremos a configuração do middleware a ser executado.
//express possui uma configuração própria para arquivos estáticos, 
//e somente é necessário chamá-la com express.static(). passando para ele onde a nossa pasta estar


app.use(bodyParser.urlencoded({
    extended: true // habilitado a receber objetos complexos em formato .json -> do form. do nosso navegador
}));

const rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app; 
