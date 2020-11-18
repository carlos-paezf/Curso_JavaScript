alert("Parte 2");


console.log('var, let, const');


//? Var permite reinicializar una variable con un nuevo valor
var num = 55;
var num = 99;
console.log(num);


//? Las variables creadas con let solo se puede inicializar 1 vez,
//? pero, se puede sobrescribir su valor
let n = 55;
n = 99;
console.log(n);
//? let declara variables que solo viviran en un ambiente
let i = 33;
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
console.log(i);


//? Const tiene la obligacion de asignar un valor inmediato a la varible
//? Solo se puede declarar una vez, ni asignarle otro valor
const numero = 487;
console.log(numero);


const array = [1, 3, 5, 7, 9];
array.push(11);
console.log(array);