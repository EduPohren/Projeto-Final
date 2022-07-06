//var universal
let carteira;
let total = 0;

function adicionarAoCarrinho(evento) {
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

    total=0;
    
    for (let i = 0; i < itens.length; i++) {
        total = total + Number(itens[i].dataset.precoDoProduto);
    }   

    elementoTotal.textContent = total.toFixed(2);
    console.log(total);   
}

function calcPagamento(){
    const carteiraAtual = document.querySelector('#totalDaCarteira');
    const lista = document.querySelector('#carrinhoDeCompras');

    if (carteiraAtual.dataset.carteira - total < 0) {
        alert('O seu saldo é insuficiente!');
    }
    else
    {
      carteira = carteiraAtual.dataset.carteira - total;
      carteiraAtual.dataset.carteira = carteiraAtual.dataset.carteira - total;
      
      lista.innerHTML = "";
      carteiraAtual.textContent = carteira.toFixed(2);
    }

    
    atualizarTotalDoCarrinho();
    
}
