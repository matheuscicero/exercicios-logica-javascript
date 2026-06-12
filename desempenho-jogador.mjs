/*
Um técnico de basquete anotou a quantidade de pontos que seu principal jogador fez em cada uma das últimas 6 partidas do campeonato e guardou esses pontos em um vetor.
Considere que uma partida excelente é aquela onde o jogador faz 20 pontos ou mais.
1. Em quantas partidas o jogador teve um desempenho excelente.
2. A porcentagem de partidas excelentes em relação ao total de jogos (6).
3. O maior número de pontos que ele fez em uma única partida.
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function desempenhoJog() {
    const rl = readline.createInterface({input, output});

    const partida = new Array(6);
    let maiorPonto = 0;
    let partExc = 0;

    console.log("--- SISTEMA DE DESEMPENHO DO JOGADOR ---");

    for (let i = 0; i < partida.length; i++) {
        const pontos = await rl.question(`\n Digite a quantidade de pontos da partida ${i + 1}: `);
        const pts = parseInt(pontos);

        if (isNaN(pts) || pts < 0) {
            console.log(`Informação inválida! Por favor, digite uma pontuação válida.`)
            i--;
        } else {
            partida[i] = pts;
        
        if (partida[i] > maiorPonto) {
            maiorPonto = pts;
        } 
        if (partida[i] >= 20) {
            partExc++;
        }
    }
    }
    console.log(`\n--- TELA DE RESULTADOS ---`);
    console.log(`A quantidade de partidas que o jogador teve um desempenho excelente é: ${partExc}`);
    
    let porcExc = (partExc/6)*100;

    console.log(`A porcentagem de partidas excelentes em relação ao total de jogos é: ${porcExc}%. `);
    console.log(`O maior número de pontos que ele fez em uma única partida é: ${maiorPonto}.`);
    rl.close();
}
desempenhoJog();