/* Algoritmo que após a entrada de três números inteiros, mesmo que entrem desordenados ao final sejam impressos em ordem crescente. */

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface ({input, output});

async function ordenarNumeros() {
    console.log("--- ORDENAR NÚMEROS ---");
    const primeiroNumero = await rl.question("Digite o primeiro número: ");
    const segundoNumero = await rl.question("Digite o segundo número: ");
    const terceiroNumero = await rl.question("Digite o terceiro número: ");
    const n1 = parseInt(primeiroNumero);
    const n2 = parseInt(segundoNumero);
    const n3 = parseInt(terceiroNumero);
    const numeros = [n1, n2, n3];
    numeros.sort((a, b) => a - b);
    console.log(`Números em ordem crescente: ${numeros.join(", ")}`);
    rl.close();
}
ordenarNumeros();