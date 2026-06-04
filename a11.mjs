/*
Uma universidade aplicou duas provas em seu vestibular: Matemática e Português.
Escreva um algoritmo que leia o nome do candidato (para com "FIM") e suas notas
nessas duas provas. Considere aprovado no vestibular o candidato que obteve nota maior
ou igual a 6,0 em ambas as matérias. O algoritmo deve imprimir:
1. O nome dos candidatos aprovados no vestibular;
2. O nome dos candidatos que pegaram recuperação apenas em Matemática (nota em
Matemática < 6,0, mas nota em Português >= 6,0);
3. O total de candidatos avaliados.

*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function analiseVestibular() {
    const rl = readline.createInterface ({input, output});

    let candidatosAprovados = [];
    let candidatosRecupMat = [];
    let totalCandidatos = 0;
    
    console.log("--- ANÁLISE DE VESTIBULAR ---");
    const primeiraEntrada = await rl.question("Digite o nome do candidato (ou 'FIM' para encerrar): ");
    let nomeCandidato = primeiraEntrada.trim().toUpperCase();

    while (nomeCandidato !== "FIM") {
        totalCandidatos++;
        const notaMat = await rl.question("Digite a nota de matemática do candidato: ");
        const notaPort = await rl.question("Digite a nota de português do candidato: ");
        let notaMatematica = parseFloat(notaMat.replace(',', '.'));
        let notaPortugues = parseFloat(notaPort.replace(',', '.'));

        if (isNaN(notaMatematica) || isNaN(notaPortugues)) {
            console.log("Entrada inválida. Por favor, digite um número válido para as notas.");
        } else {
            if (notaMatematica >= 6 && notaPortugues >= 6) {
                candidatosAprovados.push(nomeCandidato);
            } else if (notaMatematica < 6 && notaPortugues >= 6) {
                candidatosRecupMat.push(nomeCandidato);
            }
        }
        const proximaEntrada = await rl.question("Digite o nome do candidato (ou 'FIM' para encerrar): ");
        nomeCandidato = proximaEntrada.trim().toUpperCase();
    }
    console.log("\n--- TELA DE RESULTADOS ---");

    if (candidatosAprovados.length > 0) {
        console.log(`Os candidatos aprovados no vestibular são: ${candidatosAprovados.join(', ')}`);
    } else {
        console.log("Nenhum candidato foi aprovado no vestibular.");
    }
    if (candidatosRecupMat.length > 0) {
        console.log(`Os candidatos que pegaram recuperação apenas em matemática são: ${candidatosRecupMat.join(', ')}`); 
    } else {
        console.log("Nenhum candidato pegou recuperação apenas em matemática.");
    }
    if (totalCandidatos > 0) {
        console.log(`O total de candidatos avaliados é: ${totalCandidatos}`);
    } else {
        console.log("Nenhum candidato foi registrado para avaliação.");
    }
    rl.close();
}
analiseVestibular();
