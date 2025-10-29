let miArray = [1, 2, 3, 4, 5];

let miValor = miArray[0];
console.log(miValor); 

let persona = {
    nombre: "Aitor",
    edad : 19,
    trabajo: "Desarrollador"
}
let miNombre = persona.nombre;
console.log(miNombre);

// Desestructuración de arrays
let [miValor0, miValor1, miValor2, miValor3] = miArray
console.log(miValor0);
console.log(miValor1);
console.log(miValor2);
console.log(miValor3);

// Desestructuración arrays con valores predeterminados
let [miValor4=0, miValor5=0, miValor6=0, miValor7=0, miValor8=0, miValor9=0] = miArray
console.log(miValor4);
console.log(miValor5);
console.log(miValor6);
console.log(miValor7);
console.log(miValor8); 

// Ignorar elemento arrays
let [ miValor10, , , miValor11] = miArray
console.log(miValor10);
console.log(miValor11);

// Desestructuración de objetos
let {nombre, edad, trabajo} = persona
console.log(nombre);
console.log(edad);
console.log(trabajo);

//Simtaxis objetos con valores predeterminados
let {nombre2, edad2, trabajo2, email = "Sin email"} = persona
console.log(nombre2);
console.log(edad2);
console.log(trabajo2);
console.log(email);

// Sintaxis objetos variables con nuevos nombres de variables
let {nombre: miNombre2, edad: miEdad2, trabajo: miTrabajo2, email: miEmail ="Sin email"} = persona
console.log(miNombre2);
console.log(miEdad2);
console.log(miTrabajo2);
console.log(miEmail);

// Objetos anidados
let persona2 = {
    nombre: "Maria",
    edad: 19,
    trabajo: {
        nombre: "Diseñadora",
        experiencia: 2
    }
}

let {nombre: miNombre3,edad:miEdad3, trabajo: {nombre: miTrabajo3, experiencia: miExperiencia3}} = persona2
console.log(miNombre3);
console.log(miEdad3);
console.log(miTrabajo3);
console.log(miExperiencia3);

// Propagacion(Spreading) de arrays
let array1 = [...miArray,6,7];
console.log(array1);

// Copiar arrays
let array2 = [...miArray];
console.log(miArray);

// Combinacion de arrays
let array3 = [...miArray, ...array1];
console.log(array3);

// Propagacion(Spreading) de objetos
let persona3 = {...persona, email: "gmail.com"};
console.log(persona3);

// Copiar objetos
let persona4 = {...persona};
console.log(persona4);