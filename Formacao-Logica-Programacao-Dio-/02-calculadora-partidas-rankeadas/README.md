# 2️⃣ Calculadora de Partidas Rankeadas

Este é o segundo projeto prático do curso de **Lógica de Programação** da **DIO**. O objetivo principal foi implementar uma lógica de cálculo de saldo e classificação de ranking utilizando funções.

## 🚀 Tecnologias e Conceitos Aplicados
Diferente do desafio anterior, aqui introduzimos o conceito de modularização com funções:
- **Variáveis**: Armazenamento de dados de vitórias, derrotas e saldos.
- **Operadores**: Cálculos matemáticos (subtração) e comparações lógicas.
- **Funções**: Criação de uma função reutilizável para processar o rank de múltiplos heróis.
- **Estruturas de Decisão**: `if/else if` para determinar o nível baseado no saldo de vitórias.

## 🎯 Objetivo do Desafio
Criar uma função que recebe a quantidade de vitórias e derrotas como parâmetro, calcula o saldo ($vitórias - derrotas$) e retorna o nível do jogador conforme a tabela:

| Saldo de Vitórias | Nível |
| :--- | :--- |
| Menor que 10 | Ferro |
| Entre 11 e 20 | Bronze |
| Entre 21 e 50 | Prata |
| Entre 51 e 80 | Ouro |
| Entre 81 e 90 | Diamante |
| Entre 91 e 100 | Lendário |
| Maior ou igual a 101 | Imortal |

## 💻 Exemplo de Saída
O programa processa os dados e exibe a seguinte mensagem:
> "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

---
*Projeto concluído para fortalecer o entendimento sobre o retorno de funções e lógica condicional!* 🎮
