/*
Imagine que uma professora quer registrar as notas de 3 alunos. Cada aluno fez 4 provas durante o semestre.
Armazene essas notas em uma matriz de 3 linhas (alunos) por 4 colunas (provas).
Calcule e mostre a média de cada um dos 3 alunos individualmente
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function sistemaProva() {
    const rl = readline.createInterface({input, output});

    const provas = [];
    
    for (let l = 0; l < 3; l++) {
        provas[l] = [];
        let somaNota = 0;

        for (let c = 0; c < 4; c++) {
            let notaValida = false;

            while (!notaValida) {
                const notaProva = await rl.question(`Digite a nota do aluno [${l}] na prova [${c}]: `);
                const NP = parseFloat(notaProva);

                if (isNaN(NP)) {
                    console.log(`Valor inválido! Por favor, digite uma nota.`);
                } else {
                    provas[l][c] = NP;
                    somaNota += NP;
                    notaValida = true;

                }
            }
        }
        const media = somaNota / 4;
        console.log(`| Média do aluno [${l}]: ${media.toFixed(2)} \n`);
    }
    rl.close();
}
sistemaProva();