function textoFecha(fecha){

    var numDiaSem = fecha.getDay(); 
  
    
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var diaLetras = diasSemana[fecha.getDay()];   
  
      
    var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var mesLetras = meses[fecha.getMonth()]; 
    
    var diaMes = (fecha.getDate());   
    var anho = fecha.getFullYear();  
    var hora = fecha.getHours();    
    var min = fecha.getMinutes();  

    if ((min >= 0) && (min < 10)) {    //añadde un cero cuando los minutostienen 1 dígito.
      min = "0" + min;
    }

    var devolver = "Hoy es " + diaLetras+ ", " + diaMes + " de " + mesLetras + " de " + anho + " y son las " + hora + ":" + min + " horas.";
    return devolver;
  }
  var fecha = new Date();  
  document.write(textoFecha(fecha));  //Imprimir