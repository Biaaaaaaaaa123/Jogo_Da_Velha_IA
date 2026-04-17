// Importa o hook useState do React (serve para criar estados)
import { useState } from "react";
import "./App.css"; // Importa estilos (opcional)
// Componente principal do app
export default function App() {

  // Estado que guarda o tabuleiro (9 posições do jogo da velha)
  // Começa com tudo null (vazio)
  const [board, setBoard] = useState(Array(9).fill(null));

  // Estado que controla de quem é a vez
  // true = jogador (X)
  // false = IA (O)
  const [xIsNext, setXIsNext] = useState(true);


  // =========================
  // 🧠 ALGORITMO MINIMAX
  // =========================
  // Essa função simula TODAS as jogadas possíveis
  // e escolhe a melhor decisão para a IA
  function minimax(newBoard, depth, isMaximizing) {

    // Verifica se alguém venceu nesse cenário simulado
    const result = checkWinner(newBoard);

    // Se a IA ganhou, retorna pontuação positiva
    // depth é usado para preferir vitórias mais rápidas
    if (result === "O") return 10 - depth;

    // Se o jogador ganhou, retorna pontuação negativa
    if (result === "X") return depth - 10;

    // Se deu empate (tabuleiro cheio), retorna 0
    if (newBoard.every(cell => cell !== null)) return 0;

    // =========================
    // 🤖 VEZ DA IA (MAXIMIZAR)
    // =========================
    if (isMaximizing) {

      // Começa com o pior valor possível
      let bestScore = -Infinity;

      // Percorre todas as posições do tabuleiro
      for (let i = 0; i < newBoard.length; i++) {

        // Se a posição está vazia
        if (newBoard[i] === null) {

          // Simula jogada da IA
          newBoard[i] = "O";

          // Chama recursivamente (agora é turno do jogador)
          let score = minimax(newBoard, depth + 1, false);

          // Desfaz jogada (backtracking)
          newBoard[i] = null;

          // Guarda a melhor pontuação possível
          bestScore = Math.max(score, bestScore);
        }

      }

      return bestScore;

    } else {

      // =========================
      // 🧑 VEZ DO JOGADOR (MINIMIZAR)
      // =========================

      let bestScore = Infinity;

      for (let i = 0; i < newBoard.length; i++) {

        if (newBoard[i] === null) {

          // Simula jogada do jogador
          newBoard[i] = "X";

          // Chama recursivamente (volta para IA)
          let score = minimax(newBoard, depth + 1, true);

          // Desfaz jogada
          newBoard[i] = null;

          // Escolhe o pior cenário para IA (melhor para jogador)
          bestScore = Math.min(score, bestScore);
        }

      }

      return bestScore;
    }
  }


  // =========================
  // 🤖 ESCOLHER MELHOR JOGADA
  // =========================
  function findBestMove(currentBoard) {

    let bestScore = -Infinity;
    let move = null;

    // Testa todas as posições
    for (let i = 0; i < currentBoard.length; i++) {

      if (currentBoard[i] === null) {

        // Simula jogada da IA
        currentBoard[i] = "O";

        // Calcula pontuação usando Minimax
        let score = minimax(currentBoard, 0, false);

        // Desfaz jogada
        currentBoard[i] = null;

        // Guarda a melhor jogada encontrada
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }

      }

    }

    // Retorna posição ideal
    return move;
  }


  // =========================
  // 🖱️ CLIQUE DO JOGADOR
  // =========================
  function handleClick(index) {

    // Se já tem algo na célula OU já existe vencedor, não faz nada
    if (board[index] || winner) return;

    // Cria cópia do tabuleiro (boa prática do React)
    const newBoard = [...board];

    // Jogador joga com X
    newBoard[index] = "X";

    // Atualiza estado
    setBoard(newBoard);

    // Agora é turno da IA
    setXIsNext(false);

    // IA joga depois de 0.5 segundos
    setTimeout(() => {

      // Encontra melhor jogada
      const move = findBestMove(newBoard);

      // Se ainda não acabou o jogo
      if (move !== null && !checkWinner(newBoard)) {

        // IA joga
        newBoard[move] = "O";

        // Atualiza tabuleiro
        setBoard([...newBoard]);

        // Volta turno para jogador
        setXIsNext(true);

      }

    }, 500);
  }


  // =========================
  // 🏆 VERIFICAR VENCEDOR
  // =========================
  function checkWinner(customBoard = board) {

    // Todas as combinações possíveis de vitória
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    // Percorre cada linha
    for (let line of lines) {

      const [a,b,c] = line;

      // Se as 3 posições forem iguais → temos vencedor
      if (
        customBoard[a] &&
        customBoard[a] === customBoard[b] &&
        customBoard[a] === customBoard[c]
      ) {
        return customBoard[a]; // retorna "X" ou "O"
      }

    }

    // Se ninguém ganhou
    return null;
  }


  // Verifica se alguém venceu
  const winner = checkWinner();

  // Verifica empate (tabuleiro cheio e sem vencedor)
  const isDraw = board.every(cell => cell !== null) && !winner;


  // =========================
  // 🔄 REINICIAR JOGO
  // =========================
  function resetGame(){
    setBoard(Array(9).fill(null)); // limpa tabuleiro
    setXIsNext(true); // volta para jogador
  }


  // =========================
  // 🎨 INTERFACE (JSX)
  // =========================
  return (

    <div style={{ textAlign:"center", fontFamily:"Arial" }}>

      {/* Título */}
      <h1>Jogo da Velha 🎮</h1>

      {/* Status do jogo */}
      <h2>
        {winner
          ? `Vencedor: ${winner}` // alguém venceu
          : isDraw
          ? "Deu velha! 🤝" // empate
          : xIsNext
          ? "Sua vez (X)" // turno jogador
          : "IA pensando... 🤖"} // turno IA
      </h2>

      {/* Tabuleiro */}
      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,100px)",
          justifyContent:"center",
          gap:"5px"
        }}
      >

        {/* Cria os 9 botões */}
        {board.map((value, index) => (

          <button
            key={index}
            onClick={() => handleClick(index)} // clique do jogador
            style={{
              width:"100px",
              height:"100px",
              fontSize:"30px"
            }}
          >
            {value} {/* Mostra X ou O */}
          </button>

        ))}

      </div>

      <br/>

      {/* Botão de reset */}
      <button onClick={resetGame}>
        Reiniciar
      </button>

    </div>
  );
}