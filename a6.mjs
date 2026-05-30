// Algoritmo que deixe entrar com dois números e imprimir o cubo do menor número e a raiz quadrada do maior número, se for possível

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface ({input, output});

async function cuboRaiz() {
    console.log("--- CUBO E RAIZ ---");
    const primeiroNumero = await rl.question("Digite o primeiro número: ");
    const segundoNumero = await rl.question("Digite o segundo número: ");
    const n1 = parseFloat(primeiroNumero);
    const n2 = parseFloat(segundoNumero);
    if (n1 < n2) {
        console.log(`O cubo do menor número (${n1}) é: ${Math.pow(n1, 3)}`);
        console.log(`A raiz quadrada do maior número (${n2}) é: ${Math.sqrt(n2)}`);
    } else {
        console.log(`O cubo do menor número (${n2}) é: ${Math.pow(n2, 3)}`);
        console.log(`A raiz quadrada do maior número (${n1}) é: ${Math.sqrt(n1)}`);
    }
    rl.close();
}
cuboRaiz();