// Arrays para armazenar os times e forças
// Um array é uma estrutura de dados que armazena múltiplos valores do mesmo tipo, acessados por índices. Ele permite acesso rápido e organizado aos dados.

let timeJogador = ["", "", ""];
let timeComputador = ["", "", ""];
let forcaJogador = 0;
let forcaComputador = 0;

// PARTE 1: Jogador escolhe seus heróis e já calcula a força
alert("Escolha 3 heróis para o seu time!");

// O for é um tipo de laço de repetição que serve para repetir um conjunto de instruções várias vezes. Ele tem três partes principais:
// Inicialização: A primeira parte define uma variável (no seu caso, let i = 0) que começa com um valor inicial. Esse valor é usado para controlar quantas vezes o laço vai se repetir.
// Condição: A segunda parte (i < 3) é uma condição. Enquanto essa condição for verdadeira, o for continuará repetindo. Quando a condição for falsa, o laço termina. No seu caso, a condição diz: "Enquanto i for menor que 3", ou seja, o laço vai rodar 3 vezes.
// Incremento: A última parte (i++) define o que vai acontecer após cada repetição. i++ significa que, a cada vez que o laço for executado, i vai aumentar em 1. Ou seja, i começa com 0, depois vai para 1, 2 e, quando i chegar a 3, a condição (i < 3) vai ser falsa, e o laço vai parar.

// Solicita os vilões escolhidos pelo jogador e calcula a força
for (let i = 0; i < 3; i++) {
  let escolha = prompt("Digite o nome do herói " + (i + 1) + ":");
  timeJogador[i] = escolha;
  forcaJogador += Math.floor(Math.random() * 10) + 1; // Gera força para o jogador imediatamente
}

// PARTE 2: Computador escolhe aleatoriamente e já calcula a força
alert("Agora o computador vai escolher...");

// Solicita os vilões escolhidos pelo computador e calcula a força

for (let i = 0; i < 3; i++) {
  let indiceAleatorio = Math.floor(Math.random() * 10); // Escolhe um vilão aleatório
  timeComputador[i] = [
    "Nazaré Tedesco",
    "Odete Roitman",
    "Flora",
    "Carminha",
    "Laura Prudente da Costa",
    "Bia Falcão",
    "Leôncio",
    "Felix Khoury",
    "Renata Dumont",
    "Perpétua",
  ][indiceAleatorio]; // Pega um vilão da lista
  forcaComputador += Math.floor(Math.random() * 10) + 1; // Gera força para o computador imediatamente
}

// PARTE 3: Exibir os times e forças na tela
// Exibir o time do jogador e a força na tela
document.getElementById("informacoesJogador").innerHTML =
  "<p><b>Seu time:</b> " +
  timeJogador[0] +
  ", " +
  timeJogador[1] +
  ", " +
  timeJogador[2] +
  "</p>" +
  "<p class='forca'>Força: " +
  forcaJogador +
  "</p>";

// Exibir o time do computador e a força na tela
document.getElementById("informacoesComputador").innerHTML =
  "<p><b>Time do Computador:</b> " +
  timeComputador[0] +
  ", " +
  timeComputador[1] +
  ", " +
  timeComputador[2] +
  "</p>" +
  "<p class='forca'>Força: " +
  forcaComputador +
  "</p>";

// Mostrar o botão para ver o resultado
document.getElementById("resultadoBtn").style.display = "block";

// Função para exibir o resultado
document.getElementById("resultadoBtn").onclick = function () {
  let resultadoTexto = "";

  if (forcaJogador > forcaComputador) {
    resultadoTexto = "<p class='ganhou'>🏆 Você ganhou!</p>";
  } else if (forcaJogador < forcaComputador) {
    resultadoTexto = "<p class='perdeu'>🤖 O computador venceu!</p>";
  } else {
    resultadoTexto = "<p class='empate'>🔄 Empate!</p>";
  }

  // Exibir o resultado final na tela
  document.getElementById("resultadoFinal").innerHTML = resultadoTexto;
};
