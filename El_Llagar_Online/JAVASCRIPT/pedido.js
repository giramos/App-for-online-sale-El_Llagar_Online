"use strict";

// OOP - Paradigma Orientado a Objetos
class Pedido {

    constructor() {
        this.formulario = document.querySelector("form[name='tramitar']");
        this.boton = document.getElementById("enviar");
        this.botonBorrar = document.getElementById("borrar");
        this.botonBorrar.addEventListener("click", this.borrar);
        this.boton.addEventListener("click", this.enviar);
        this.formulario.addEventListener("invalid", this.validar, true);
        this.formulario.addEventListener("input", this.comprobar);
    }
      //function enviar()
      enviar() {
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
                data: { "datosUser": datosUser, "pedido": pedido },
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
    borrar() {
        this.formulario = document.querySelector("form[name='tramitar']");
        //borra la informacion
        this.formulario.reset();
        this.boton = document.getElementById("enviar");
        this.boton.click();
    }
    //function validar(evento)
    validar(evento) {
        //nombreF=formulario.nombre.value;
        //if ( nombreF ==' ') {
        //  alert('Es obligatorio el nombre');}
        var elemento = evento.target;
        //devuelve el elemento que desencadenó el evento
        elemento.style.background = "#ff207a";
        //color para que cuando se borre o aparezca mal el formato
    }
    //function  comprobar(evento)
    comprobar(evento) {
        var elemento = evento.target;//devuelve el elemento que desencadenó el evento 
        if (elemento.validity.valid) {
            //color para confirmar que el formato es bueno
            elemento.style.background = "#78ff1f";
        } else {
            //color para que cuando se borre o aparezca mal el formato
            elemento.style.background = "#ff207a";
        }
    }
}
// creamos el pedido
var tramitarPedido = new Pedido();