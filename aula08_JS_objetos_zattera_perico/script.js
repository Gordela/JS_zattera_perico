//trabalhando com objetos no javascript
//criar uma variavel do tipo objeto

let pessoa = {
    nome: 'Deivid',
    idade: 52,
    altura: 1.58,
    cargo: 'estudante'
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.altura);

let carro = {
    nome: 'brasilia',
    cor: 'amarela',
    marca: 'volksvagem'
};

console.log(carro.nome + ' ' + carro.cor);

//criando um array de objetos

let alunos = [
    {nome: 'Helô', CGM: 168345000, turno:'2DS'},
    {nome: 'Bernado', CGM: 168345111, turno:'2DS'},
    {nome: 'Rógerio', CGM: 168345222, turno:'2DS'},

];

console.log(alunos);
console.log(alunos[1]);

console.log(alunos[0].nome);