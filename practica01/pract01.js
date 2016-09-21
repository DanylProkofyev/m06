var numero;
do {
    numero = window.prompt("introdueix numero");
    //alert("debe introducir un numero");
    numero = parseInt(numero);
}
while (isNaN(numero));
var nume = 0;
do {
    console.log(nume);
    nume++;
} while (nume < numero);
