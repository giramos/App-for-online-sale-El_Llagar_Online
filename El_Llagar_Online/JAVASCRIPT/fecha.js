const reloj = {
    //array meses
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        //array días
    dayNames: [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    interval: null, 
    newDate: null,
    dateDom:null,

    init: function () {
        var self = this;
        this.newDate = new Date();// Crrea hora
        this.dateDom = $('#date');
        this.interval = setInterval(function () {
            self.intervalCallback.apply(self);
        }, 1000);//intervalo de tiempo, que repite la ejecución de la función continuamente
    },

    updateDom: function () {//actualizar  objeto DOM
        this.dateDom.text(this.dayNames[this.newDate.getDay()] + " " + this.newDate.getDate()
            + ' ' + this.monthNames[this.newDate.getMonth()] + ' ' + this.newDate.getFullYear());
    },

    intervalCallback: function () {//llamada continuada / actualiza y da la fecha
        this.newDate.setDate(this.newDate.getDate());
      this.updateDom();
    }
};

$(document).ready(function () {
    reloj.init();
});