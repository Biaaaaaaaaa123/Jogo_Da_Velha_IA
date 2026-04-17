# 🎮 Jogo da Velha com IA - React + Vite

Um projeto educacional e interativo que implementa inteligência artificial em um jogo da velha clássico, demonstrando conceitos avançados de algoritmos de busca e desenvolvimento web moderno com **React**.

## 🧠 Sobre o Projeto

Este projeto é uma aplicação **React** que apresenta um jogo da velha onde você compete contra uma inteligência artificial não-derrotável. A IA utiliza o algoritmo **Minimax**, um dos algoritmos mais importantes em inteligência artificial, para tomar decisões ótimas em cada jogada.

### ✨ Características Principais

- **🤖 IA Inteligente**: Implementação completa do algoritmo Minimax com análise de todas as jogadas possíveis
- **⚡ Performance Otimizada**: Cálculos rápidos mesmo analisando milhares de cenários
- **🎨 Interface Moderna**: Design responsivo e intuitivo com gradientes e animações suaves
- **🔄 Modo de Jogo Completo**: Detecção de vitória, empate e possibilidade de reiniciar
- **📱 Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e dispositivos móveis

## 🎯 Como Funciona a IA

### Algoritmo Minimax

O algoritmo **Minimax** é uma estratégia de busca em profundidade que:

1. **Explora todas as jogadas possíveis**: A IA simula cada movimento que pode fazer
2. **Analisa cenários futuros**: Calcula todos os desdobramentos até o final do jogo
3. **Avalia posições**: Atribui pontuações a cada cenário (-10 para derrota, 0 para empate, +10 para vitória)
4. **Escolhe o melhor movimento**: Seleciona a jogada que maximiza suas chances de ganho

```javascript
// Pseudocódigo simplificado
function minimax(board, depth, isMaximizing) {
  // Verifica condição final (vitória, derrota, empate)
  if (resultado) return pontuação;
  
  // Maximizar: IA tenta melhorar sua pontuação
  if (isMaximizing) {
    for cada movimento possível {
      avalia = minimax(novoTabuleiro, depth+1, false);
      melhorPontuação = max(avalia, melhorPontuação);
    }
  }
  
  // Minimizar: Jogador tenta piorar pontuação da IA
  else {
    for cada movimento possível {
      avalia = minimax(novoTabuleiro, depth+1, true);
      melhorPontuação = min(avalia, melhorPontuação);
    }
  }
  
  return melhorPontuação;
}
```

## 🚀 Tecnologias Utilizadas

- **React 18**: Biblioteca JavaScript para construção de interfaces
- **Vite**: Bundler e dev server ultrarrápido
- **JavaScript ES6+**: Recursos modernos da linguagem
- **CSS3**: Estilização avançada com gradientes e transições
- **Hook useState**: Gerenciamento de estado reativo

## 📦 Dependências

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest"
  }
}
```

## 🎮 Como Jogar

1. **Você é X**: Você faz a primeira jogada
2. **A IA é O**: Após sua jogada, a IA responde (levará ~500ms pensando)
3. **Objetivo**: Alinhe 3 símbolos iguais na horizontal, vertical ou diagonal
4. **Resultado**: O jogo detecta automaticamente vitória, derrota ou empate

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 14+)
- npm ou yarn

### Passos

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/Jogo_Da_Velha_IA.git
cd Jogo_Da_Velha_IA

# 2. Instalar dependências
npm install

# 3. Iniciar servidor de desenvolvimento
npm run dev

# 4. Abrir no navegador
# A aplicação estará disponível em http://localhost:5173
```

### Build para Produção

```bash
npm run build
# Gera pasta 'dist' pronta para deploy
```

## 📂 Estrutura do Projeto

```
Jogo_Da_Velha_IA/
├── src/
│   ├── App.jsx          # Componente principal com lógica do jogo
│   ├── App.css          # Estilos modernos e responsivos
│   ├── main.jsx         # Ponto de entrada da aplicação
│   ├── index.css        # Estilos globais
│   └── assets/          # Imagens e recursos
├── public/              # Arquivos públicos
├── index.html           # Template HTML principal
├── package.json         # Configuração do projeto
├── vite.config.js       # Configuração do Vite
└── README.md            # Este arquivo
```

## 🧬 Implementação Técnica

### Estados Gerenciados (React Hooks)

- **`board`**: Array de 9 posições representando o tabuleiro
- **`xIsNext`**: Booleano indicando de quem é a vez

### Funções Principais

| Função | Descrição |
|--------|-----------|
| `minimax()` | Algoritmo de busca que avalia todas as jogadas |
| `findBestMove()` | Encontra a melhor jogada para a IA |
| `checkWinner()` | Verifica se existe um vencedor |
| `handleClick()` | Processa clique do jogador |
| `resetGame()` | Reinicia o jogo |

## 🎓 Conceitos de Aprendizado

Este projeto ensina:

- ✅ **Algoritmos de Busca**: Implementação prática de Minimax
- ✅ **Backtracking**: Como desfazer movimentos durante busca
- ✅ **Recursão**: Chamadas recursivas em árvore de decisão
- ✅ **Componentes React**: Estrutura e ciclo de vida
- ✅ **Gerenciamento de Estado**: useState e re-renderização
- ✅ **CSS Moderno**: Flexbox, Grid, Gradientes e Animações

## 🔍 Análise de Complexidade

- **Tempo**: O(9!) = O(362.880) no pior caso - todas as posições analisadas
- **Espaço**: O(9 × profundidade) = O(81) para a pilha de recursão
- **Performance Real**: < 500ms para qualquer jogada

## 🎨 Interface Customizável

O projeto inclui um design moderno com:

- Gradiente roxo/rosa no fundo
- Cartão branco centralizado
- Botões com efeitos hover e animações
- Tipografia clara e legível
- Layout totalmente responsivo

## 🐛 Possíveis Melhorias Futuras

- [ ] Adicionar dificuldade variável (minimax com profundidade limitada)
- [ ] Placar de vitórias/derrotas
- [ ] Modo multiplayer local
- [ ] Animações de jogada
- [ ] Temas customizáveis
- [ ] Histórico de movimentos

## 📄 Licença

Este projeto está disponível sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

## 👨‍💻 Autor

Desenvolvido como projeto educacional em React + IA.

---

**Desafio**: Consegue empatar contra a IA? 🎯
