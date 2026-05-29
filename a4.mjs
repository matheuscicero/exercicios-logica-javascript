// Efetuar a leitura de dois números diferentes e identificar o maior valor

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface({input, output});

async function acharNumero() {
    console.log("--- SISTEMA DE NÚMEROS ---");
    const primeiroNumero = await rl.question("Digite o primeiro número: ");
    const segundoNumero = await rl.question("Digite o segundo número: ");
    const n1 = parseFloat(primeiroNumero);
    const n2 = parseFloat(segundoNumero);
    if (n1>n2) {
        console.log(`O maiorn número é: ${n1}`);
    } else {
        console.log(`O maior número é: ${n2}`);
    }
    rl.close();
}
acharNumero();