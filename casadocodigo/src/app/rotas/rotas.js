const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
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
    
    app.get('/livros', function(req, resp) {

        const livroDao = new LivroDao(db);// criar a instância da class LivroDao
        livroDao.lista()
                .then(livros => resp.marko(
                    require('../views/livros/lista/lista.marko'),
                    {
                        livros: livros
                    }
    
                ))
                .catch(erro => console.log(erro));//  método catch(), que é executado quando acontece algum erro no processamento de uma Promise.
    
    });
     
    app.get('/livros/form', function(req, resp) {
        resp.marko(require('../views/livros/form/form.marko'));
    });

    app.post('/livros', function(req, resp) { 
        console.log(req.body); // dados enviados no corpo da resquisição.
        //precisa definir a visualização ou o node não irá trazer os dados do form. para o corpo da requisição.
        const livroDao = new LivroDao(db);// criar a instância da class LivroDao
        livroDao.adiciona(req.body)
                .then(resp.redirect('/livros'))
                .catch(erro => console.log(erro));//  método catch(), que é executado quando acontece algum erro no processamento de uma Promise.

   // app.delete('/livros/${livrosID}', function(req, resp){});]
    app.delete('/livros/:id', function(req, resp){
     const id = req.params.id;

     const livroDao = new LivroDao(db);// acesso ao banco de dados
     livroDao.remove(id)//metodo de remoção
             .then(() => resp.status(200).end())// eu não quero fazer uma nova navegação, só quero devolver status 200, ou seja tudo deu certo
             .catch(erro => console.log(erro));
    });
    
    });
}