# 🎮 Desafio Bootcamp Santander 2024 - Criando Jogos com Godot

Este código é um calculador de ranking dos jogadores em um jogo, ele calcula o ranking de um jogador baseando em: Vitórias - Derrotas (Vitórias menos as derrotas do jogador.).

Segue abaixo uma explicação da estrutura do código e como rodar em seu computador.

## ⛓ Estrutura do Código

- **Classe Jogador**  
  Neste código, utilizei-me de meus conhecimentos com programação orientada a objetos e fiz uma classe para melhor representar um jogador.

  Seu construtor necessita receber as vitórias e derrotas do jogador, após ser recebido os valores, seu ranking já é calculado e atribuido a si mesmo.

  O construtor automáticamente imprime as informações do jogador em tela.

- **Função gerarVariosJogadores**  
  Função criada para efetuar testes, ela recebe por parametro a quantidade desejada de jogadores para se criar.

## 📃 Pré-requisitos Para Rodar o Código

- Necessário **Node.js** instalado em sua máquina.

- Passo a passo:
  
  1. Após ter instalado o Node.js em sua máquina, abra o projeto no Visual Studio Code ou em sua IDE de preferência.
  
  2. Abra o terminal na IDE.
  
  3. Para rodar o código, digite em seu terminal:
     ```bash
     node calculadoraderank.js
     ```
