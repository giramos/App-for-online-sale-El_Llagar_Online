function funcionReloj() {
    var momentoActual = new Date();
    var horaActual = momentoActual.getHours();
    var minutoActual = momentoActual.getMinutes();
    var segundoActual = momentoActual.getSeconds();

    //Identificadores para elementos
    var hora = document.getElementById('hora');
    var minutos = document.getElementById('minutos');
    var segundos = document.getElementById('segundos');

    function cambiarHora() {
        //Calcular grados por hora (30deg cada hora, 30*12=360º)
        var horaActualGrados = horaActual * 30 + "deg";
        hora.style.transform = "rotate(" + horaActualGrados + ")";

        //Calcular grados cada minuto (6deg cada minuto, 6*6=360º)
        var minutoActualGrados = minutoActual * 6 + "deg";
        minutos.style.transform = "rotate(" + minutoActualGrados + ")";
    }

    function cambiarSegundos() {
        //Calcular grados cada segundo (6deg cada segundo, 6*6=360º)
        var segundoActualGrados = segundoActual * 6 + "deg";
        segundos.style.transform = "rotate(" + segundoActualGrados + ")";
    }

    cambiarHora();
    cambiarSegundos();

    //Actualizar reloj
    setTimeout("funcionReloj()", 1000);

    //Actualizar reloj cada segundo
    //    setTimeout("cambiarSegundos()",1000);

}
window.addEventListener("load", funcionReloj); // con esta funcion En lugar de poner el onLoad en la etiqueta, puedes 
//ponerlo en tu fichero .js como un evento de la ventana. Cuando se cargue la ventana, lanza tu función