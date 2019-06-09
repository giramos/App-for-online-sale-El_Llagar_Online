"use strict";

class FormularioContacto {
    constructor() {
        this.formulario = document.querySelector("form[name='contacto']");
        this.boton = document.getElementById("enviar");
        this.botonBorrar = document.getElementById("borrar");

        this.botonBorrar.addEventListener("click", this.resetear);
        this.boton.addEventListener("click", this.enviarFormulario);
        this.formulario.addEventListener("invalid", this.validacion, true);
        this.formulario.addEventListener("input", this.comprobar);
    }

    validacion(evento) {
        let elemento = evento.target;
        elemento.style.background = "#FFDDDD";
    }

    comprobar(evento) {
        let elemento = evento.target;
        if (elemento.validity.valid) {
            elemento.style.background = "#3ADF00";
        } else {
            elemento.style.background = "#FFDDDD";
        }
    }

    enviarFormulario() {
        this.formulario = document.querySelector("form[name='contacto']");
        let valido = this.formulario.checkValidity();
        if (valido) {
            this.formulario.submit();//Envia la informacion
        }
    }

    resetear() {
        this.formulario = document.querySelector("form[name='contacto']");
        this.formulario.reset();//borra la informacion
        this.boton = document.getElementById("enviar");
        this.boton.click();
    }

}

var formulario = new FormularioContacto();