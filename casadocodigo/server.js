// Criando um servidor web;

//const http = require('http');
// Não queremos mais lidar diretamente com o protocolo HTTP, 
//já que essa função será delegada ao express.

const express = require('express')
//o que vai ser retornado para a const express é uma função
const app = express(); // para chamar a função

app.listen(3000, function(){
    console.log('Servidor rodando na posta 3000');
})

// Criamos um o servidor, sem definir nenhuma rota. 
//Se acessarmos http://localhost:3000/ eceberemos a mensagem "Cannot GET /". 
//Isso significa que o express não está habilitado a devolver uma resposta do método GET no endereço / da nossa aplicação


/*const servidor = http.createServer(function (req, resp) {

    let html = '';
    if(req.url == '/'){
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body> 
            </html>
        `;
    } else if(req.url == '/livros'){
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Listagem de livros </h1>
                </body> 
            </html>
        `;
    }
    
    resp.end(html);
})
servidor.listen(3000);

*/