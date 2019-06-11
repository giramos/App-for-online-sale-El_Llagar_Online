"use strict";

// OOP - Paradigma Orientado a Objetos

class Formulario2 {

    constructor() {
        this.formulario2 = document.querySelector("form[name='formulario2']");
        this.boton2 = document.getElementById("enviar2");
        this.botonBorrar2 = document.getElementById("borrar2");
        this.formulario2.addEventListener("invalid", this.validar2, true);
        this.formulario2.addEventListener("input", this.comprobar2);
        this.boton2.addEventListener("click", this.enviar2);
        this.botonBorrar.addEventListener("click", this.borrar2);
    }
    //function enviar() {
    enviar2() {
        this.formulario2 = document.querySelector("form[name='formulario2']");
        let valido2 = this.formulario2.checkValidity();
        if (valido2) {
            this.formulario2.submit();//Envia la informacion, se podría haber modificado el type 
            // en vez de button directamente submit. Lo mismo pasa a continuacion con reset
        }
    }
    //function borrar() {
    borrar2() {
        this.formulario2 = document.querySelector("form[name='formulario2']");
        this.formulario2.reset();//borra la informacion
        this.boton2 = document.getElementById("enviar2");
        this.boton2.click();
    }
    //function validar() {
    validar2(evento2) {
        //nombreF=formulario.nombre.value;
        //if ( nombreF ==' ') {
        //  alert('Es obligatorio el nombre');}
        var elemento2 = evento2.target;
        //devuelve el elemento que desencadenó el evento
        elemento2.style.background = "#ff207a"; //color para que cuando se borre o aparezca mal el formato
    }
    //function comprobar() {
    comprobar2(evento2) {
        var elemento2 = evento2.target;
        //devuelve el elemento que desencadenó el evento  
        if (elemento2.validity.valid) {
            elemento2.style.background = "#78ff1f";//color para confirmar que el formato es bueno
        } else {
            elemento2.style.background = "#ff207a";//color para que cuando se borre o aparezca mal el formato
        }
    }

}
var formulario2 = new Formulario2();