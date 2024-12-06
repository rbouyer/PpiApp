export function calculaIMC(peso, talla) {
    console.info('calculaIMC(' + peso + ', ' + talla + ')');

    return !isNaN(peso) && !isNaN(talla) && talla > 0.0? peso / (talla * talla): 0;
}

export function buscaEnArreglo(nameKey, myArray){
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i].value === nameKey) {
            return myArray[i].label;
        }
    }
}