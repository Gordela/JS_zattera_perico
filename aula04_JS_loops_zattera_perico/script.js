//laço while = enquanto
var x = 0
document.write('<br><h3>testando loop com while</h3>');
while(x <= 10){
    document.write('<br> O valor de x é: '+x);
    x = x + +1;
}

//laço for = para
var controle = 10
document.write('<br><h3>testando loop com FOR</h3>');
for(a=0; a<controle; a++)  {
   document.write ('<br> O valor de a é: '+a);
}

//laço swirch = escolha
//criar a função pedir()

function pedir(){
    //alert('A casa caiu mano!!!');
    var valor = prompt ('Digite  a opção de 1 a 4');
    //console.log(valor);
    //console.log(typeof(valor))
    //console.log(Number(valor))
    //console.log(typeof(Number(valor)))

    switch(Number(valor)){
        case 1:
            alert("Você escolheu Suco!")
            break
        case 2:
            alert("Você escolheu Água Gelada!")
            break
        case 3:
            alert("Você escolheu Sorvete!")
            break
        case 4:
            alert("Você está chamando o Garçom!")
            break
        default:
            alert("Digite entre 1 e 4!")
            break
    }
}