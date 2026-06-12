/*
Um grupo de 6 candidatos fez uma prova de vestibular que continha duas fases: Matemática e Português. Você deve armazenar os nomes em um vetor, as notas de Matemática em outro vetor, e as de Português em um terceiro vetor.
média >= 6
1. O nome dos candidatos que foram aprovados nas duas fases.
2. O nome dos candidatos que passaram em Matemática, mas reprovaram em Português.
3. A média geral das notas de Matemática da turma inteira.
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function vestibular() {
    const rl = readline.createInterface({input, output});

    const nome = new Array (6);
    const notMat = new Array (6);
    const notPor = new Array (6);

    let somaMat = 0;

    console.log("--- SISTEMA DE NOTAS DO VESTIBULAR ---");

    for (let i = 0; i < nome.length; i++) {
        const nomeCandidato = await rl.question(`\nDigite o nome do candidato ${i + 1}: `);
        const not01Mat = await rl.question(`Digite a nota de matemática: `);
        const N01M = parseFloat(not01Mat);
        const not01Por = await rl.question(`Digite a nota de português: `);
        const N01P = parseFloat(not01Por);

          if ((isNaN(N01M) || N01M < 0) || (isNaN(N01P) || N01P < 0)) {
            console.log("Informação inválida! Por favor, digite um número correto.");
            i--;
        } else {
            nome[i] = nomeCandidato;
            notMat[i] = N01M;
            notPor[i] = N01P;

            somaMat += N01M;
        }

    }
    console.log("--- TELA DE RESULTADOS ---");
    for (let i = 0; i < nome.length; i++) {
        if((notMat[i] >= 6) && (notPor[i] >= 6)) {
            console.log(`| CANDIDATO: ${nome[i]} | STATUS: APROVADO NAS DUAS PROVAS | NOTA EM MATEMÁTICA: ${notMat[i]} | NOTA EM PORTUGUÊS: ${notPor[i]} `);
        } else if ((notMat[i] >= 6) && (notPor[i] < 6)) {
            console.log(`| CANDIDATO: ${nome[i]} | STATUS: APROVADO APENAS EM MATEMÁTICA: ${notMat[i]} | NOTA EM PORTUGUÊS: ${notPor[i]} `);
        }
    }
    const mediaGeral = somaMat/nome.length
    console.log(`\nA média geral de matemática dos candidatos é: ${mediaGeral.toFixed(2)}`);
    rl.close();
}
vestibular();