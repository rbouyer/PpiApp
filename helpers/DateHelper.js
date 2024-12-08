

export function calculaAnos(meses) {
    console.info('calculaMeses(' + JSON.stringify(meses, null, 2) + ')');

    return !isNaN(meses)? meses / 12: 0;
}

export function calculaEdad(fechaNacimiento) {
    var now = new Date();
    var current_year = now.getFullYear();
    var year_diff = current_year - fechaNacimiento.getFullYear();
    var birthday_this_year = new Date(current_year, fechaNacimiento.getMonth(), fechaNacimiento.getDate());
    var has_had_birthday_this_year = (now >= birthday_this_year);

    return has_had_birthday_this_year
        ? year_diff
        : year_diff - 1;
}

/* Calcula la diferencia en meses entre dos fechas
    Se asume from < to
    *** MESES NUMERICOS - NO ES MES CALENDARIO *** 
    */
export function calculaDifMeses(from, to) {
    var months = to.getMonth() - from.getMonth() 
    + (12 * (to.getFullYear() - from.getFullYear()));

    if(to.getDate() < from.getDate()){
        months--;
    }

    console.info("calculaDifMeses: " + months);
return months;
}

/*
 * Entrega true si to - from < meses => to < from + meses
*/
export function evaluaEsMenor(from, to, meses){
    res = addMonths(to, meses) < from;

    return res;
}

export function addMonths(fecha, meses){
    var diaI = fecha.getDate();
    var mesI = fecha.getMonth() + 1; //mes base 0
    var anoI = fecha.getFullYear();
    var totMes = mesI + (meses % 12);
    var totAno = Math.floor(Math.abs(meses) / 12);
    var diaF = null, mesF = null, anoF = null;
    var res = fecha;

    //console.info("addMonths(fecha = " + fecha, ", meses: " + meses + ")");
    //console.info("diaI: " + diaI + ", mesI: " + mesI + ", anoI: " + anoI, ", totMes: " + totMes + ", totAno: " + totAno);

    if(meses < 0){
        mesF = totMes < 1? 12 + totMes: totMes;
        anoF = totAno + (totMes < 1? anoI - 1: anoI);
    } if(meses > 0){
        mesF = totMes > 12? totMes - 12: totMes;
        anoF = totAno + (totMes > 12? anoI + 1: anoI);
    }
    diaF = diaI > diasEnMes(mesF, anoF)? diasEnMes(mesF, anoF): diaI;

    res = new Date(anoF, mesF - 1, diaF);
    //console.info("res = " + res);

    return res;
}

export function diasEnMes( month, year){
    return daysInMonth( new Date(year, month-1, 1));
}

export function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getFullYear(), 
                    anyDateInMonth.getMonth()+1, 
                    0).getDate();
}