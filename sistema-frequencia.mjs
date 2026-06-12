/*
Uma academia de ginástica decidiu fazer uma pesquisa com várias pessoas para entender o perfil dos seus alunos. 
Crie um algoritmo em Portugol que receba, para cada aluno:
O gênero (M - Masculino, F - Feminino).
A idade do aluno.
A frequência semanal (quantos dias por semana ele vai à academia: de 1 a 7).
OBS: O laço de repetição deve encerrar quando o usuário digitar a idade igual a 0.
1. A quantidade de alunos do gênero Masculino com mais de 30 anos;
2. A quantidade de mulheres (Gênero F) que frequentam a academia 5 ou mais dias por semana;
3. A média de idade das pessoas que frequentam a academia menos de 3 dias por semana (frequência < 3);
4. A porcentagem de alunos do gênero Feminino dentre todos os alunos analisados.
*/

import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

async function sistemaFrequencia () {
    const rl = readline.createInterface({input, output});

    let contAluno = 0;
    let contAlunoM = 0;
    let contFreqM = 0;
    let contIdadeH = 0;
    let somaIdade = 0;
    let contAluno3 = 0;

    console.log("--- SISTEMA DE FREQUÊNCIAS ---");

    async function pedirIdade() {
        let entrada = await rl.question(`Digite a idade do aluno (ou digite 0 para encerrar): `);
        let valor = parseInt(entrada);

        while (isNaN(valor) || valor < 0) {
            console.log(`Idade inválida!`);
            entrada = await rl.question(`Por favor, digite uma idade válida: `);
            valor = parseInt(entrada);
        }
        return valor;
    }
    
    let idade = await pedirIdade();

    while (idade !== 0) {
        contAluno++;
        
        const entradaGenero = await rl.question(`Digite o gênero do aluno (M-masculino / F-feminino): `);
        const genero = entradaGenero.trim().toUpperCase();

        const entradaFreq = await rl.question(`Digite a frequência do aluno: `);
        const freq = parseInt(entradaFreq);

        if ((genero === "M") && (idade > 30)) {
            contIdadeH ++;
        }
        if (genero === "F") {
            contAlunoM ++;
        }
        if ((genero === "F") && (freq >= 5)) {
            contFreqM ++;
        }
        if (freq < 3) {
            somaIdade += idade;
            contAluno3 ++;
        }
        console.log("--------------------------");
        idade = await pedirIdade();
    }
    console.log(`\n--- TELA DE RESULTADOS ---`);
    if (contAluno > 0) {
    console.log(`A quantidade de alunos do genêro masculino com mais de 30 anos é: ${contIdadeH}.`);
    console.log(`A quantidade de mulheres que frequentam a academia 5 ou mais dias por semana é: ${contFreqM}.`);
   
    if (contAluno3 > 0) {
        const mediaFreq3 = somaIdade / contAluno3;
        console.log(`A média de idade das pessoas que frequentam a academia menos de 3 dias por semana é: ${mediaFreq3}.`);
    } else {
        console.log(`Nenhum aluno com frequência de menos de 3 dias foi registrado.`)
    }
   
    const porcAlunoM = (contAlunoM / contAluno) *100;
    console.log(`A porcentagem de alunos do gênero feminino dentre todos os alunos analisados é: ${porcAlunoM.toFixed(1)}%.`);
    } else {
     console.log(`Nenhum aluno foi registrado.`);   
    }

    rl.close();
}
sistemaFrequencia();