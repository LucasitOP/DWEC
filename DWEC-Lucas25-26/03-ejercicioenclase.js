//1. Escribe un comentario en una linea
/*
2. Escribe un comentario en varias lineas
*/
//3. Declara una variable de cada tipo de dato (string, number, bigint, boolean, undefined, null)
let cadena="Texto"; //string
let numero=42; //number
let numerogrande=1234567890123456789012345678901234567890n; //bigint
let booleano=true;      //boolean   
let sinDefinir; //undefined
let nulo=null; //null

//4. y 5. Muestra por consola el valor y el tipo de dato de cada variable
console.log("Mostramos el valor y el tipo de dato de cada variable:");
console.log("Cadena:"+cadena);
console.log(typeof cadena); 
console.log("Numero:"+numero);
console.log(typeof numero); 
console.log("NumeroGrande:"+numerogrande);
console.log(typeof numerogrande);
console.log("Booleano:"+booleano);
console.log(typeof booleano);
console.log("SinDefinir:"+sinDefinir);
console.log(typeof sinDefinir);
console.log("Nulo:"+nulo);
console.log(typeof nulo); 
//6. A continuación, modifica los valores de las variables por otros del mismo tipo
console.log("Modificamos los valores de las variables por otros del mismo tipo:");
cadena="Otro texto"; //string
numero=84; //number
numerogrande=9876543210987654321098765432109876543210n; //bigint
booleano=false;      //boolean   
sinDefinir= "Ahora tiene valor"; //undefined
nulo="Ahora no es nulo"; //null 
console.log("Mostramos el valor y el tipo de dato de cada variable:");
console.log("Cadena:"+cadena);
console.log(typeof cadena); 
console.log("Numero:"+numero);
console.log(typeof numero); 
console.log("NumeroGrande:"+numerogrande);
console.log(typeof numerogrande);
console.log("Booleano:"+booleano);
console.log(typeof booleano);
console.log("SinDefinir:"+sinDefinir);
console.log(typeof sinDefinir);
console.log("Nulo:"+nulo);
console.log(typeof nulo); 
//7.A continuación, modifica los valores de las variables por otros de distinto tipo
console.log("Modificamos los valores de las variables por otros de distinto tipo:");
cadena=100; //number
numero="Cien"; //string
numerogrande=true; //boolean
booleano=1234567890123456789012345678901234567890n; //bigint   
sinDefinir=null; //null
nulo=undefined; //undefined
console.log("Mostramos el valor y el tipo de dato de cada variable:");
console.log("Cadena:"+cadena);
console.log(typeof cadena); 
console.log("Numero:"+numero);
console.log(typeof numero); 
console.log("NumeroGrande:"+numerogrande);
console.log(typeof numerogrande);
console.log("Booleano:"+booleano);
console.log(typeof booleano);
console.log("SinDefinir:"+sinDefinir);
console.log(typeof sinDefinir);
console.log("Nulo:"+nulo);
console.log(typeof nulo); 
//8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const CADENA="Constante texto"; //string
const NUMERO=3.14;
const NUMEROGRANDE=1111111111111111111111111111111111111111n; //bigint
const BOOLEANO=false;      //boolean
const SINDEFINIR=undefined; //undefined
const NULO=null;
//9. A continuación, modifica los valores de las constatnes.
//CADENA="Nuevo texto"; //string
//NUMERO=6.28;
//NUMEROGRANDE=2222222222222222222222222222222222222222n; //bigint
//BOOLEANO=true;      //boolean
//SINDEFINIR="Ahora tiene valor"; //undefined
//NULO="Ahora no es nulo"; //null
//No se pueden modificar los valores de las constantes, da error
//10. Comenta las líneas que produzcan algún error al ejercutarse 
