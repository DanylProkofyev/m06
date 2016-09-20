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

