// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

// 3. Usa desestructuración para extraer dos propiedades de un objeto

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

// 6. Usa propagación para combinar dos arrays en uno nuevo

// 7. Usa propagación para crear una copia de un array

// 8. Usa propagación para combinar dos objetos en uno nuevo

// 9. Usa propagación para crear una copia de un objeto

// 10. Combina desestructuración y propagación

let miArray = [10, 20, 30, 40, 50];

// 1. Desestructuración para extraer los dos primeros elementos de un array
console.log("Ejercicio 1:");
console.log("-------------------");

let [primerElemento, segundoElemento] = miArray;
console.log(primerElemento); // 10
console.log(segundoElemento); // 20
console.log("-------------------");

// 2. Desestructuración en un array con valor predeterminado
console.log("Ejercicio 2:");
console.log("-------------------");
let [tercerElemento = 0, cuartoElemento = 0] = miArray;
console.log(tercerElemento); // 30
console.log(cuartoElemento); // 40
console.log("-------------------");

// 3. Desestructuración para extraer dos propiedades de un objeto
console.log("Ejercicio 3:");
console.log("-------------------");

let persona ={
    nombre: "Lucas",
    edad: 21,
    ciudad: "Madrid",
    correo: "lucas.timoc@educa.madrid.org",
    numero: 654831905
}
let {nombre, edad} = persona;
console.log(nombre); // Lucas
console.log(edad); // 21
console.log("-------------------");

// 4. Desestructuración para extraer dos propiedades de un objeto y asignarlas a nuevas variables
console.log("Ejercicio 4:");
console.log("-------------------");
let {nombre: nuevoNombre, edad: nuevaEdad} = persona;
console.log(nuevoNombre); // Lucas
console.log(nuevaEdad); // 21
console.log("-------------------");

// 5. Desestructuración para extraer dos propiedades de un objeto anidado
console.log("Ejercicio 5:");
console.log("-------------------");

let persona2 ={
    nombre: "Eidan",
    edad: 19,
    direccion: {
        pueblo: "Torres de la Alameda",
        pais: "España"
    }
}
let direccion = {pueblo, pais} = persona2.direccion;
console.log(pueblo); // Torres de la Alameda
console.log(pais); // España
console.log("-------------------");

// 6. Propagación para combinar dos arrays en uno nuevo
console.log("Ejercicio 6:");
console.log("-------------------");
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinadoArray = [...array1, ...array2];
console.log(combinadoArray); // [1, 2, 3, 4, 5, 6]
console.log("-------------------");

// 7. Propagación para crear una copia de un array
console.log("Ejercicio 7:");
console.log("-------------------");
let copiaArray = [...miArray];
console.log(copiaArray); // [10, 20, 30, 40, 50]
console.log("-------------------");

// 8. Propagación para combinar dos objetos en uno nuevo
console.log("Ejercicio 8:");
console.log("-------------------");
let objeto1 = {a: 1, b: 2};
let objeto2 = {c: 3, d: 4};
let combinadoObjeto ={ objeto1,...objeto2}
console.log(combinadoObjeto); // {a: 1, b: 2, c: 3, d: 4}
console.log("-------------------");

// 9. Propagación para crear una copia de un objeto
console.log("Ejercicio 9:");
console.log("-------------------");
let copiaObjeto ={...persona};
console.log(copiaObjeto); // {nombre: "Lucas", edad: 21, ciudad: "Madrid", correo: "lucas.timoc@educa.madrid.org", numero: 654831905}
console.log("-------------------");

// 10. Combina desestructuración y propagación
console.log("Ejercicio 10:");
console.log("-------------------");
let {ciudad, correo} = persona;
let nuevoObjeto = {pais: "España", ...persona};
console.log(nuevoObjeto); // {pais: "España", nombre: "Lucas", edad: 21, ciudad: "Madrid", correo: "lucas.timoc@educa.madrid.org", numero: 654831905}
console.log("-------------------");
