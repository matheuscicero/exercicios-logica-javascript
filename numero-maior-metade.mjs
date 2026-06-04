/* ler um número e se ele for maior que 20, então imprimir a metade do número
senão imprimir a quita parte do valor*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface({input, output});

async function numeroMaior() {
    console.log("--- SISTEMA DE NÚMEROS ---");
    const primeiroNumero = await rl.question("Digite um número: ");
    const n1 = parseFloat(primeiroNumero);
    console.log(`\n O número que você digitou é: ${n1}`);
    if (n1>20) {
        const n2 = n1/2;
        console.log(`A metade do número é: ${n2}`);
    } else {
        const n3 = n1/5;
        console.log(`A quinta parte do valor é: ${n3}`);
    }
    rl.close();
}
numeroMaior();
