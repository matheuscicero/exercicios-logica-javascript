// Entrar com dois números e imprimi-los em ordem decrescente

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface ({input, output});

async function ordemDecrescente() {
    console.log ("--- ORDEM DECRESCENTE ---");
    const primeiroNumero = await rl.question("Digite o primeiro número: ");
    const segundoNumero = await rl.question("Digite o segundo número: ");
    const n1 = parseFloat(primeiroNumero);
    const n2 = parseFloat(segundoNumero);
    if (n1>n2) {
        console.log(`Os números em ordem decrescente são: ${n1} e ${n2}`);
    } else {
        console.log(`Os números em ordem decrescente são: ${n2} e ${n1}`);
    }
    rl.close();
}
ordemDecrescente();