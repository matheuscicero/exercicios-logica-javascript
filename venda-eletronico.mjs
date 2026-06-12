/*
Uma loja de eletrônicos monitora as vendas de 4 produtos diferentes durante 2 dias (quinta e sexta-feira).
Crie uma matriz 4x2 para armazenar a quantidade de vendas (linhas = produtos, colunas = dias).
1. a quantidade total de vendas de cada produto somando os dois dias.
2. O maior número de vendas registrado em uma única posição da matriz.
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function vendaEletronico () {
    const rl = readline.createInterface({input, output});

    const venda =[];
    let maiorNum = 0;

    for (let l = 0; l < 4; l++) {
        venda[l] = [];
        let totalProd = 0;

        for( let c = 0; c < 2; c++) {
            let vendaValida = false;

            while (!vendaValida) {
                const entradaVenda = await rl.question(`Digite o valor da venda do produto [${l}] no dia [${c}]: `);
                const valorVenda = parseInt(entradaVenda);

                if (isNaN(valorVenda)) {
                    console.log(`Venda inválida! Por favor, digite o valor da venda.`);

                } else {
                    venda[l][c] = valorVenda
                    totalProd += valorVenda;
                    vendaValida = true;

                    if(venda[l][c] > maiorNum) {
                        maiorNum = valorVenda;
                    }
                }
            }
        }
        console.log(`A quantidade total de vendas de cada produto [${l}] é: ${totalProd} \n`);
    }
    console.log(`O maior número de vendas registrado em uma única posição é: ${maiorNum}`);
    rl.close();
}
vendaEletronico();