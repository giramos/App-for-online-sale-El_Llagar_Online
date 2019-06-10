"use strict";

// OOP - Paradigma Orientado a Objetos

class CarritoPedido {


    //function actualizar(nombre, precio)
    actualizar(nombre, precio) {
        var carro = document.getElementById("carro");
        // Intentar eliminar un atributo que no existe en el elemento no disparará una excepción.
        carro.removeAttribute("hidden");//
        var celda = carro.insertRow(1);//creo un elemento <tr> vacío y lo agrega a una tabla.

        //  inserto una celda en la fila actual.
        var nombreCelda = celda.insertCell(0);
        var precioCelda = celda.insertCell(1);
        nombreCelda.innerText = nombre;
        precioCelda.innerText = precio;
    }

    //function guardar()
    guardar() {
        sessionStorage.setItem("pedido", this.getElementos());
        location.replace("../HTML/tramitarPedido.html");
    }
    //function añadir(nombre, precio)
    añadir(nombre, precio) {
        // Anyadimos el Nodo a nuestro carrito
        this.variables.push({ nombre: nombre, precio: precio });
        this.actualizar(nombre, precio);
        this.calcularTotal(precio);// Calculo el total
        this.habilitar();
    }

    //function habilitar()
    habilitar() {
        var tramitar = document.getElementById("pedido");
        tramitar.removeAttribute("hidden");
    }

    //function borrar()
    borrar() {
        sessionStorage.clear();
    }

    //function getElementos()
    getElementos() {
        // Convierto las "variables" (objetos JavaScript() en una cadena
        return JSON.stringify(this.variables);
    }


    //function calcularTotal(precio)
    calcularTotal(precio) {
        var total = document.getElementById("total");
        total.removeAttribute("hidden");
        this.dinero += parseInt(precio);
        total.innerText = "Total del pedido (en euros): " + this.dinero + "€";
    }

    constructor() {
        this.variables = [];
        this.dinero = 0;
    }

}

var carrito = new CarritoPedido();
carrito.borrar();