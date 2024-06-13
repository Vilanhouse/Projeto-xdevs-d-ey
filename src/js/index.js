/* OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
  - passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionada nele 
  - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista
  - passo 4 - buscar o cartão que esta selecionado e esconder

  */

  // OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
  // cartao da lista

  // Obs: Para ativar como comentário, selecione texto e tecle crtl+; ou digite // no inicio do texto.

//   - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar

// document.getElementById("btn-avancar");

const btnAvancar = document.getElementById("btn-avancar");

// - Objetivo 2 - passo 1 - dar um jeito de identificar o clique do usuário na seta voltar
const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
 // OBS: . busca CLASSE, # busca ID


//   - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar

btnAvancar.addEventListener("click", function (){
  const ehUltimoCartao = cartaoAtual === cartoes.length -1;

  if (ehUltimoCartao) return;

  //    - passo 4 - buscar o cartão que esta selecionado e esconder (Passo 4 ficou depois passo 2 mas, tem nada não)
  esconderCartaoSelecionado();

  
  //   - passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionada nele

  cartaoAtual++;
  mostrarCartao();

  
});

/* OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
*/

// - passo 2 - dar um jeito de pegar o elemento HTML da seta voltar
btnVoltar.addEventListener("click", function (){
  const ehPrimeiroCartao = cartaoAtual === 0;
  if(ehPrimeiroCartao) return;

  // - passo 4 - buscar o cartão que esta selecionado e esconder
  esconderCartaoSelecionado();

  // - passo 3 - fazer aparecer o cartão anterior da lista
  cartaoAtual--;
  mostrarCartao();

});

function mostrarCartao() {
  cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}


// OBS: 
// // Quando o projeto tem muitos códigos repetitivos pode fazer Refuturação que é melhorar o código (Refuturar), criar funções mais especificas, subtituir o trechos repitidos.
// ex: 
// // Seleciona todo texto abaixo, clique com o botão direito do mouse, "Refaturar", depois "Extrair para função no escopo global", depois dá o nome para o código.
// // - passo 4 - buscar o cartão que esta selecionado e esconder
// // const cartaoSelecionado = document.querySelector(".selecionado");
// // cartaoSelecionado.classList.remove("selecionado");
