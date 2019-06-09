"use strict";

// OOP - Paradigma Orientado a Objetos

class Formulario {

    constructor() {
        this.formulario = document.querySelector("form[name='formulario']");
        this.boton = document.getElementById("enviar");
        this.botonBorrar = document.getElementById("borrar");
        this.formulario.addEventListener("invalid", this.validar, true);
        this.formulario.addEventListener("input", this.comprobar);
        this.boton.addEventListener("click", this.enviar);
        this.botonBorrar.addEventListener("click", this.borrar);
    }
    //function enviar() {
    enviar() {
        this.formulario = document.querySelector("form[name='formulario']");
        let valido = this.formulario.checkValidity();
        if (valido) {
            this.formulario.submit();//Envia la informacion, se podría haber modificado el type 
            // en vez de button directamente submit. Lo mismo pasa a continuacion con reset
        }
    }
    //function borrar() {
    borrar() {
        this.formulario = document.querySelector("form[name='formulario']");
        this.formulario.reset();//borra la informacion
        this.boton = document.getElementById("enviar");
        this.boton.click();
    }
    //function validar() {
    validar(evento) {
        //nombreF=formulario.nombre.value;
        //if ( nombreF ==' ') {
        //  alert('Es obligatorio el nombre');}
        var elemento = evento.target;
        //devuelve el elemento que desencadenó el evento
        elemento.style.background = "#e5b0c8"; //color para que cuando se borre o aparezca mal el formato
    }
    //function comprobar() {
    comprobar(evento) {
        var elemento = evento.target;
        //devuelve el elemento que desencadenó el evento  
        if (elemento.validity.valid) {
            elemento.style.background = "#c3f4eb";//color para confirmar que el formato es bueno
        } else {
            elemento.style.background = "#e5b0c8";//color para que cuando se borre o aparezca mal el formato
        }
    }

}
var formulario = new Formulario();