"use strict";

class TramitarPedido {

    constructor() {
        this.formulario = document.querySelector("form[name='reserva']");
        this.boton = document.getElementById("grabar");
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
        this.formulario = document.querySelector("form[name='reserva']");
        let valido = this.formulario.checkValidity();
        if (valido) {
            let datosUser = {
                "nombre": this.formulario.nombre.value,
                "apellidos": this.formulario.apellidos.value,
                "email": this.formulario.email.value
            };
            datosUser = JSON.stringify(datosUser);
            let pedido = sessionStorage.getItem("pedido");

            $.ajax({
                url: "../php/tramitarPedido.php",
                type: "POST",
                data: {"datosUser": datosUser, "pedido": pedido},
                dataType: "json",
                success: function (data) {
                    alert(data);
                    location.replace("../index.html");
                },
                error: function () {
                    alert("Se ha producido un error al grabar su pedido por favor intĂ©ntolo mas tarde.");
                }
            });
        }
    }

    resetear() {
        this.formulario = document.querySelector("form[name='reserva']");
        this.formulario.reset();
        this.boton = document.getElementById("grabar");
        this.boton.click();
    }
}

let tramitarPedido = new TramitarPedido();