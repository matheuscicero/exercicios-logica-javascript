//entrar com um número e imprimir uma das mensagens

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface({input, output});

async function MsgMultiplo(){
    console.log('--- Sistema de números múltiplos ---');
    const primeiroNumMultiplo = await rl.question("Digite um número: ");
    const n1 = parseInt(primeiroNumMultiplo);
    console.log(`\n O número que você digitou é ${n1}`);
    if (n1 % 5 === 0) {
        console.log("O número que você digitou é múltiplo de 5.");
    } else {
        console.log("O número que você digitou não é múltiplo de 5.");
    }
    rl.close();
}
MsgMultiplo()