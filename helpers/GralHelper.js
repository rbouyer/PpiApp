export function calculaIMC(peso, talla) {
    console.info('calculaIMC(' + peso + ', ' + talla + ')');

    return !isNaN(peso) && !isNaN(talla) && talla > 0.0? peso / (talla * talla): 0;
}