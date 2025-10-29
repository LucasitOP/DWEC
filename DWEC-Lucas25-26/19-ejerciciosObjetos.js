// 1. Crea un objeto con 3 propiedades

// 2. Accede y muestra su valor

// 3. Agrega una nueva propiedad

// 4. Elimina una de las 3 primeras propiedades

// 5. Agrega una función e invócala

// 6. Itera las propiedades del objeto

// 7. Crea un objeto anidado

// 8. Accede y muestra el valor de las propiedades anidadas

// 9. Comprueba si los dos objetos creados son iguales

// 10. Comprueba si dos propiedades diferentes son iguales

let Objeto ={
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
};

console.log (``+Objeto.propiedad1);

Objeto.propiedad4= "valor4";
//
//delete Objeto.propiedad1;
//delete Objeto.propiedad2;
//delete Objeto.propiedad3;

Objeto.miFuncion = function() {
    for (let valor in Objeto) {
    console.log(valor+ ": "+Objeto[valor]);
}
}
Objeto.miFuncion();

for (let valor in Objeto) {
    console.log(valor+ ": "+Objeto[valor]);
}

Objeto.anidado={
    subpropiedad1: "subvalor1",
    subpropiedad2: "subvalor2"
};

console.log(Objeto.anidado.subpropiedad1);

console.log(Objeto === Objeto.anidado); // false

console.log(Objeto.propiedad4 === Objeto.anidado.subpropiedad1); // false