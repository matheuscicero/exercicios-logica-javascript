/*
Um cliente está sacando dinheiro em um caixa eletrônico. 
O caixa deve continuar lendo valores de saques até que o cliente digite 0 (que significa "encerrar operação") 
ou o saldo total disponível no caixa (que começa em R$ 500) acabe.
1. Comece a variável saldoCaixa := 500;.
2. Use o ENQUANTO para pedir o valor do saque enquanto o saque for diferente de 0 E o saldoCaixa for maior que 0.
3. Dentro do laço, se o valor digitado for menor ou igual ao saldoCaixa, você subtrai esse valor do saldo. Se o usuário tentar sacar mais do que tem no caixa, mostre "Saldo insuficiente".
4. No final, exiba o saldo restante no caixa eletrônico.
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function caixaEletronico() {
    const rl = readline.createInterface ({input, output});

    let saldoCaixa = 500;
    console.log("--- CAIXA ELETRÔNICO ---");
    while (saldoCaixa > 0) {
        const valorSaque = await rl.question("Digite o valor do saque (ou 0 para encerrar): ");
        let valor = parseFloat(valorSaque.replace(',' , '.'));

        if (isNaN(valor) || valor < 0) {
            console.log("Entrada inválida. Por favor, digite um número válido para o valor do saque.");
        } else if (valor === 0) {
            console.log("Encerrando operação. Obrigado por usar o caixa eletrônico.");
            break;
        } else if (valor <= saldoCaixa) {
            saldoCaixa -= valor;
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo restante: R$ ${saldoCaixa.toFixed(2)}`);
        } else {
            console.log("Saldo insuficiente.");
        }
    }
    console.log(`Saldo final no caixa eletrônico: R$ ${saldoCaixa.toFixed(2)}`);
    rl.close();
}
caixaEletronico();