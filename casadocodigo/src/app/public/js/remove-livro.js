let tabelaLivros = document.querySelector('#livros');//selecionar a tabela de livros
tabelaLivros.addEventListener('click', (evento) => {// add na tabela um ouvinte para evento de click
    let elementoClicado = evento.target;// pego o evento que foi gerado(evento) e elemento que foi cliclado(target)

    if (elementoClicado.dataset.type == 'remocao') {//se esse elemento cliclado tiver dataset "remocao", então sabemos que é o nosso link de remoção
        let livroId = elementoClicado.dataset.ref;// em seguida eu pego o dataset.ref, com ID do nosso livro e atrav da fetch api do JS
        fetch(`http://localhost:3000/livros/${livroId}`, { method: 'DELETE' })// eu faço uma requisção para URL e que nossa requisção será feita com o method DELETE do http
            .then(resposta => {// se tivermos uma resposta ok do servidor

                let tr = elementoClicado.closest(`#livro_${livroId}`);// eu removo a nossa linha da tabela referente a quele ID
                tr.remove();

            })
            .catch(erro => console.log(erro));// ou se tivermos algum problema, faremos um console.lgo do erro
            

    } 

});

