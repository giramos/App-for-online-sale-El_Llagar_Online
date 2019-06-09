"use strict";

class Mapa {
    constructor() {
        this.datos = new Map();
        this.inicializar();
        var tamano = $(window).height() - $("a").outerHeight(true) - $("footer").outerHeight(true);
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
        var coordenadas = posicion.coords;
        mapa.datos.set('Latitud', coordenadas.latitude);
        mapa.datos.set('Longitud', coordenadas.longitude);
        mapa.mostrar();
    }

    mostrar() {
        var localizacion = {
            lat: this.datos.get("Latitud"),
            lng: this.datos.get("Longitud")
        };
        var mapaOpciones = new google.maps.Map(document.getElementsByTagName('main')[0], {
            zoom: 12,
            center: localizacion,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        });

        var infoWindow = new google.maps.InfoWindow({mapaOpciones: mapaOpciones});
        infoWindow.setPosition(localizacion);
        infoWindow.setContent('Usted está aquí');


        var marker = new google.maps.Marker({
            position: localizacion,
            title: "Posición actual",
            mapaOpciones: mapaOpciones
        });
        //Array para guardar los marcadores
        var marcadores = [
            ['El Llagar, Gascona 29: Uniovi EII', 43.354762, -5.851274],
            ['El Llagar Online, El Paraguas s/n', 43.360859, -5.842452],
            ['El Llagar Online, Mon 16-26', 43.361240, -5.843515],
            ['El Llagar Online, Galicia 3', 43.361582, -5.854015],
            ['El Llagar Online, Monumentos 40B', 43.371686, -5.859772]
        ];

        
        //Añade los marcadores y lo almacena en el array
        for (var i = 0; i < marcadores.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
                title: marcadores[i][0],
                mapaOpciones: mapaOpciones
            });
        }

    }

    errores(error) {
        //Array para guardar los marcadores
        var marcadores = [
            ['El Llagar, Gascona 29: Uniovi EII', 43.354762, -5.851274],
            ['El Llagar Online, El Paraguas s/n', 43.360859, -5.842452],
            ['El Llagar Online, Mon 16-26', 43.361240, -5.843515],
            ['El Llagar Online, Galicia 3', 43.361582, -5.854015],
            ['El Llagar Online, Monumentos 40B', 43.371686, -5.859772]
        ];

        var mapaOpciones = new google.maps.Map(document.getElementsByTagName('main')[0], {
            zoom: 12,
            center: new google.maps.LatLng(marcadores[0][1], marcadores[0][2]),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        });

        
        for (var i = 0; i < marcadores.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
                title: marcadores[i][0],
                mapaOpciones: mapaOpciones
            });
        }

        console.log('Error: ' + error.message);
    }

}

var mapa = new Mapa();