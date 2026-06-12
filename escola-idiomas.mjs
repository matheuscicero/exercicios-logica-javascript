/*
Uma escola de idiomas avaliou seus alunos em quatro critérios: Fala, Audição, Escrita e Leitura. 
Criar um algoritmo que receba o nome do aluno e as notas (de 0 a 10) nesses 4 critérios. 
1. Nome dos alunos que obtiveram nota máxima (10,0) em todos os critérios;
2. Nome dos alunos que ficaram com nota menor que 5,0 nos critérios de Fala e Escrita simultaneamente;
3. A porcentagem de alunos que passaram no critério de Leitura (Considere passado com nota >= 6,0).
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function escolaIdioma() {
    const rl = readline.createInterface ({input, output});

    let contAluno = 0;
    let somaAlunoLei = 0;

    console.log("--- SISTEMA DE NOTAS ---");
    let nome = await rl.question("Digite o nome do aluno (ou digite 'FIM' para encerrar): ");
    while (nome.trim() === "" || !isNaN(Number(nome.trim()))) {
        console.log("ERRO: O nome do aluno não pode ser número!");
        nome = await rl.question("Por favor, digite um NOME válido: ");
    }
    let vnome = nome.trim().toUpperCase();

    while (vnome !== "FIM") {
        contAluno ++;
        const primeiraNota = await rl.question("Digite o valor da prova de Fala: ");
        const nFala = parseFloat(primeiraNota);
        const segundaNota = await rl.question("Digite o valor da prova de Audição: ");
        const nAud = parseFloat(segundaNota);
        const terceiraNota = await rl.question("Digite o valor da prova de Escrita: ");
        const nEsc = parseFloat(terceiraNota);
        const quartaNota = await rl.question("Digite o valor da prova de Leitura: ");
        const nLei = parseFloat(quartaNota);

        if ((nFala === 10) && (nAud === 10) && (nEsc === 10) && (nLei === 10)) {
            console.log(`|ALUNO: ${nome} | STATUS: Obteve nota máxima em todos os critérios.`);
        }
        if ((nFala < 5) && (nEsc < 5)) {
            console.log(`| ALUNO: ${nome} | STATUS: Obteve nota menor que 5 nos critérios Fala e Escrita simultaneamente.`);
        }
        if (nLei >= 6) {
            somaAlunoLei ++;
        }
        nome = await rl.question("Digite o nome do próximo aluno: ");
        while (nome.trim() === "" || !isNaN(Number(nome.trim()))) {
        console.log("ERRO: O nome do aluno não pode ser número!");
        nome = await rl.question("Por favor, digite um NOME válido: ");
    }
        vnome = nome.trim().toUpperCase();
    }
    console.log(`\n--- TELA DE RESULTADOS ---`);
    if (contAluno > 0) {
        let porcAprovLeitura = (somaAlunoLei / contAluno) * 100;
        console.log(`A porcentagem de alunos que passaram no critério Leitura é: ${porcAprovLeitura.toFixed(2)}%`);
    } else {
        console.log(`Nenhum aluno foi registrado.`)
    }
    rl.close();
}
escolaIdioma();