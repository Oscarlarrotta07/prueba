function siguiente() {
 $('.bienvenida').addClass('inactivo'); 
 $('.encuesta').addClass('activo'); 
 $('.btn_siguiente').addClass('inactivo'); 
 $('.btn_siguiente_video').addClass('activo');
}

function siguienteVideo() {
    $('.encuesta').removeClass('activo');
    $('.video').addClass('activo');
    $('.btn_siguiente_video').removeClass('activo');
    $('.btn_siguiente_2').addClass('activo');

}

function siguientePos() {
    $('.video').removeClass('activo');
    $('.btn_siguiente_2').removeClass('activo');
    $('.encuestaPos').addClass('activo'); 

}