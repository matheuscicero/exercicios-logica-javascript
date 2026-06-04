/*
Exercício 2: Análise de Clientes de uma Loja
Uma loja quer conhecer melhor seus clientes. Crie um algoritmo que leia o nome do cliente
(o programa para se o nome for "FIM"). Para cada cliente, leia a idade e o valor da compra
que ele fez. Ao final, imprima:
1. O nome dos clientes que têm mais de 60 anos (Grupo de Risco/Prioritário);
2. A quantidade de clientes que gastaram mais de R$ 500,00;
3. A média de idade dos clientes que compraram na loja 
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function analiseClientes() {
    const rl = readline.createInterface({ input, output});

    let nomesIdoso = [];
    let clientesGastoAlto = 0;
    let somaIdade = 0;
    let totalClientes = 0;

    console.log("--- ANÁLISE DE CLIENTES ---");
    const primeiraEntrada = await rl.question("Digite o nome do cliente (ou 'FIM' para encerrar): ");
    let nomeCliente = primeiraEntrada.trim().toUpperCase();

    while (nomeCliente !== "FIM") {
        const idadeEntrada = await rl.question("Digite a idade do cliente: ");
        let idadeCliente = parseInt(idadeEntrada);

        const valorCompraEntrada = await rl.question("Digite o valor da compra do cliente: R$ ");
        let valorCompra = parseFloat(valorCompraEntrada.replace(',', '.'));

        if (isNaN(idadeCliente) || isNaN(valorCompra)) {
            console.log("Entrada inválida. Por favor, digite um número válido para idade e valor da compra.");
        } else {
            if (idadeCliente > 60) {
                console.log(`Cliente ${nomeCliente} é do grupo de risco/prioritário.`);
                nomesIdoso.push(nomeCliente);
            }
            if (valorCompra > 500) {
                clientesGastoAlto++;
            }
            somaIdade += idadeCliente;
            totalClientes++;
        }
        const proximaEntrada = await rl.question("Digite o nome do cliente (ou 'FIM' para encerrrar): ");
        nomeCliente = proximaEntrada.trim().toUpperCase();
    }
    console.log("\n--- TELA DE RESULTADOS ---");

    if (nomesIdoso.length > 0) {
        console.log(`Os clientes que têm mais de 60 anos são: ${nomesIdoso.join(', ')}`);
    } else {
        console.log("Nenhum cliente do grupo de risco/prioritário foi registrado.");
   }
        if (clientesGastoAlto > 0) {
        console.log(`A quantidade de clientes que gastaram mais de R$ 500,00 é: ${clientesGastoAlto}`);
        } else {
            console.log("Nenhum cliente gastou mais de R$ 500,00.");
        }
        if (somaIdade > 0) {
            const mediaIdade = somaIdade / totalClientes;
            console.log(`A média de idade dos clientes que compraram na loja é: ${mediaIdade.toFixed(2)} anos`);
        } else {
            console.log("Nenhum cliente foi registrado para calcular a média de idade.");
        }
        rl.close();
}
analiseClientes();
