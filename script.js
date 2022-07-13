//var universal
let carteira;
let total = 0;
let qtdCarrinho = 0;

function adicionarAoCarrinho(evento) {
    const botao = evento.target;

    criarItemDaLista({
        nome: botao.dataset.nomeDoProduto,
        preco: botao.dataset.precoDoProduto
    })
    

    atualizarTotalDoCarrinho('adicionar');
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
    atualizarTotalDoCarrinho('remover');
}

function atualizarTotalDoCarrinho(tipo) {
    const elementoTotal = document.querySelector('#totalDoCarrinho');
    const itens = document.querySelectorAll('#carrinhoDeCompras li');

    const Unidades = document.querySelector('#Unidades');

    total=0;
    for (let i = 0; i < itens.length; i++) {
        total = total + Number(itens[i].dataset.precoDoProduto);
    }   

    if (tipo === 'zerar') {
        qtdCarrinho = 0; 
       
         console.log('oi');       
    }
    if (tipo === 'remover') {
        qtdCarrinho = qtdCarrinho - 1;
         console.log('oi');  
    }
    if (tipo === 'adicionar') {
        qtdCarrinho = qtdCarrinho + 1;
        console.log('oi');  
    }

    elementoTotal.textContent = total.toFixed(2);
    Unidades.textContent = qtdCarrinho;
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

      atualizarTotalDoCarrinho('zerar');
    }

    
    
    
}


const btnHome = document.getElementById("TelaHome");



btnHome.addEventListener('click', function() {
    const HOME = document.getElementById("listaDeProdutos");
    const CARRINHO = document.getElementById("Carrinho");
    const video = document.getElementById("icon");  
   CARRINHO.style.display = "none";
   HOME.style.display = "grid";
   video.style.display = "block";
});

const btnCarrinho = document.getElementById("TelaCarrinho");

btnCarrinho.addEventListener('click', function() {
    const HOME = document.getElementById("listaDeProdutos");
    const CARRINHO = document.getElementById("Carrinho");
    const video = document.getElementById("icon");
    HOME.style.display = "none";
    CARRINHO.style.display = "block";
    video.style.display = "none";
});

const btnCarrinho2 = document.getElementById("TelaCarrinho2");

btnCarrinho2.addEventListener('click', function(){
    const HOME = document.getElementById("listaDeProdutos");
    const CARRINHO = document.getElementById("Carrinho");
    const video = document.getElementById("icon");
    HOME.style.display = "none";
    CARRINHO.style.display = "block";
    video.style.display = "none"; 
})


const btnicon = document.getElementById("TelaHome");

btnicon.addEventListener('click', function(){
    autoplayvideo();
});



function autoplayvideo() {
    const img01 = document.getElementById("img01");
    img01.style.display = "none";
    const video = document.getElementById("logovideo");
    video.style.display = "block";
    video.play();
};



