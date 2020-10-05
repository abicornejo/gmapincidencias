/* eslint-disable no-undef */
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

//import CurrentLocation from './Map';

export class Mapa2 extends Component {

    constructor(props){
        super(props);
    }
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
      };
    
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
    
      onClose = props => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      };
      

    
      render() {

        var points = [
            { lat: 42.02, lng: -77.01 },
            { lat: 42.03, lng: -77.02 },
            { lat: 41.03, lng: -77.04 },
            { lat: 42.05, lng: -77.02 }
        ]

        debugger;
        var bounds = new window.google.maps.LatLngBounds();
        //var bounds = new window.google.maps.LatLngBounds();


        for (var i = 0; i < points.length; i++) {
          bounds.extend(points[i]);
        }

        return (
            <Map
            google={window.google}
            initialCenter={{
                lat: 42.39,
                lng: -72.52
            }}
            bounds={bounds}>
            </Map>
        );
      }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyB5UcwUUe4l2aXDcZbKvHZmcxi4rb04k8c'
  })(Mapa2);
    //AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo