"use strict";

class Carrito {

    constructor() {
        this.elementos = [];
        this.totalPagar = 0;
    }

    actualizarCarro(nombre, precio) {
        let carroCompra = document.getElementById("carroCompra");

        carroCompra.removeAttribute("hidden");

        let row = carroCompra.insertRow(1);

        let nombreCell = row.insertCell(0);
        let precioCell = row.insertCell(1);

        nombreCell.innerText = nombre;
        precioCell.innerText = precio;
        
    }

    addElemento(nombre, precio) {
        this.elementos.push({nombre: nombre, precio: precio});
        this.actualizarCarro(nombre, precio);
        this.calcularTotalPagar(precio);
        this.habilitarTramitarPedido();
    }

    calcularTotalPagar(precio) {
        let total = document.getElementById("total");

        total.removeAttribute("hidden");
        this.totalPagar += parseInt(precio);
        total.innerText = "Total Pagar: " + this.totalPagar + "€";
    }

    habilitarTramitarPedido() {
        let tramitar = document.getElementById("pedido");

        tramitar.removeAttribute("hidden");
    }

    getElementos() {
        return JSON.stringify(this.elementos);
    }

    guardarPedido() {
        sessionStorage.setItem("pedido", this.getElementos());

        location.replace("../HTML/formalizarPedido.html");
    }

    borrarPedido() {
        sessionStorage.clear();
    }

}

let carrito = new Carrito();
carrito.borrarPedido();