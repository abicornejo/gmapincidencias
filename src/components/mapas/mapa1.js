/* eslint-disable no-undef */
import React, {Component} from 'react';
import { GMap } from 'primereact/gmap';
import {Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const fs = require('fs');
const editJsonFile = require("edit-json-file");
const CalcularDistancia =(lat1, lon1, lat2, lon2)=> {
    rad = function (x) {
        return x * Math.PI / 180;
    }

    var R = 6378.137;//Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(3);//Retorna tres decimales
}

const getDistanciaMetros =(lat1,lon1,lat2,lon2)=>
{
  rad = function(x) {return x*Math.PI/180;}
  var R = 6378.137; //Radio de la tierra en km 
  var dLat = rad( lat2 - lat1 );
  var dLong = rad( lon2 - lon1 );
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * 
  Math.cos(rad(lat2)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  //aquí obtienes la distancia en metros por la conversion 1Km =1000m
  var d = R * c * 1000; 
  return d ; 
}


export class Mapa1 extends Component {  

    constructor() {
        super();
        this.state = {
           currentLatitud :0,
           currentLongitud : 0,
           currentGeolocalization : false,
           overlays: [],
            json: {
                "columns": ["Unnamed: 0","ALCOHOL", "AMBULANCIA", "ANIMAL", "ANO", 
                            "ARBOL", "BICICLETA", "CALLE", "CARTODB_ID", "CAUSA_SINIESTRO", 
                            "CIUDAD", "CODIGO_POSTAL", "COLONIA", "COLOR", "CONDUCTOR_DISTRAIDO", 
                            "DANO_NUMERO", "DIA", "DIA_NUMERO", "DORMIDO", "EDAD_LESIONADO", 
                            "ESTADO", "EXPLOSION_LLANTA", "FALLECIDO", "FUGA", "GENERO_LESIONADO", 
                            "GRUA", "HORA", "HOSPITALIZADO", "LATITUD", "LESIONADOS", 
                            "LONGITUD", "MES", "MODELO", "MOTOCICLETA", "NIVEL_DANO_VEHICULO", 
                            "NIVEL_LESIONADO", "OBRA_CIVIL", "PAVIMENTO_MOJADO", "PERDIDA_TOTAL", "PIEDRA", 
                            "PUNTO_DE_IMPACTO", "PUNTO_IMPACTO", "RELACION_LESIONADOS", "SEGURO", "SINIESTRO", 
                            "TAXI", "THE_GEOM", "THE_GEOM_WEBMERCATOR", "TIPO_VEHICULO", "VOLCADURA", "_FEATURE_COUNT"],
                "index": [797666, 545990, 1705797, 190970, 1902928],
                "data": [
                    [296181, null, null, null, 2016, 
                    null, null, "Perif\u00c3\u00a9rico de M\u00c3\u00a9rida Licenciado Manuel Berzunza", 294609.0, "COLISION Y\/O VUELCO", 
                    "MERIDA", "97249", "Susula", "gris", null, 
                    null, "MIERCOLES", 28.0, null, 0, 
                    "YUCAT\u00c3\u0081N", null, null, null, null, 
                    null, 11, "NO", 20.9624215, 0,
                    -89.6935415, "SEPTIEMBRE", 2001.0, null, "Bajo", 
                    null, null, null, null, null, 
                    null, "Frontal", null, null, 3550627.0, 
                    null, "0101000020E6100000CD3AE3FB626C56C09F77634161F63440", "0101000020110F0000614FC0EB4F0B63C170B69228E3364241", "Auto", null, 
                null],
                    [44505, null, null, null, 2016, null, null, "GOMEZ MORIN", 41044.0, "COLISION Y\/O VUELCO", "CD JUAREZ", "32540", null, "VERDE", null, null, "SABADO", 27.0, null, 0, "CHIHUAHUA", null, null, null, null, null, 15, "NO",
                     31.674036, 0, -106.3688752, "AGOSTO", 2011.0, null, "Bajo", null, null, null, null, null, null, "Trasero", null, null, 3488435.0, null, "0101000020E61000008D13BAA69B975AC0A053909F8DAC3F40", "0101000020110F000048A7C020B49566C197924E37CB624C41", "Auto", null, null],
                    
                    [306255, null, null, null, 2018, null, null, "ADOLFO LOPEZ MATEOS", null, "COLISION Y\/O VUELCO", "TLALNEPANTLA DE BAZ", "54090", "San Pablo Xalpa", "GRIS", null, 20.0, "SABADO", null, null, 0, "M\u00c9XICO", null, null, null, null, null, 15, "NO", 
                    19.512156, 0,  -99.2137147, "OCTUBRE", 2010.0, null, "Bajo", null, null, null, null, null, "Costado izq trasero", null, null, null, 4862991.0, null, null, null, "Auto", null, null],
                    
                     [190970, null, null, null, 2015, null, null, "Boulevard Manuel \u00c3\u0081vila Camacho", 188643.0, "COLISION Y\/O VUELCO", "NAUCALPAN DE JUAREZ", 53050.0, "El Mirador", "BLANCO", null, null, "VIERNES", 10.0, null, 0, "M\u00c3\u0089XICO", null, null, null, null, null, 13, "NO", 
                     19.483451419, 0, -99.2341214418, "ABRIL", 0.0, null, null, null, null, null, null, null, null, null, null, null, 2480203.0, null, "0101000020E6100000000080D8FBCE58C05FB8E178C37B3340", "0101000020110F0000E97CC87BE41165C14D4A240131E04041", "Auto", null, 1.0],
                    
                     [99793, null, null, null, 2019, null, null, "*EP* Avenida Miguel L\u00c3\u00b3pez de Legazpi", null, "COLISION Y\/O VUELCO", "GUADALAJARA", "44930", "Col\u00c3\u00b3n Industrial", "BLANCO", null, 29.0, "LUNES", null, null, 0, "JALISCO", null, null, null, null, null, 9, "NO",
                     20.63796, 0, -103.3739319, "ABRIL", 2015.0, null, "Sin da\u00c3\u00b1o", null, null, null, null, null, "Frontal", null, null, null, 5176164.0, null, null, null, "Cami\u00c3\u00b3n", null, null]
                ]
            }
        };
        this.getPosition = this.getPosition.bind(this);       
    }

   componentDidMount(){

        /*let overlays = [
            new google.maps.Marker({position: {lat: 20.9624215, lng: -89.6935415}, title:"Konyaalti"}),
            new google.maps.Marker({position: {lat: 31.674036, lng: -106.3688752}, title:"Ataturk Park"}),
            new google.maps.Marker({position: {lat: 19.483451419, lng: -99.2137147}, title:"Oldtown"}),
               ]*/

        let overlaysTemp = this.state.json.data.map((item,index) => {debugger;

            //let tooltip = item[2];//Ambulancia
            //item[9];//Causa siniestro item[22] fallecido
            return  new google.maps.Marker({position: {lat: item[28], lng: item[30]}, title:"new"})
        });

        //this.setState({overlays:overlaysTemp});
        this.getPosition();
   }

    getPosition(){
        if (navigator.geolocation) {
            /*navigator.geolocation.getCurrentPosition(showPosition,function(){
                alert("Geolocation is not supported by this browser.");}, {
                    maximumAge:60000, timeout:5000, enableHighAccuracy:true});*/
                    var self = this;
                    navigator.geolocation.watchPosition(function(position) {
                        var pos = {
                          lat: position.coords.latitude,
                          lng: position.coords.longitude
                        };

                        self.setState({
                            currentLatitud: pos.lat,
                            currentLongitud: pos.lng,
                            currentGeolocalization: true
                        });
                       
                      }, function() {
                        //handleLocationError(true, infoWindow, map.getCenter());
                      });



        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    render() {      
       
        if(!this.state.currentGeolocalization){
            return ( <div className="p-grid p-fluid">
                        <div className="p-col-12">
                        <button onClick={()=>this.getPosition()}>Obtener datos en cordenadas actuales</button>
                        </div>
                </div>)
        }

        /*const options = {
            center: {lat: this.state.currentLatitud, lng: this.state.currentLongitud},
            zoom: 12
        };

        let overlays = [
            new google.maps.Marker({position: {lat: 20.9624215, lng: -89.6935415}, title:"Konyaalti"}),
            new google.maps.Marker({position: {lat: 31.674036, lng: -106.3688752}, title:"Ataturk Park"}),
            new google.maps.Marker({position: {lat: 19.483451419, lng: -99.2137147}, title:"Oldtown"}),
               ]*/

            const options = {
                center: {lat: 20.9624215, lng: -89.6935415},
                zoom: 12
            };
        
            const overlays = [
                        new google.maps.Marker({position: {lat: 20.9624215, lng: -89.6935415}, title:"Konyaalti"}),
                       new google.maps.Marker({position: {lat: 20.958817, lng:-89.679096}, title:"Peluqueria"}),
                        //new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
                       // new google.maps.Polygon({paths: [
                       //     {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
                       // ], strokeOpacity: 0.5, strokeWeight: 1, fillColor: '#1976D2', fillOpacity: 0.35
                       // }),
                       // new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
                        //new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
                    ];

        return (
            <div className="p-grid p-fluid">
                <div className="p-col-12">
                   <h1>Mapa 1</h1>                  
                   <GMap overlays={overlays} options={options} style={{width: '100%', minHeight: '320px'}} />
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyB5UcwUUe4l2aXDcZbKvHZmcxi4rb04k8c')
  })(Mapa1)