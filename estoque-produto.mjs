/*
Uma loja de informática tem cadastrados 5 produtos em um vetor e a quantidade em estoque de cada um deles em outro vetor 
(onde o índice 0 é o produto 1, o índice 1 é o produto 2, e assim por diante).
1. Imprima o nome de todos os produtos que estão com estoque zerado.
2. Imprima a quantidade total de itens armazenados no estoque somando todos os produtos.
3. Mostre a mensagem "ALERTA" se o estoque do produto na posição 2 for menor que 5 unidades.
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function estoqueProduto() {
    const rl = readline.createInterface ({input, output});

    const produtos = [];
    const estoque = [];

    for (let i = 0; i < 5; i++) {
        const nomeProduto = await rl.question(`Digite o nome do produto ${i + 1}: `);
        const quantidadeStr = await rl.question(`Digite a quantidade em estoque do produto ${i + 1}: `);
        const quantidadeInt = parseInt(quantidadeStr, 10);

        if (isNaN(quantidadeInt) || quantidadeInt < 0) {
            console.log("Quantidade inválida. Por favor, insira um número válido.");
            i--;
        } else {
            produtos[i] = nomeProduto;
            estoque[i] = quantidadeInt;
        }

    }
    console.log("\n --- RESULTADO ---");

    console.log("Produtos com estoque zerado: ");
    let temZerado = false;
    for (let i = 0; i < estoque.length; i++) {
        if (estoque[i] === 0) {
            console.log(`- ${produtos[i]}`);
            temZerado = true;
        }
    }
    if (!temZerado) {
        console.log("Nenhum produto com estoque zerado.");
    }
    const totalEstoque = estoque.reduce((total, quantidade) => total + quantidade, 0);
    console.log(`\n Quantidade total de itens em estoque: ${totalEstoque}`);

    if (estoque[1] < 5) {
        console.log(`ALERTA: O produto ${produtos[1]} (posição 2) está com estoque crítico (${estoque[1]} unidades)!`);
    }
    rl.close();
}
estoqueProduto();