/* eslint-disable no-undef */
import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import {Checkbox} from 'primereact/checkbox';
import { Fieldset } from 'primereact/fieldset';
export class Mapa3 extends Component {

    constructor(props) {
        super(props);debugger;
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            selectedProduct: null,
            panelCollapsed:true,
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
            },
            listMarkers:[
                {
                    lat: 37.778519, lng: -122.405640,
                    title:'The marker`s title will appear as a tooltip.',
                    name:'SOMA'
                },
                {
                    lat: 37.759703, lng: -122.428093,
                    title:'The marker`s title will appear as a tooltip.',
                    name:'Dolores park'
                },
                {
                    lat: 37.762391, lng: -122.439192,
                    title:'The marker`s title will appear as a tooltip.',
                    name:'New position'
                }        
            ],
            properties:[
                {name:"alcohol",title : "Alcohol", position: 1, checked:false},  
                {name:"ambulancia",title : "Ambulancia", position: 2, checked:false},   
                {name:"animal",title : "Animal", position: 3, checked:false},  
                {name:"ano",title : "Año", position: 4, checked:false},  
                {name:"arbol",title : "Arbol", position: 5, checked:false},  
                {name:"bicicleta",title : "Bicicleta", position: 6, checked:false},   
                {name:"calle",title : "Calle", position: 7, checked:false},  
                {name:"cartodb_id",title : "Carto", position: 8, checked:false},  
                {name:"causa_siniestro",title : "Causa siniestro", position: 9, checked:false},  
                {name:"ciudad",title : "Ciudad", position: 10, checked:false},  
                {name:"codigo_postal",title : "Código postal", position: 11, checked:false},   
                {name:"colonia",title : "Colonia", position: 12, checked:false},    
                {name:"color",title : "Color", position: 13, checked:false},    
                {name:"conductor_distraidos",title : "Conductor distraido", position: 14, checked:false},  
                {name:"dano_numero",title : "Daño número", position: 15, checked:false},   
                {name:"dia",title : "Día", position: 16, checked:false},  
                {name:"dia_numero",title : "Día número", position: 17, checked:false},    
                {name:"dormido",title : "Dormido", position: 18, checked:false},    
                {name:"edad_lesionado",title : "Edad lesionado", position: 19, checked:false},  
                {name:"estado",title : "Estado", position: 20, checked:false},  
                {name:"explosion_llanta",title : "Explosión llanta", position: 21, checked:false},    
                {name:"fallecido",title : "Fallecido", position: 22, checked:false},   
                {name:"fuga:false",title : "Fuga", position: 23, checked:false},  
                {name:"genero_lesionado",title : "Genero lesionado", position: 24, checked:false},   
                {name:"grua",title : "Grua", position: 25, checked:false},   
                {name:"hora",title : "Hora", position: 26, checked:false},  
                {name:"hospitalizado",title : "Hospitalizado", position: 27, checked:false},  
                {name:"latitud",title : "Latitud", position: 28, checked:false},  
                {name:"lesionados",title : "Lesionados", position: 29, checked:false},  
                {name:"longitud",title : "Longitud", position: 30, checked:false},  
                {name:"mes",title : "Mes", position: 31, checked:false},  
                {name:"modelo",title : "Modelo", position: 32, checked:false},  
                {name:"motocicleta",title : "Motocicleta", position: 33, checked:false},  
                {name:"nivel_dano_vehiculo",title : "Nivel daño vehiculo", position: 34, checked:false},  
                {name:"nivel_lesionado",title : "Nivel lesionado", position: 35, checked:false},  
                {name:"obra_civil:false",title : "Obra civil", position: 36, checked:false},  
                {name:"pavimento_mojado",title : "Pavimento mojado", position: 37, checked:false},  
                {name:"perdida_total",title : "Perdida Total", position: 38, checked:false},   
                {name:"piedra",title : "Piedra", position: 39, checked:false},   
                {name:"punto_de_impacto",title : "Punto de impacto", position: 40, checked:false},  
                {name:"punto_impacto",title : "Punto impacto", position: 41, checked:false},  
                {name:"relacion_lesionados",title : "Relacino lesionados", position: 42, checked:false},   
                {name:"seguro",title : "Seguro", position: 43, checked:false},  
                {name:"siniestro",title : "Siniestro", position: 44, checked:false},  
                {name:"taxi",title : "Taxi", position: 45, checked:false},  
                {name:"the_geom",title : "The geom", position: 46, checked:false},  
                {name:"the_geom_webmercator",title : "The geom web mercator", position: 47, checked:false},  
                {name:"tipo_vehiculo",title : "Tipo vehiculo", position: 48, checked:false},  
                {name:"volcadura",title : "Volcadura", position: 49, checked:true}
            ]
          };

          this.onMarkerClick = this.onMarkerClick.bind(this);
          this.onMapClicked = this.onMapClicked.bind(this);
          this.onPropertyChange = this.onPropertyChange.bind(this);
    }

    componentDidMount(){

    }

    onMarkerClick = (props, marker, e) =>{
        
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  onPropertyChange = (e, param) => {

        let selectedProperties = [...this.state.properties];

        selectedProperties.map( (p) =>{ 
            if(p.name === param.name){
                p.checked = e.checked;
                return false;
            }            
        });

        this.setState({ properties: selectedProperties });
    }

    render() {
            //let tooltip = item[2];//Ambulancia
            //item[9];//Causa siniestro item[22] fallecido
        const markers = this.state.json.data.map((center, index ) => {            
            return (<Marker 
                onClick={this.onMarkerClick}
                title={center[22]}
                name={center[9]}                
                key={index}                
                position={{                     
                    lat: center[28],                     
                    lng: center[30]                 
                }}
                alcohol={center[1]}
                ambulancia={center[2]}  
                animal={center[3]}
                ano={center[4]}  
                arbol={center[5]}  
                bicicleta={center[6]}  
                calle={center[7]}  
                cartodb_id={center[8]}  
                causa_siniestro={center[9]}  
                ciudad={center[10]}  
                codigo_postal={center[11]}  
                colonia={center[12]}  
                color={center[13]}  
                conductor_distraidos={center[14]}  
                dano_numero={center[15]}  
                dia={center[16]}  
                dia_numero={center[17]}  
                dormido={center[18]}  
                edad_lesionado={center[19]}  
                estado={center[20]}  
                explosion_llanta={center[21]}  
                fallecido={center[22]}  
                fuga={center[23]}  
                genero_lesionado={center[24]}  
                grua={center[25]}  
                hora={center[26]}  
                hospitalizado={center[27]}  
                latitud={center[28]}  
                lesionados={center[29]}  
                longitud={center[30]}  
                mes={center[31]}  
                modelo={center[32]}  
                motocicleta={center[33]}  
                nivel_dano_vehiculo={center[34]}  
                nivel_lesionado={center[35]}  
                obra_civil={center[36]}  
                pavimento_mojado={center[37]}  
                perdida_total={center[38]}  
                piedra={center[39]}  
                punto_de_impacto={center[40]}
                punto_impacto={center[41]} 
                relacion_lesionados={center[42]} 
                seguro={center[43]} 
                siniestro={center[44]} 
                taxi={center[45]} 
                the_geom={center[46]} 
                the_geom_webmercator={center[47]} 
                tipo_vehiculo={center[48]} 
                volcadura={center[49]} 
                feature_count={center[50]}   

            />)        
            });


            const properties = this.state.properties.map((property, index ) => {            
                return (
                    <div className="p-col-2"  key={index}>
                        <Checkbox inputId={index.toString()} checked={property.checked} value={property.position} onChange={ (e) => this.onPropertyChange(e,property)}></Checkbox>
                        <label htmlFor={index}  className="p-checkbox-label">{property.title}</label>
                    </div>
                )        
                });

                const options = this.state.properties.map((property, index ) => {            
                    return (
                        property.checked ?
                        <div className="p-field p-col-12 p-md-12"  key={index}>
                            <label><b>{property.title}:</b>{this.state.selectedPlace[property.name]}</label>
                        </div>
                        :null
                    )        
                    });
                    const containerStyle = {
                        position: 'relative',  
                        width: '100%',
                        height: '100%'
                      }
                      const style = {
                        width: '100%',
                        height: '100%',
                        position: 'relative'
                      }

                      

        return(
            <div className="p-formgrid p-grid">
                
                <div className="p-col-12 p-md-12">

                    <Fieldset legend="Map Properties" toggleable>
                        <div className="p-grid">
                        {properties}
                        </div>
                    </Fieldset>    

                </div>
                <div className="p-col-12 p-md-12">
                    <div style={{ height: '100vh', width: '100%' }}> 
                        <Map google={window.google}                      
                            className={'map'}
                            zoom={5}
                            onClick={this.onMapClicked}
                            style={{position: 'relative', width: '100%', height: '100%' }}
                            containerStyle={{position: 'relative'}}
                        >
                            {markers}
                            <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                            >
                                <div className="p-fluid p-formgrid p-grid">
                                    {options}
                                </div>
                            </InfoWindow>
                        </Map>
                    </div>
                </div>           
            </div>
        )
    }
}


    
export default GoogleApiWrapper({
    apiKey: ('AIzaSyB5UcwUUe4l2aXDcZbKvHZmcxi4rb04k8c'),
    version: "3.38"
  })(Mapa3)
    