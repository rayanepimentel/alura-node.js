// Criando um servidor web;

const http = require('http');

const servidor = http.createServer(function (req, resp) {
    //preciso verificar qual é o pedido que o usuário fez;
    //pegando a requisição(req) e buscando a URL solicitada pelo usuário;
    //se a url por / o que eu quero devolver é  a frase "Casa do código" (o html);
    //antes vamos declarar, dentro da função callback, uma variável html que inicialmente não receberá valor algum.

    let html = '';
    if(req.url == '/'){
        // se cairmos dentro desse if o html irá receber esse valor:
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
    // e a resp vai ser com base na minha variável html
    resp.end(html);
})
servidor.listen(3000);

// eu quero criar outras routas e não só a routa raiz /
// o que podemos fazer?
//pode add else if ()?
//vamos fazer um teste, cria um else para listar os livros
//add else if() sucessivamente será que esse é o melhor caminho/abordagem?
// Não!!!
