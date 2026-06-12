/*
Um campeonato de jogos eletrônicos possui exatamente 15 times inscritos. Crie um algoritmo em Portugol que utilize a estrutura de repetição PARA para ler os dados de cada um desses 15 times. 
Para cada time, o usuário deverá digitar:
1. O nome do time.
2. A quantidade de vitórias que o time conseguiu no campeonato.
3. A quantidade de derrotas que o time sofreu.
No final das 15 repetições, o seu algoritmo deve calcular e imprimir:
A) A quantidade de times que terminaram o campeonato invictos (ou seja, quantidade de derrotas igual a 0);
B) A média de vitórias por time no campeonato (soma de todas as vitórias de todos os times dividida por 15);
C) O nome do time que teve mais vitórias (Dica: para este item, você precisará usar uma lógica de "Maior Valor encontrado").

*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function campeonato() {
    const rl = readline.createInterface({input, output});

    const partida = new Array(15);
    let contInvicto = 0;
    let somaV = 0;
    let maiorVitoria = -1;
    let timeCampeao = "";

    console.log("--- CAMPEONATO DE E-SPORTS ---");

    for (let i = 0; i < partida.length; i++) {
        let nomeTime = await rl.question(`Digite o nome do ${i + 1} time: `);
        let nome = nomeTime.trim().toUpperCase();

        while(!isNaN(nome) && nome !== "") {
            console.log(`Nome inválido! Não digite apenas números.`);
            nomeTime = await rl.question(`Digite um nome válido para o time: `);
            nome = nomeTime.trim().toUpperCase();
        }

        const entradaVitoria = await rl.question(`Digite a quantidade de vitórias do time: `);
        const vitoria = parseInt(entradaVitoria);

        const entradaDerrota = await rl.question(`Digite a quantidade de derrotas do time: `);
        const derrota = parseInt(entradaDerrota);

        if (derrota === 0) {
            contInvicto ++;
        }

        somaV += vitoria;

        if (vitoria > maiorVitoria) {
            maiorVitoria = vitoria;
            timeCampeao = nome;
        }
    }
    console.log(`--- TELA DE RESULTADOS ---`);
    console.log(`A quantidade de times que terminaram o campeonato invictos é: ${contInvicto}.`);
    const media = somaV / partida.length;
    console.log(`A média de vitórias por time no campeonato é: ${media}.`);
    console.log(`O nome do time que teve mais vitórias é: ${timeCampeao}.`);

    rl.close();
}
campeonato();