//Variables:
var contador = 0;
var finalizar = false;

//Programa:
async function working() {
    console.log("Esto se ejecuta al inicio.");
    //Bucle:
    do {
        await promesa();
    } while (finalizar == false);
    resultado();
}

async function promesa() {
    return new Promise(function(resolve, reject) {
        contador++;
        console.log(`Proceso ${contador}`);
        if (contador >= 5) {
            finalizar = true;
            resolve();
        } else {
            resolve();
        }
    });
}

async function resultado() {
    console.log("Esto de ejecuta la final.");
}

//Inicia el trabajo:
working();