const herois = [
    { nome: "Enzo", v: 55, d: 5 },
    { nome: "Trevor", v: 110, d: 10 },
    { nome: "Roger", v: 150, d: 30 }
];


function calcularRank(vitorias, derrotas) {
    const saldo = vitorias - derrotas;
    let nivel;

    
    if (saldo <= 10) nivel = "Ferro";
    else if (saldo <= 20) nivel = "Bronze";
    else if (saldo <= 50) nivel = "Prata";
    else if (saldo <= 80) nivel = "Ouro";
    else if (saldo <= 90) nivel = "Diamante";
    else if (saldo <= 100) nivel = "Lendário";
    else nivel = "Imortal";

    return { saldo, nivel };
}


for (const heroi of herois) {
    const { saldo, nivel } = calcularRank(heroi.v, heroi.d);
    console.log(`O Herói **${heroi.nome}** tem saldo de **${saldo}** e está no nível **${nivel}**`);
}