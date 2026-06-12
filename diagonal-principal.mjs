/*
Crie um algoritmo que:
1. Leia os valores para preencher uma matriz 3x3 (números inteiros).
2. Calcule e exiba a soma apenas dos números que estão na Diagonal Principal da matriz.
Lembrete: A diagonal principal acontece quando o índice da linha é igual ao da coluna (l = c).
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function diagonalPrincipal () {
    const rl = readline.createInterface({input, output});

    const diagonal = [];
    let soma = 0;

    for (let l = 0; l < 3; l++) {
        diagonal[l] = [];

        for (let c = 0; c < 3; c++) {
            let valorValido = false;

            while (!valorValido) {
            const entradaValor = await rl.question(`Digite o valor de entrada: `);
            const valor = parseInt(entradaValor);

            if (isNaN(valor)) {
                console.log(`Valor inválido! Por favor, digite um número.`);
            } else {
                diagonal[l][c] = valor
                valorValido = true;
                
                if (l === c){
                soma += valor;
                }
            } 
        }
    }
}
    console.log(`\n--- TELA DE RESULTADOS ---`);
    console.log(`A soma dos números questão na diagonal é: ${soma}`);
    rl.close();
}
diagonalPrincipal();