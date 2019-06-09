"use strict";

class Mapa {
    constructor() {
        this.datos = new Map();
        navigator.geolocation.getCurrentPosition(this.obtener, this.errores);
    }

    obtener(posicion) {
        mapa.datos.set('Latitud', posicion.coords.latitude);
        mapa.datos.set('Longitud', posicion.coords.longitude);
        mapa.mostrar();
    }
        

    mostrar() {
        var localizacion = {
            lat: this.datos.get("Latitud"),
            lng: this.datos.get("Longitud")
        };
        var mapaOpciones = new google.maps.Map(document.getElementsByTagName('main')[0], {
            zoom: 12, //Tamaño del mapa en pixeles (obligatorio)
            center: localizacion,
            mapTypeId: google.maps.MapTypeId.TERRAIN// se ve relieve
            //mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var infoWindow = new google.maps.InfoWindow({ map: mapaOpciones });
        infoWindow.setPosition(localizacion);
        infoWindow.setContent('Usted está aquí');

        var marker = new google.maps.Marker({
            position: localizacion,
            title: "Lugar donde se encuentra actualmente",
            map: mapaOpciones
        });
        //Array para guardar los marcadores
        var marcadores = [
            ['El Llagar, Gascona 29: Uniovi EII', 43.354762, -5.851274],
            ['El Llagar Online, El Paraguas s/n', 43.360859, -5.842452],
            ['El Llagar Online, Mon 16-26', 43.361240, -5.843515],
            ['El Llagar Online, Galicia 3', 43.361582, -5.854015],
            ['El Llagar Online, Monumentos 40B', 43.371686, -5.859772]
        ];

        for (var i = 0; i < marcadores.length; i++) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]),
                title: marcadores[i][0],
                map: mapaOpciones
            });
            
        }
        
    }
    errores(error) {
        alert('Error: ' + error.code + ' ' + error.message);
    }
}
var mapa = new Mapa();