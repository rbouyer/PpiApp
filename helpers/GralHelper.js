import {saveObjectState} from './FSHelper';


export function calculaIMC(peso, talla) {
    //console.info('calculaIMC(' + peso + ', ' + talla + ')');

    return !isNaN(peso) && !isNaN(talla) && talla > 0.0? roundToTwo(peso / (talla * talla)): 0.00;
}

export function buscaEnArreglo(nameKey, myArray){
    for (let i=0; i < myArray.length; i++) {
        if (myArray[i].value === nameKey) {
            return myArray[i].label;
        }
    }
}

export function buscaEnLista(list, where){

    //console.info("buscaEnLista: list: " + JSON.stringify(list, null, 2), ", where: " + where);

    for (var i in list) {
        //console.info(JSON.stringify(list[i], null, 2));
        if (list[i].value == where) {
            return list[i];
        }
    }
    return null;
}

export function roundToTwo(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }


export async function handleNextScreen(navigation, nextScreen, formData){
    const idVisita = formData.data.idVisita;
    console.info("handleNextScreen: nextScreen: " + nextScreen + ", formData: " + JSON.stringify(formData, null, 2));
    await saveObjectState( idVisita, formData );
    console.info("handleNextScreen: formData saved for idVisita: " + idVisita);
    navigation.navigate(nextScreen, formData );
}
