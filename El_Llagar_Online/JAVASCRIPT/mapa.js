"use strict";

class Mapa {
    constructor() {
        this.datos = new Map();
        this.inicializar();
        let tamano = $(window).height() - $("a").outerHeight(true) - $("footer").outerHeight(true);
        $("main").css("height", "" + tamano + "px");
    }

    inicializar() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.obtener, this.errores);
        } else {
            alert("Geolocación no es soportada por navegador.");
        }
    }

    obtener(posicion) {
        let coordenadas = posicion.coords;
        mapa.datos.set('Latitud', coordenadas.latitude);
        mapa.datos.set('Longitud', coordenadas.longitude);
        mapa.mostrar();
    }

    mostrar() {
        let localizacion = {
            lat: this.datos.get("Latitud"),
            lng: this.datos.get("Longitud")
        };
        let map = new google.maps.Map(document.getElementsByTagName('main')[0], {
            zoom: 15,
            center: localizacion
        });

        let infoWindow = new google.maps.InfoWindow({map: map});
        infoWindow.setPosition(localizacion);
        infoWindow.setContent('Ubucacion actual');


        let marker = new google.maps.Marker({
            position: localizacion,
            title: "Posición actual",
            map: map
        });

        let marcadores = [
            ['Pizzeria: Uniovi EII', 43.354762, -5.851274],
            ['Pizzeria: M. Fontan', 43.360299, -5.845672],
            ['Pizzeria: P. San Francisco', 43.361734, -5.850688]
        ];

        let i;
        for (i = 0; i < marcadores.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
                title: marcadores[i][0],
                map: map
            });
        }

    }

    errores(error) {
        let marcadores = [
            ['Pizzeria: Uniovi EII', 43.354762, -5.851274],
            ['Pizzeria: M. Fontan', 43.360299, -5.845672],
            ['Pizzeria: P. San Francisco', 43.361734, -5.850688]
        ];

        let map = new google.maps.Map(document.getElementsByTagName('main')[0], {
            zoom: 15,
            center: new google.maps.LatLng(marcadores[0][1], marcadores[0][2])
        });

        let i, marker;
        for (i = 0; i < marcadores.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
                title: marcadores[i][0],
                map: map
            });
        }

        console.log('Error: ' + error.message);
    }

}

let mapa = new Mapa();