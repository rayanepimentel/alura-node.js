// Criando um servidor web:
// Receber as requesições do navegador, tratá-las e devolver uma resposta ao cliente
//"modulos Node" ex: http

const http = require('http');

//const servidor = http.createServer();

//informar a porta que o meu servidor irá funcionar. 
// ele precisa ouvir e precisamos passar a porta e informar o que ele irá fazer;

//servidor.listen(3000);

/*O método createServer() pode receber como parâmetro opcional uma função que será executada toda vez que o servidor
 receber uma requisição do cliente (requestListener). Essa função recebe dois parâmetros, request e response.
 Passe o mouse no createServer()
*/

// function será uma função anomima, mas terá os dois parametros requisição(req) e resposta(resp)

const servidor = http.createServer(function (req, resp) {
    // aqui eu vou dizer o que o node precisa fazer com a req e com a resp;
    // nesse ex. vamos apenas devolver o html;
    //vou pegar a minha resp - que é o que eu vou devolver pro usuário;
    //e vou dizer que a resp precisa levar essa informação pro nosso usuário
    // com o metodo end() que vai receber o conteudo que precisamos enviar pro nosso cliente;


    resp.end(`
        <html>
             <head>
                  <meta charset="utf-8">
             </head>
             <body>
                 <h1> Casa do Código </h1>
             </body> 
        </html>
    `);
})
servidor.listen(3000);

//no terminal rode node server.js 
// no navegador digite: http://localhost:3000/