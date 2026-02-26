# 🏰 Explorando Masmorras: Tesouros e Monstros

## 📝 Descrição
Este projeto é um simulador de jornada em uma masmorra, desenvolvido para o desafio de **Lógica de Programação da DIO**. O programa percorre uma quantidade determinada de salas e identifica se em cada uma delas existe um tesouro, um monstro ou se a sala está vazia.

## ⚙️ Como Funciona
O sistema utiliza listas pré-definidas (Arrays) para localizar eventos específicos:
- **Salas com Tesouro:** 2, 4 e 7.
- **Salas com Monstro:** 3, 6 e 8.

Ao entrar em uma sala, o "radar" do herói verifica se aquele número está presente em uma das listas e exibe a mensagem correspondente.

## 🛠️ Tecnologias e Conceitos Aplicados
* **Laço de Repetição (`for`)**: Utilizado para percorrer todas as salas, da primeira até o limite definido.
* **Arrays Estáticos**: Armazenamento das posições dos perigos e recompensas.
* **Método `.includes()`**: Uma forma eficiente de verificar se um elemento existe dentro de um Array.
* **Template Strings**: Formatação limpa das mensagens de saída.

## 🔗 Link do Desafio
- [Desafio de Código: Explorando Masmorras - DIO](https://web.dio.me/coding/desafio-de-codigo-explorando-masmorras/algorithm/explorando-masmorras?back=/track/formacao-logica-de-programacao)

## 🚀 Exemplo de Execução
Se a entrada for `3`, a saída será:
```text
Tesouro na sala 2!
Monstro na sala 3!
