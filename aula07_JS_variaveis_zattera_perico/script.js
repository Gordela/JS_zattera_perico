//DIFERENÇAS ENRE VAR, LET E CONST

//VAR
var nome = 'zattera';
console.log(nome)
if(nome==='zattera'){
    var escola = 'CESF';
    console.log(escola);
}
    console.log(escola)

    escola = 'Sagrada';
    console.log(escola)
//com variaveis do tipo var podemos acessar(visibilidade)
//fora do escopo da criação da variável

//LET
if(nome === 'zattera'){
    let curso = 'DS';
    console.log(curso);
}
//console.log(curso)
curso = 'Desenvolvimento';
console.log(curso);

//let só permiete o acesso à variável no escopo onde ele foi criado (escopo de bloco)
//se reatribuimos valor a ela é como se estivéssemos declaramdo uma nova variavel
// do tipo var com o mesmo nome curso

//CONST
const cargo = 'estudante';
console.log(cargo);
//cargo = 'programador';
console.log(cargo);

//variáreis do tipo const tem escopo de bloco, com as let, mas ela não
//permite reatribuir de valor

//CRIAÇÃO DE VAREÁVEIS SEM ATRIBUIÇÃO INICIAL
var aluno1;
aluno1 = 'Ana Clara';
console.log(aluno1)

let aluno2;
aluno2 = 'Bernardo';
console.log(aluno2);

const aluno3 = 'Cremilda';
console.log(aluno3) 
