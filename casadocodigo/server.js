// Criando um servidor web;

//const http = require('http');
// Não queremos mais lidar diretamente com o protocolo HTTP, 
//já que essa função será delegada ao express.

const express = require('express'); // importando o express
//o que vai ser retornado para a const express é uma função
const app = express(); // para chamar a função

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
});



// Criamos um o servidor, sem definir nenhuma rota. 
//Se acessarmos http://localhost:3000/ eceberemos a mensagem "Cannot GET /". 
//Isso significa que o express não está habilitado a devolver uma resposta do método GET no endereço / da nossa aplicação


//precisamos criar as rotas
// get, recebe dois param. 1 a string, qual é o caminho/routa
// e o 2 uma função callback, que sempre será excutada quando o cliente fizer uma requisão para caminho/routa
// e o corpo vai indicar qual vai ser a resposta que vamos mandar pro usuário
//que vai receber como param. a string representando o html

app.get('/', function(req, resp){
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código!!! </h1>
                </body> 
            </html>
        `
    );
});

app.get('/livros', function(req, resp){
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de livros!!! </h1>
                </body> 
            </html>
        `
    );
});
