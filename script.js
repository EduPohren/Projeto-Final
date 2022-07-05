function adicionarAoCarrinho(evento) {
    // codificar aqui

    const botao = evento.target;

    criarItemDaLista({
        nome: botao.dataset.nomeDoProduto,
        preco: botao.dataset.precoDoProduto
    })
    

    atualizarTotalDoCarrinho();
}

function criarItemDaLista(produto) {
    const ul = document.querySelector('#carrinhoDeCompras');
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center justify-content-between'
    li.textContent = `${produto.nome} (${produto.preco})`;
    li.dataset.nomeDoProduto = produto.nome;
    li.dataset.precoDoProduto = produto.preco;
    li.append(criarBotaoDeRemoverProduto());
    ul.append(li);
}
function criarBotaoDeRemoverProduto() {
    const btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm'
    btn.textContent = 'Remover';
    btn.addEventListener('click', removerProduto)
    return btn;
}

function removerProduto(evento) {
    const botao = evento.target;
    botao.parentElement.remove();
    atualizarTotalDoCarrinho();
}

function atualizarTotalDoCarrinho() {
    const elementoTotal = document.querySelector('#totalDoCarrinho');
    const itens = document.querySelectorAll('#carrinhoDeCompras li');

    let total = 0;
    
    // exercicio:
    // a partir dos produtos no carrinho (itens):
    // 1. percorrer todos os itens
    // 2. obtendo o preco de cada item (a informação está no dataset de cada item)
    // 3. somar o preço de todos os produtos no carrinho à variável 'total'

    for (let i = 0; i < itens.length; i++) {

        console.log('aa');
        total = total + Number(itens[i].dataset.precoDoProduto);
        
           
    }
    
        
    elementoTotal.textContent = total;
}
