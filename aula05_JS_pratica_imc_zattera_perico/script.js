var peso;
var altura;
var imc;
var resultado;

//1 Recebendo o event
function calcular(event){
    //1.1 Refresh dos inputs
    event.preventDefault();

    //alert('Teste');

    //1.2 Recebendo os dados digitados pelo user
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    //1.3 Calculo do IMC
    imc = peso/(altura * peso);

    //1.4 Testando a recepção de valores e o calculo
    console.log(peso)
    console.log(altura)
    console.log(imc)

    resultado = document.getElementById('resultado');
    if(imc < 17){
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuidado! Você está muito abaixo do peso.'
    } else if(imc >= 17 && imc < 18.5){
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Opa! Você está abaixo do peso.'
    }
}