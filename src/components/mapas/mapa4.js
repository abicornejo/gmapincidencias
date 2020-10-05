import React, {Component} from 'react';
import { GMap } from 'primereact/gmap';

export class Mapa4 extends Component {

    constructor() {
        super();
        this.state = {
           
        };
    }

    render() {

        const options = {
            center: {lat: 36.890257, lng: 30.707417},
            zoom: 12
        };    


        return  (
            <GMap ref={(el) => this.gmap = el} options={options} style={{width: '100%', minHeight: '320px'}} />
        )
    }
}