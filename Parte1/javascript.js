//? Comprobar si esta correctamente vinculado con el archivo HTML
alert('Archivo .js funcionando');


//? Declarar variables: (Case Sensitive)
//* Entero
var num = 5;
var Num = 10;
alert(num + Num);

//* Boolean
var bool = false;

//* String
var str = 'Linea de texto';
alert(num + str);

//* Sobrescribir una variable existente
Num = 6;

//* Constantes:
const numero = 10;
// numero = 20;
//! Error, una constante no se puede sobrescribir
//! Para visualisar el error, hacer uso de la consola 
//! ubicada en Inspeccionar del navegador
alert(numero);

//* Incrementar el valor de una varible
num = num + 1;
//? Interactuar con la consola
console.log(num);
num += 1;
console.log(num);
num++;
console.log(num);

//* Decrementar el valor de una variable
num = num - 1;
console.log(num);
num -= 1;
console.log(num);
num--;
console.log(num);


//? Condicionales:
if (num > 5 && str == "Linea de texto") {
    console.log("TRUE");
} else if (num > 4 && str == "Linea de texto" && !bool) {
    console.log("True")
} else {
    console.log("FALSE");
}


//? Arreglos
var array = [1, 5, 10, 'HOLA', true];
console.log(array);
console.log(array[3]);


//? Bucles:
//* FOR:
for (var i = 0; i <= array.length - 1; i++) {
    console.log(array[i]);
}

//* WHILE:
var i = 0;
while (i < array.length) {
    console.log(array[i]);
    i += 2;
}

//* DO WHILE:
var j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);

//* SWITCH:
var h = 10;
switch (h) {
    case 10:
        console.log("H = 10");
        break;
    case 15:
        console.log("H = 15");
    default:
        console.log("Sin respuesta");
        break;
}


//? Funciones:
function sum(n1, n2) {
    return console.log(n1 + n2);
}
sum(5, 6);