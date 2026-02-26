// 1. Funções de captura com nomes claros
const nivelMonstro = parseInt(gets());
const dificuldadeBatalha = parseInt(gets());

// 2. Tratamento de Erros (Limpeza)
// Verificamos se os valores são NaN (Not a Number) ou menores que zero
if (isNaN(nivelMonstro) || isNaN(dificuldadeBatalha)) {
    print("Erro: Por favor, insira valores numéricos válidos.");
} else if (dificuldadeBatalha < 1 || dificuldadeBatalha > 100) {
    print("Erro: A dificuldade deve estar entre 1 e 100.");
} else {
    
    // 3. Lógica encapsulada e constante multiplicadora
    const MULTIPLICADOR_XP = 100;
    const xpGanho = nivelMonstro * dificuldadeBatalha * MULTIPLICADOR_XP;

    // 4. Saída limpa
    print(`Voce ganhou ${xpGanho} XP!`); 
}