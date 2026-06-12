/*
Crie uma matriz de 3 linhas e 3 colunas (uma matriz quadrada 3x3) para armazenar números inteiros. 
1. Ler todos os valores dessa matriz via teclado.
2. No final, exibir a soma de todos os números que o usuário digitou dentro dela. 
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function tecladoSoma() {
    const rl = readline.createInterface ({input, output});

    const teclado = [];
    let soma = 0;

    for (let l = 0; l < 3; l++) {
    teclado[l] = [];

    for (let c = 0; c < 3; c++) {
        let numeroValido = false;

        while (!numeroValido) {
            const coluna = await rl.question(`Digite o número para a posição [${l}][${c}]: `);
            const cvalor = parseInt(coluna);

            if (isNaN(cvalor)) {
                console.log(`Valor inválido! Por favor, digite um número.`);
            } else {
                teclado[l][c] = cvalor;
                soma += cvalor;
                numeroValido = true;
            }
            }
        }
    }
    console.log(`\n--- TELA DE RESULTADOS ---`);
    console.log(`A soma de todos os valores é: ${soma}`);
    rl.close();
}
tecladoSoma();