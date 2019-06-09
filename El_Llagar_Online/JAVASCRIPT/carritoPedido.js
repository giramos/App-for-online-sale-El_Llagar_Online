"use strict";

// OOP - Paradigma Orientado a Objetos

class CarritoPedido {

    constructor() {
        this.variables = [];
        this.dinero = 0;
    }

    actualizar(nombre, precio) {
        var carro = document.getElementById("carro");
        carro.removeAttribute("hidden");
        var celda = carro.insertRow(1);
        var nombreCelda = celda.insertCell(0);
        var precioCelda = celda.insertCell(1);
        nombreCelda.innerText = nombre;
        precioCelda.innerText = precio;
    }

    añadir(nombre, precio) {
        this.variables.push({ nombre: nombre, precio: precio });
        this.actualizar(nombre, precio);
        this.calcularTotal(precio);
        this.habilitar();
    }

    calcularTotal(precio) {
        var total = document.getElementById("total");
        total.removeAttribute("hidden");
        this.dinero += parseInt(precio);
        total.innerText = "Total del pedido (en euros): " + this.dinero + "€";
    }

    habilitar() {
        var tramitar = document.getElementById("pedido");
        tramitar.removeAttribute("hidden");
    }

    getElementos() {
        return JSON.stringify(this.variables);
    }

    guardar() {
        sessionStorage.setItem("pedido", this.getElementos());
        location.replace("../HTML/formalizarPedido.html");
    }

    borrar() {
        sessionStorage.clear();
    }

}

var carrito = new CarritoPedido();
carrito.borrar();