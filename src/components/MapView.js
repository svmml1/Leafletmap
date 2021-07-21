import React, { Component, useRef, useEffect } from 'react';
import { Map, TileLayer, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';
import ThMarkers from './ThMarker'

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: -9.66174595, lng: -35.706776403581124 },
      zoom: 12,
    }
  }

  render() {



    const { currentLocation, zoom } = this.state;

    return (
      <Map 
      center={currentLocation} 
      zoom={zoom}
      z-index={0}
      >
        <Circle 
        color="green"
        center={[-9.66174595, -35.706776403581124]} 
        radius={70} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={data.venues}/>
        <ThMarkers 
        venues={data.venues}
        eventHandlers={{
          click: () => {
            console.log('marker clicked')
          },
        }}
        />
      </Map>
    );
  }
}

export default MapView;
