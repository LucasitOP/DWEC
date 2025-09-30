
let  variable1="Hola";
let  variable2="Mundo";

let  resultadoConcatenacion=variable1 + " " + variable2;

console.log(resultadoConcatenacion.length);

let primeraletra=resultadoConcatenacion.charAt(0);
console.log("primera letra:"+primeraletra);

let ultimaletra=resultadoConcatenacion.charAt(resultadoConcatenacion.length-1);
console.log("Ultima caracter:"+ultimaletra);

variable1=variable1.toUpperCase();
variable2=variable2.toLowerCase();

let variableCadenaLarga=" Hola Lucas que tal estas ";

let nombre="Lucas";

console.log(`Hola ${nombre}, que tal estas?`);