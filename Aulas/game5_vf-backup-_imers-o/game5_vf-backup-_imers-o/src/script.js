// PARTE 1: Lista de perguntas e respostas
const perguntas = [
  {
    pergunta: "Qual é a função do comando rand na programação?",
    respostas: [
      { opcao: "Imprimir mensagens na tela", correto: false },
      { opcao: "Declarar variáveis", correto: false },
      { opcao: "Gerar números aleatórios", correto: true },
      { opcao: "Criar loops", correto: false },
    ],
  },
  {
    pergunta: "O que o loop while faz em um jogo?",
    respostas: [
      { opcao: "Executa uma ação apenas uma vez", correto: false },
      {
        opcao: "Repete uma ação enquanto uma condição for verdadeira",
        correto: true,
      },
      { opcao: "Compara valores e retorna o maior", correto: false },
      { opcao: "Gera números aleatórios", correto: false },
    ],
  },
  {
    pergunta: "Como é feita a seleção de um time no jogo de Cabo de Guerra?",
    respostas: [
      { opcao: "Somando os pontos de cada jogador", correto: false },
      { opcao: "Utilizando uma função rand", correto: false },
      { opcao: "Comparando a idade dos jogadores", correto: false },
      {
        opcao: "Usando um array para armazenar os membros escolhidos",
        correto: true,
      },
    ],
  },
  {
    pergunta:
      "O que acontece se o participante tiver menos de 18 anos no jogo Pedra, Papel e Tesoura?",
    respostas: [
      { opcao: "O participante escolhe duas opções", correto: false },
      { opcao: "O participante ganha automaticamente", correto: false },
      { opcao: "O jogo não permite a participação", correto: true },
      {
        opcao: "O jogo permite a participação com pontos extras",
        correto: false,
      },
    ],
  },
  {
    pergunta: "Como o vidro que quebra é escolhido no jogo de Salto no Vidro?",
    respostas: [
      { opcao: "Pela quantidade de tentativas", correto: false },
      { opcao: "Pela posição escolhida pelo jogador", correto: false },
      {
        opcao: "Através de um número aleatório gerado pela função rand",
        correto: true,
      },
      { opcao: "Pela força do salto", correto: false },
    ],
  },
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const botaoReiniciar = document.querySelector(".botao-final");

// PARTE 3: Criando variáveis para controle do jogo
let indiceAtual = 0; // Guarda a pergunta atual
let acertos = 0; // Guarda o número de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  // Atualiza o progresso da pergunta (exemplo: "1/5")
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;

  // Pega a pergunta atual da lista
  const perguntaAtual = perguntas[indiceAtual];

  // Mostra a pergunta na tela
  perguntaElemento.innerHTML = perguntaAtual.pergunta;

  // Limpa respostas antigas
  respostasElemento.innerHTML = "";

  // Para cada resposta, cria um botão na tela
  perguntaAtual.respostas.forEach((resposta) => {
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta"); // Adiciona uma classe para estilo
    botao.innerText = resposta.opcao; // Texto do botão
    botao.dataset.correto = resposta.correto; // Guarda se está correto ou não

    // Adiciona evento de clique para verificar resposta
    botao.addEventListener("click", verificarResposta);

    // Adiciona o botão à tela
    respostasElemento.appendChild(botao);
  });
}

// PARTE 5: Função para verificar se a resposta está certa
function verificarResposta(evento) {
  const botaoClicado = evento.target;

  // Se a resposta for correta, aumenta o número de acertos
  if (botaoClicado.dataset.correto === "true") {
    acertos++;
  }

  // Avança para a próxima pergunta
  indiceAtual++;

  // Se ainda houver perguntas, carrega a próxima
  if (indiceAtual < perguntas.length) {
    carregarPergunta();
  }

  // Se todas as perguntas acabaram, finaliza o jogo
  if (indiceAtual === perguntas.length) {
    finalizarJogo();
  }
}

// PARTE 6: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra o resultado final
}

// PARTE 7: Função para reiniciar o jogo
botaoReiniciar.addEventListener("click", () => {
  conteudo.style.display = "flex"; // Mostra as perguntas de novo
  conteudoFinal.style.display = "none"; // Esconde o resultado final

  // Reinicia os valores
  indiceAtual = 0;
  acertos = 0;

  carregarPergunta(); // Começa o jogo novamente
});

// PARTE 8: Iniciando o jogo pela primeira vez
carregarPergunta();
