const vitorias = parseInt(100000);
const derrotas = parseInt(10);

function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    }

    return { saldoVitorias, nivel };
}



const resultado = calcularNivel(vitorias, derrotas);
console.log(`O Herói tem o saldo de ${resultado.saldoVitorias} Vitórias e está no nível de ${resultado.nivel}`);
