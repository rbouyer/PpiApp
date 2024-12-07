
export function evaluaExamen(noRecolectado, fechaEx){
    // TODO: Validar fecha examen menor a 3 meses
    var res = "VE_NO_VAL";

    console.info("noRecolectado" + noRecolectado + "fechaEx: " + fechaEx);
    
    if(noRecolectado)
        res = "VE_NO_REC";
    else
        if(fechaEx) res = "VE_SI_VAL";

    return res;
}