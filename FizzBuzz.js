// Imprimir los numero del 1 al 100 FizzBuzz
function count() {

count = 1;

while (count <= 100) {

    if (count%2 == 0) {
        console.log("Fizz con el: " + count);
    }
    
    if (count%5 == 0) {
        console.log("Buzz con el: " + count);
    }

    if (count%2 == 0 && count%5 == 0) {
        console.log("FizzBuzz con el: " + count);
    }

    count = count + 1;
}

}

let contar = count();

console.log(contar);


// piedraPapelTijera

function piedraPapelTijera() {

    var usuario = prompt("Ingresa uno de estos valores:\n1-Piedra\n2-Papel\n3-Tijera.\nIngresa solo el numero.");

console.log("El numero del usuario es " + usuario);

var pieda = 1;
var papel = 2;
var tijera = 3;

function getRandom() {
    return Math.random();
  }

var redondo = Math.ceil(getRandom() * 3)
console.log("El numero de la maquina es " + redondo);

function jugamos() {

    if(usuario == redondo) {
        
        var res = "Hay empate"
    } else if (usuario >= redondo) {
        
        var res = "Gano usuario"
    } else {
        
        var res = "Gano La maquina"
    }

    return res
}

var resultadoJuego = jugamos()
document.getElementById("demo").innerHTML = resultadoJuego;
return resultadoJuego;

}

let darResultadoJuego = piedraPapelTijera();

console.log(darResultadoJuego);
