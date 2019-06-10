"use strict";

// OOP - Paradigma Orientado a Objetos
class Pedido {

    constructor() {
        this.formulario = document.querySelector("form[name='tramitar']");
        this.boton = document.getElementById("enviar");
        this.botonBorrar = document.getElementById("borrar");
        this.botonBorrar.addEventListener("click", this.resetear);
        this.boton.addEventListener("click", this.enviarFormulario);
        this.formulario.addEventListener("invalid", this.validacion, true);
        this.formulario.addEventListener("input", this.comprobar);
    }
    //function validacion(evento)
    validacion(evento) {
        var elemento = evento.target;
        elemento.style.background = "#ff207a";
    }
    //function  comprobar(evento)
    comprobar(evento) {
        var elemento = evento.target;
        if (elemento.validity.valid) {
            elemento.style.background = "#78ff1f";
        } else {
            elemento.style.background = "#ff207a";
        }
    }
//function enviarFormulario()
    enviarFormulario() {
        this.formulario = document.querySelector("form[name='tramitar']");
        var valido = this.formulario.checkValidity();
        if (valido) {
            let datosUser = {
                "nombre": this.formulario.nombre.value,
                "apellidos": this.formulario.apellidos.value,
                "email": this.formulario.email.value
            };
            datosUser = JSON.stringify(datosUser);
            var pedido = sessionStorage.getItem("pedido");

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
//function resetear()
    resetear() {
        this.formulario = document.querySelector("form[name='tramitar']");
        this.formulario.reset();
        this.boton = document.getElementById("enviar");
        this.boton.click();
    }
}
// creamos el pedido
var tramitarPedido = new Pedido();