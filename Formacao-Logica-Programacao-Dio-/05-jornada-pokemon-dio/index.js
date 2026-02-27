//Desafios JavaScript na DIO têm funções "gets" e "console.log" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "console.log": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let entrada = gets();
let escolhaDoTreinador = parseInt(entrada);

let pokemonEscolhido;

//TODO: Implemente as condições necessárias para a solução do desafio. Utilize a tabela de exemplos para identificar a escolha do treinador:
if (escolhaDoTreinador === 1) {
    pokemonEscolhido = "Bulbasaur";
} else if (escolhaDoTreinador === 2) {
    pokemonEscolhido = "Charmander";
} else if (escolhaDoTreinador === 4) {
    pokemonEscolhido = "Pikachu";
} else if (escolhaDoTreinador === 5) {
    pokemonEscolhido = "Mewtwo";
} else {
  
    // 3. Tratamento de erro: Caso o número não seja nenhum dos válidos
    pokemonEscolhido = null;
}

//Imprime o Pokémon escolhido somente se for valido
if (pokemonEscolhido) {
   console.log(`Voce escolheu o ${pokemonEscolhido} como seu Pokemon inicial.`);
} else {
    // Caso o usuário digite 3, 6 ou "oi"
    console.log("Opcao invalida. Escolha 1, 2, 4 ou 5.");
}
