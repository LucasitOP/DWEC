//Bucle for 

for (let i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}

let array=["Pepe","Maria","Juan","Ana"];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}   

//Bucle while

let i;

while(i<array.length){
    console.log(array[i++]);

}

//Bucle do while
let j=0;

do{
    console.log(array[j++]);
}while(j<array.length);

//Bucle for of
for(let nombre of array){
    console.log(nombre);
}

//Conjunto se traga el set
conjunto =new Set(["Pepe","Maria","Juan","Ana"]);
for(let nombre of conjunto){
    console.log(nombre);
}

//Bucle for in
let persona={
    nombre:"Pepe",
    edad:30,
    ciudad:"Madrid"
}
for(let clave in persona){
    console.log(clave+": "+persona[clave]);
}

