/*
Um pequeno cinema de bairro tem uma sala com 3 linhas e 3 colunas de assentos. 
O dono quer registrar quais assentos estão ocupados (número 1) e quais estão vazios (número 0).
Use laços PARA aninhados para que o usuário digite 0 ou 1 para cada posição da sala.
No final, o algoritmo deve calcular e exibir:
A quantidade total de assentos ocupados (Dica: use um contador que ganha +1 toda vez que encontrar o número 1 na matriz).
A porcentagem de ocupação da sala (Quantidade de ocupados dividida pelo total de assentos, que é 9, multiplicado por 100).
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function salaCinema() {
    const rl = readline.createInterface ({input, output});

    const sala = [];
    let totalOcupados = 0;

    for (let l = 0; l < 3; l++) {
        sala[l] = [];

        for (let c = 0; c < 3; c++) {
            const assento = await rl.question(`Digite 0 para assento vazio ou 1 para assento ocupado (Linha ${l + 1}, Coluna ${c + 1}): `);
            const valor = parseInt(assento, 10);

            if (valor === 1) {
                sala[l][c] = valor;
                totalOcupados++;
            } else if (valor === 0) {
                sala[l][c] = valor;
            } else {
                console.log('Entrada inválida. Por favor, digite 0 ou 1.');
                c--; // Volta para a mesma coluna para tentar novamente
            }
        }
    }
    console.log("\n--- RESULTADO ---");
    console.log(`Total de assentos ocupados: ${totalOcupados}`);
    const porcentagemOcup = (totalOcupados / 9) *100;
    console.log(`Porcentagem de ocupação da sala: ${porcentagemOcup.toFixed(2)}%`);

    rl.close();
}
salaCinema();