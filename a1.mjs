import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
const rl = readline.createInterface({input, output});

async function calcularMedia(){
    console.log("--- Sistemas de notas ---");
    //1. recebe as notas como texto(string)
    const primeiraNotaInput = await rl.question('Digite a primeira nota: ');
    const segundaNotaInput = await rl.question('Digite a segunda nota: ');
    //2. converte os textos para números decimais (float)
    //usamos o parseFloat porque notas tem virgulas
    const n1 = parseFloat(primeiraNotaInput);
    const n2 = parseFloat(segundaNotaInput);
    //3. calcular média
    const media = (n1+n2)/2;
    //4. mostra o resultado
    //o método .toFixed(1) serve para arredondar para 1 casa decimal (ex: 8.3)
    console.log(`\nA média do aluno é: ${media.toFixed(1)}`);
    //5. verificar se foi aprovado
    if (media>=7){
        console.log("Status: aprovado!");
    } else {
        console.log("Status: reprovado!");
    }
    rl.close();
}
calcularMedia();