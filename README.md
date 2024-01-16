# Web Jogo de Perguntas e Respostas - V ou F

## Função de Rankeadas

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, e retorne o resultado para uma variável. O saldo de Rankeadas deve ser calculado através da fórmula: `vitórias - derrotas`.

```javascript
function calcularRankeadas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    if (vitorias < 10) {
        return { nivel: "Ferro", saldoVitorias };
    } else if (vitorias >= 11 && vitorias <= 20) {
        return { nivel: "Bronze", saldoVitorias };
    } else if (vitorias >= 21 && vitorias <= 50) {
        return { nivel: "Prata", saldoVitorias };
    } else if (vitorias >= 51 && vitorias <= 80) {
        return { nivel: "Ouro", saldoVitorias };
    } else if (vitorias >= 81 && vitorias <= 90) {
        return { nivel: "Diamante", saldoVitorias };
    } else if (vitorias >= 91 && vitorias <= 100) {
        return { nivel: "Lendário", saldoVitorias };
    } else {
        return { nivel: "Imortal", saldoVitorias };
    }
}
O Herói tem um saldo de **{saldoVitorias}** e está no nível de **{nivel}**.
