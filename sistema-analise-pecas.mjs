/*
Uma fábrica produz peças e precisa de um relatório diário. Criar um algoritmo que leia o
código da peça (ex: "P01", "P02") e, para cada peça, leia o seu estado (1 para Aprovada,
2 para Reprovada). O programa deve parar quando o usuário digitar "SAIR" no código da
peça. Ao final, o algoritmo deve imprimir:

1. A quantidade total de peças analisadas;
2. A quantidade de peças aprovadas;
3. A porcentagem de peças reprovadas em relação ao total.
*/

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

async function relatorioPecas() {
    const rl = readline.createInterface ({ input, output });
    
    let totalPecas = 0;
    let pecasAprovadas = 0;
    let pecasReprovadas = 0;

    console.log("--- RELATÓRIO DE PEÇAS ---");
    const primeiraEntrada = await rl.question("Digite o código da peça (ou 'SAIR' para encerrar): ");
    let codigoPeca = primeiraEntrada.trim().toUpperCase();

    while (codigoPeca !== "SAIR") {
        const estadoEntrada = await rl.question("Digite o estado da peça (1 para APROVADA, 2 para REPROVADA): ");
        let estadoPeca = parseInt(estadoEntrada);

        if (isNaN(estadoPeca) || (estadoPeca !== 1 && estadoPeca !== 2)) {
            console.log("Estado inválido. Por favor, digite 1 para APROVADA ou 2 para REPROVADA.");

        } else {
            totalPecas++;

            if (estadoPeca === 1) {
                pecasAprovadas++;
            } else {
                pecasReprovadas++;
            }
        }
        const proximaEntrada = await rl.question("Digite o código da peça (ou 'SAIR' para encerrar): ");
        codigoPeca = proximaEntrada.trim().toUpperCase();
    }
    console.log("\n--- TELA DE RESULTADOS ---");
    if (totalPecas > 0) {
        const porcentagemReprovadas = (pecasReprovadas / totalPecas) * 100;
        console.log(`A quantidade total de peças analisadas é: ${totalPecas}`);
        console.log(`A quantidade de peças aprovadas é: ${pecasAprovadas}`);
        console.log(`A porcentagem de peças reprovadas em relação ao total é: ${porcentagemReprovadas.toFixed(2)}%`);
        
    } else {
        console.log("Nenhuma peça foi registrada.");
    }
    rl.close();
}
relatorioPecas();
