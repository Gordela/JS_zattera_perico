var peso;
var altura;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();

    peso = parseFloat(document.getElementById('peso').value);
    altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    imc = peso / (altura * altura);

    console.log('Peso:', peso);
    console.log('Altura:', altura);
    console.log('IMC:', imc);

    resultado = document.getElementById('resultado');
    
    if (imc < 17) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado! Você está muito abaixo do peso.';
    } else if (imc >= 17 && imc < 18.5) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br>Opa! Você está abaixo do peso.';
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br>Parabéns! Você está com o peso ideal.';
    } else if (imc >= 25 && imc < 29.9) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br>Você está acima do peso.';
    } else {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br>Cuidado! Você está com obesidade.';
    }
}
