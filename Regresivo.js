//Variables:
var finalizar = false;
var falla = false;

var count = 0;

//Programa
async function working() {

    console.log("Esto se imprime al inicio.");

    Bucle();
}

async function Bucle() {
    //Bucle:
    await promesa();
    if (falla == false) {
        if (finalizar == false) {
            setTimeout(function() { Bucle() }, 1000);
        } else {
            setTimeout(function() { resultado() }, 1000);
        }
    } else {
        console.log('El programa se ha detenido por que se ha detectado un error, vuelva a intentalo.');
    }
}

function promesa() {
    return new Promise(function(resolve, reject) {
        count++
        console.log(`Proceso ${count}`);
        if (count >= 5) {
            finalizar = true;
            resolve();
        } else {
            resolve();
        }
    });
}

//Funcion que se ejecuta el final del programa:
function resultado() {
    console.log("Esto se imprime al final.");
}

//Inicia el trabajo:
working();