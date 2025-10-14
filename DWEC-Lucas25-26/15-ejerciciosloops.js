// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
let listatring20=[];
for(var i=1;i<=20;i++){
    listatring20.push(i);
}
console.log(listatring20.toString());
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma=0;
do{
    suma+=i;
    i++;
}while(i<=100);
console.log(suma);
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let pares=[];
for(i=0;i<=50;i+=2){
    if(i==0){
        continue;
    }
pares.push(i);
}
console.log(pares.toString());

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres=["Ana","Luis","Carlos","Marta"];
for(i=0;i<nombres.length;i++){
    console.log(nombres[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena="Hola, ¿cómo estás?";
let contadorVocales=0;
for(i=0;i<cadena.length;i++){
    let letra=cadena[i].toLowerCase();
    if("aeiouáéíóúü".includes(letra)){
        contadorVocales++;
    }
}
console.log(contadorVocales);


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let arraynumeros=[1,2,3,4,5];
let producto=1;
for (i=0;i<arraynumeros.length;i++){
    producto*=arraynumeros[i];
}
console.log(producto);


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let tabla5=[];
for(i=1;i<=10;i++){
console.log("5 x "+i+" = "+(5*i));

}


// 8. Usa un bucle para invertir una cadena de texto
let cadena2="Hola Mundo";
let cadenaInvertida="";
for(i=cadena2.length-1;i>=0;i--){
    cadenaInvertida+=cadena2[i];
}
console.log(cadenaInvertida);   
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibo=[0,1];
for(i=2;i<10;i++){ //Se empieza en 2 porque los dos primeros ya los tenemos
    fibo[i]=fibo[i-1]+fibo[i-2]; //Guardamos la suma de los dos anteriores 
}
console.log(fibo.toString());

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numeros=[5,12,8,20,3,15];
let mayoresA10=[];
for(i=0;i<numeros.length;i++){
    if(numeros[i]>10){
        mayoresA10.push(numeros[i]);
    }
}
console.log(mayoresA10.toString());

