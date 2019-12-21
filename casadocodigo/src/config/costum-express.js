/*
criar um modulo na src - config
e nele vamos colocar tanto a importação, quão a chamada do express;
E no server.js eu importo este arquivo
*/

const express = require('express'); 
const app = express(); 


const rotas = require('../app/rotas/rotas');
rotas(app);// rotas vc vai receber o param, que é app

module.exports = app; 
//meu module vai exportar a minha const app