/*
Uma oficina mecânica anotou a quantidade de peças em estoque para 6 produtos diferentes.
1. Crie um vetor de 6 posições de inteiros para armazenar a quantidade de cada peça.
2. Faça um laço PARA para ler a quantidade de estoque de cada uma das 6 peças.
3. No final, o programa deve rodar o vetor novamente e exibir apenas as posições (os índices) 
das peças que estão com estoque crítico (menos de 5 unidades), avisando o usuário que elas precisam de reposição.
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function filtroEstoquePeca() {
    const rl = readline.createInterface ({input, output});

    const estoquePecas = new Array(6);
    console.log("--- FILTRO DE ESTOQUE DE PEÇAS ---");

    for (let i = 0; i < estoquePecas.length; i++) {
        const quantidade = await rl.question(`Digite a quantidade em estoque para a peça ${i + 1}: `);
        let quantidadeInt = parseInt(quantidade, 10);

        if (isNaN(quantidadeInt) || quantidadeInt < 0) {
            console.log("Entrada inválida. Por favor, digite um número válido para a quantidade em estoque.");
            i--; // Decrementa o índice para repetir a entrada para a mesma peça
        } else {
            estoquePecas[i] = quantidadeInt;
        }
    }
    for (let i = 0; i < estoquePecas.length; i++) {
        if (estoquePecas[i] < 5) {
            console.log(`Peça ${i + 1} está com estoque crítico (${estoquePecas[i]} unidades). Reposição necessária!`);

        } else {
            console.log(`Peça ${i + 1} está com estoque suficiente (${estoquePecas[i]} unidades).`);
        }
    }
    rl.close();
}
filtroEstoquePeca();