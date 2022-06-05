
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


// let texto ="";
// let textob ="";
// do{
//    texto = prompt("Ingresar texto");
//    textob = textob + "" + texto
//    console.log(textob);
// }while(texto != "ESC");


// function impuesto(precio, porcentaje){
//    return precio + ((precio * porcentaje)/100)
// }
// for (let index = 0; index < 5; index++) {
//    let resultado = impuesto ((prompt("INGRESAR PRECIO")) ,(prompt("INGRESAR porcentaje")));

//    alert (resultado);
// }

// let nombreUsuario = prompt("BIENVENDIOS! \n Por favor ingrese su nombre");
// alert("Hola " + nombreUsuario + "\nA continuación realizaremos la solicitud con el presupuesto estimado para el servicio de tu empresa")
// let sap = prompt("¿Necesitas un sistema de autoprotecion tu instalacion?\nSI o NO");
// let instalacion;
// let presupuesto = 0;

// switch (sap) {
//    case"SI":
//       presupuesto = presupuesto + 20000;
//       break
//    case"NO":
//       prompt("¿podemos ofrecerte otro servicio? \n SI o NO")
//          break
//    default:
//       alert ("Error, Vuelva a ingresar respuesta")
//    break
// }

// console.log(presupuesto)


let nombreUsuario = prompt("BIENVENDIOS! \n Por favor ingrese su nombre");
alert("Hola " + nombreUsuario + "\nA continuación realizaremos la solicitud con el presupuesto estimado para el servicio de tu empresa.")
let cantidadDeServicios = prompt("Ingrese la CANTIDAD(1 o 2 o 3 o ...) de Servicios que desea cotizar, Ej: quiero un sistema de autoproteccion y una capacitacion coloque = 2 \n SERVICIOS: \n Sistema de autoproteccion \n Certificado de Ignifugado \n Asesoramiento Legal \n Presentacion ART \n Estuduos Higienicos \n Programas de Seguridad o ananlisis de riesgos");
let servicios 
let instalacion;
let presupuesto = 0;

function suma (precio) {
   return presupuesto = presupuesto + precio
}

for (i = 1; i <= cantidadDeServicios; i++) {
   let servicios = prompt("Ingrese el numero de servicio que quisiera cotizar. \n 1 = Sistema de autoproteccion \n 2 = Certificado de Ignifugado \n 3 = Asesoramiento Legal \n 4 = Presentacion ART \n 5 = Estuduos Higienicos \n 6 = Programas de Seguridad o ananlisis de riesgos");
   switch (servicios) {
      case "1":
         suma (30000)
         break
      case "2":
         suma (10000)
         break
      case "3":
         suma (6000)
         break
      case "4":
         suma (12000)
         break
      case "5":
         suma (35000)
         break
      case "6":
         suma (25000)
         break
      default:
         alert("Error del valor ingresado. suma 0")
         break
   }
}

alert("La cotización para "+ nombreUsuario +" es de "+ presupuesto + " Pesos")