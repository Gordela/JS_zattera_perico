//criar uma função para exibir uma lista de alunos
// function listaAlunos(aluno1, aluno2, aluno3, aluno4){
//     console.log('Seja bem vindo todos os alunos!');
//     console.log(aluno1);
//     console.log(aluno2);
//     console.log(aluno3);
//     console.log(aluno4);
// }

//na função não temos como saber de antemão quantos parametros serão passado
//aí entra em ação o Rest Operator que irá tranformar os prametros em um array

//vamos reescrever a função utilizando o Rest Operator
// function listaAlunos(...alunos){
//     console.log('Seja bem vindo todos os alunos!');
//     console.log(alunos);
//     console.log(alunos[0]);    
//     console.log(alunos[3]);
// }
// listaAlunos('Adamastor', 'Benevides', 'Conegundes', 'Demerval', 'Emendarda');


//outro exemplo: sorteador de números primos menores do que 20
// function sorteadorPrimo(...numeros){
//     console.log(numeros);
//     //const numeroSorteados = Math.random()*numeros.length;

//     const numeroSorteados = Math.floor(Math.random()*numeros.length);
//     console.log(`posição ${numeroSorteados}`);
//     console.log(`Numero primo: ${numeros[numeroSorteados]}`)
// }

// sorteadorPrimo(2,3,5,7,11,13,17,19);

//SORTEADOR DE ALUNOS SALA
function sorteadorAlunos(...alunos) {
    console.log(alunos);

    const alunosSorteados = Math.floor(Math.random() * alunos.length);
    console.log(`posição: ${alunosSorteados}`);
    console.log(`Alunos: ${alunos[alunosSorteados]}`)

}
sorteadorAlunos('Aline', 'Ana Clara', 'André', 'Bernardo', 'Daniel', 'Deivid', 'Enrique', 'Fernanda', 'Gabriel Rossa', 'Gabriel Zattera', 'Heloise', 'Izadora', 'Jefte', 'João Matheus',
'João Maurício', 'José', 'Julia', 'Kamila', 'Karina', 'Kevin', 'Leonardo Freitas', 'Leonardo', 'Leonardo Speçamilio', 'Lorenzo', 'Lucas', 'Matheus', 'Nicolas', 'Nycolas', 'Pedro Portela',
'Rafaela', 'Raphael', 'Rayra', 'Valentina', 'Vinícius', 'Vitor Garrett', 'Vitor Schuski', 'Pedro da Silva', 'Ana Luiza');