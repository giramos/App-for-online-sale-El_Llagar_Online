const reloj = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    dayNames: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    interval: null,
    dateDom: null,
    newDate: null,
    hoursDom: null,
    minutesDom: null,
    secondsDom: null,

    init: function () {
        let self = this;

        this.newDate = new Date();
        this.dateDom = $('#date');
        this.hoursDom = $('#hours');
        this.minutesDom = $('#minutes');
        this.secondsDom = $('#seconds');
        this.interval = setInterval(function () {
            self.intervalCallback.apply(self);
        }, 1000);

    },

    toDoubleDigit: function (num) {
        if (num < 10) {
            return "0" + parseInt(num, 10);
        }
        return num;
    },

    updateDom: function () {
        this.dateDom.text(this.dayNames[this.newDate.getDay()] + " " + this.newDate.getDate()
            + ' ' + this.monthNames[this.newDate.getMonth()] + ' ' + this.newDate.getFullYear());
        this.hoursDom.text(this.toDoubleDigit(this.hours));
        this.minutesDom.text(this.toDoubleDigit(this.minutes));
        this.secondsDom.text(this.toDoubleDigit(this.seconds));
    },

    intervalCallback: function () {
        this.newDate.setDate(this.newDate.getDate());
        this.hours = new Date().getHours();
        this.minutes = new Date().getMinutes();
        this.seconds = new Date().getSeconds();
        this.updateDom();
    }

};

$(document).ready(function () {
    reloj.init();
});