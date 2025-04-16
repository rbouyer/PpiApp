import {calculaDifMeses, evaluaEsMenor} from './DateHelper.js'

export function evaluaExamen(noRecolectado, fechaEx){
    // TODO: Validar fecha examen menor a 3 meses
    var res = "VE_NO_VAL";

    console.log("evaluaExamen(noRecolectado: " + noRecolectado + ", fechaEx: " + fechaEx);
    
    if(fechaEx){
        console.log('fecha valida');
        if(noRecolectado)
            res = "VE_NO_REC";
        else
            res = evaluaEsMenor(fechaEx, new Date(), -3) ? "VE_SI_VAL": "VE_NO_VAL";
    } else
        res = "VE_NO_VAL";

    console.log("Res: " + res);

    return res;
}