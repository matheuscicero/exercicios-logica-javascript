/*
EXIGÊNCIAS DO ALGORITMO:
1. Informar o total de armazenamento consumido
2. Informar o total de clientes com consumo superior a 500gb
3. informar o total de clientes com consumo até 500gb
4. Informar a média de consumo dos clientes
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function consumoArmazenamento() {
    // const rl dentro da função para evitar conflitos com outros algoritmos que também utilizam readline ou gasto de memória.
    const rl = readline.createInterface ({input, output});
    //variáveis let que mudam a cada iteração do loop.
    let totalArmazenamento = 0;
    let clientesAcima500 = 0;
    let clientesAte500 = 0;
    let totalClientes = 0;
    let mediaConsumo = 0;

    console.log("--- CONSUMO DE ARMAZENAMENTO ---");
    const primeiraEntrada = await rl.question("Digite o valor de consumo em GB (ou -1 para desligar o comando): ");
    let valor = parseFloat(primeiraEntrada);

    while (valor !== -1) {
        //validação simples:
        if (isNaN(valor) || valor < 0 ){
            console.log("Valor inválido. Por favor, digite um número positivo ou -1 para desligar o comando.");
        } else {
        totalArmazenamento += valor;
        totalClientes++;

        if (valor > 500) {
            clientesAcima500++;
        } else {
            clientesAte500++;
        }
    }
    const proximaEntrada = await rl.question("Digite o valor de consumo em GB (ou -1 para desligar o comando0: ");
    valor = parseFloat(proximaEntrada);
    }
console.log("\n--- TELA DE RESULTADOS ---");
//Exibição dos resultados:
if (totalClientes > 0) {
    console.log(`O total de armazenamento consumido é: ${totalArmazenamento} GB`);
    console.log(`O total de clientes com consumo superior a 500 GB é: ${clientesAcima500}`);
    console.log(`O total de clientes com consumo até 500 GB é: ${clientesAte500}`);
    
    mediaConsumo = totalArmazenamento / totalClientes;
    console.log(`A média de consumo dos clientes é: ${mediaConsumo.toFixed(2)} GB`);
} else {
    console.log("Nenhum consumo foi registrado.");
}
rl.close();
}
consumoArmazenamento();
