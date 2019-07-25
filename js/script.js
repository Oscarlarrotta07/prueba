function siguiente() {
    $('.bienvenida').addClass('inactivo');
    $('.video').addClass('activo');
    $('.btn_siguiente').addClass('inactivo');
    $('.btn_siguiente_video').addClass('activo');
}

function siguienteVideo() {
    var r = confirm("¿Esta seguro de haber visto el video completo?.");
    if (r == true) {
        $('.encuesta').addClass('activo');
        $('.video').removeClass('activo');
        $('.btn_siguiente_video').removeClass('activo');
        $('.finalizar').addClass('activo');
    }
    else {

    }

}

function mensajeDespedida() {
    
    var r = confirm("¿Esta seguro de haber enviado el formulario?.");
    if (r == true) {
        $('.encuesta').removeClass('activo');
    $('.despedida').addClass('activo');
    $('.finalizar').removeClass('activo');
    }
    else {

    }
}
