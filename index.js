console.log("Hola, este es mi primer ejercicio con Node en el mejor Bootcamp de programación del mundo");

// Ejercicio 2

const datosPersonales = {
    nombre: "Daniel Ferrer Gomez",
    edad: 33,
    desarrollador: false,
    fecha: new Date ( "may 1989 22"),
    libro:{
        titulo: "one piece",
        auto: "eichiro oda",
        fecha: new Date ( "july 1997 22"),
        url: "https://es.wikipedia.org/wiki/One_Piece",

    }

}
console.log(datosPersonales);

//EJERCICIO 3

// Crea los siguientes archivos JS:

// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

for (let i = 0; i<10; i++){
    console.log(i)
}


// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
 var contador = 0;
while (contador < 10){
    contador++
    console.log(contador)
}

// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
contador = 0;
while(true){
    contador ++
    if(contador === 10){
        contador = 0;
        break;
       
    }
   
}

