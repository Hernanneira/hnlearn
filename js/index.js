
// ejercicio agregando 1 al valor ingresado

// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// for (let i = 1; i <= 10; i++) {
//     let resultado = (ingresarNumero +1) + i ;
//     console.log(ingresarNumero +" + 1 + "+ i +" = "+ resultado);
// }

// agregando en ciclo el valor ingresado

// let suma = 0;
// let ingreso = parseInt(prompt("Ingresar Numero"));
// for (let i = 1; i <= 10; i++) {  
// suma = suma + ingreso
// console.log (suma);
// }

// let entrada = prompt("Ingresar un dato");
// Repetimos con While hasta que el usuario ingresa "ESC"
// while(entrada != "ESC" ){
//     alert("El usuario ingresó "+ entrada);
//     Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Ingresar otro dato");
//     console.log(entrada)
// }

// let texto = prompt("ingrese texto")
// let resultado ="";
// console.log(texto)
// while(texto != "ESC") {
// texto = prompt("ingrese texto2222")
// resultado = texto + resultado;
// console.log(resultado);
// }


let texto ="";
let textob ="";
do{
   texto = prompt("Ingresar texto");
   textob = textob + "" + texto
   console.log(textob);
}while(texto != "ESC");
