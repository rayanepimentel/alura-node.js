// Criando um servidor web;

const app= require('./src/config/costum-express'); 


app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000');
});


