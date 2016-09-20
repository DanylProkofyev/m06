/**
 * Created by usu26 on 20/09/2016.
 */
var vidasRestantes = 3;
var numero;
var resultat;
do {
    numero = window.prompt("introdueix numero");
    //alert("debe introducir un numero");
    numero = parseInt(numero);
}
while (isNaN(numero))
resultat = numero + vidasRestantes;
alert("vides restantes: " + resultat);
console.log("el numero introducido es " + numero);
function obtenValorTexto() {
    var texto = document.getElementById("texto").value;
    document.getElementById("valor_texto").innerHTML = texto;
    //
    // var input = document.getElementById("texto")
    // texto = input.value;
    // var div=document.getElementById("valor_texto");
    // div.innerHTML=texto;
}
