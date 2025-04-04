
ganhou = 0 //se for 1, perdeu. Se for 0, ganhou

for(let rodada = 1; rodada <= 3; rodada++){
      escolhaJogador = prompt("Nível " + rodada + ": Escolha um vidro (1, 2 ou 3)");
      pisoQuebrado = Math.floor(Math.random() * 3) + 1;
      
      if (escolhaJogador == pisoQuebrado) {
        alert("Que pena! O vidro " + escolhaJogador + " quebrou. Você perdeu!");
        rodada = 1000;
        ganhou = 1
      } else {
        alert("Bom salto! Você passou para o próximo nível.");
      }
    }
    
  if (ganhou == 0) {
    alert("Parabéns! Você completou o desafio!");
  }

