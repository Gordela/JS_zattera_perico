let pessoa = {
    nome: 'Gabriel',
    sobreNome: 'Zattera',
    empresa: 'CESF',
    cargo: 'aluno'
};
console.log(pessoa);
console.log(pessoa.nome);

//descontruindo o objeto
const {nome, cargo, empresa} = pessoa; 
console.log(nome);
console.log(empresa);

let nomes = [ 'Aparício', 'Bernadete', 'Cremilda'];
console.log(nomes);
let = {0:primeiroNome, 1:segundoNome, 2: terceiroNome} = nomes;
console.log(primeiroNome);

//outro jeito de desconstruir o array
let = [primNome, segNome, tercNome]=nomes;
console.log(segNome)