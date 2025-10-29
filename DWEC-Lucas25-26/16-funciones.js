function miFuncion(){
    console.log("Hola, soy una función");
}
for (let i=0;i<5;i++){
    miFuncion();
}


function miFuncionConParametros(a,b){
    console.log("Hola, soy una función con parámetros",a,b);
}
miFuncionConParametros(3,5);

// Funciones anónimas

 const miFuncionAnonima=function(nombre){
    console.log(`Hola ${nombre}`)   
}
miFuncionAnonima("Ana");

//Arrow functions (También son funciones anónimas)

const miFuncionFlecha=(nombre)=>{
    console.log(`Hola ${nombre} desde una función flecha`)
}
miFuncionFlecha("Luis");

const miArroyFuncion2 = nombre => console.log(`Hola ${nombre} desde una función flecha simplificada`);
miArroyFuncion2("Marta");

//Funciones con retorno
function suma(a,b){
    return a+b;
}
let resultado=suma(3,7);

console.log(resultado);


// Funciones con retorno y sin retorno
function resta(a,b){
    console.log(a-b);
}
resta (10,4);
let resultadoResta=resta(10,4);
console.log(resultadoResta); //undefined
//Funciones de orden superior

function logicaGeneral(cliente){
         
}