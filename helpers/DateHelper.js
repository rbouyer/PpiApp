

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