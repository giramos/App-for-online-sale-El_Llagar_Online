//Paradigma funcional
function funcionReloj() {
    var momentoActual = new Date();//Creo la hora
    var horaActual = momentoActual.getHours();
    var minutoActual = momentoActual.getMinutes();
    var segundoActual = momentoActual.getSeconds();
    
    var hora = document.getElementById('hora');
    var minutos = document.getElementById('minutos');//Identificadores 
    var segundos = document.getElementById('segundos');

    var segundoActualGrados = segundoActual * 6 + "deg";//(6deg cada segundo, 6*6=360º)
    var horaActualGrados = horaActual * 30 + "deg";//(30deg cada hora, 30*12=360º)
    var minutoActualGrados = minutoActual * 6 + "deg";//(6deg cada minuto, 6*6=360º)

    function cambiarSegundos() {
        segundos.style.transform = "rotate(" + segundoActualGrados + ")";//Calcular grados cada segundo 
    }

    function cambiarHora() {
        hora.style.transform = "rotate(" + horaActualGrados + ")";//Calcular grados por hora 
        minutos.style.transform = "rotate(" + minutoActualGrados + ")";//Calculo grados cada minuto 
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