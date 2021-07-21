import React, { Component, useRef, useEffect } from 'react';
import { Map, TileLayer, Circle, SVGOverlay, LayerGroup, FeatureGroup, Rectangle, Popup, MapContainer } from 'react-leaflet';
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

    const center = [-9.66174595, -35.706776403581124]
const rectangle = [
  [-9.662613530049411, -35.70896362456578],
  [-9.661756822089501, -35.707150451361656],
]

const fillBlueOptions = { fillColor: 'blue' }
const fillRedOptions = { fillColor: 'red' }
const greenOptions = { color: 'green', fillColor: 'green' }
const purpleOptions = { color: 'purple' }

    const { currentLocation, zoom } = this.state;

    return (
      <Map 
      
      center={currentLocation} 
      zoom={zoom}
      z-index={0}
      showScrollVerticalIndicator={false}
      >
        <TileLayer
      attribution='© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
    />
       <LayerGroup>
      <Circle center={center} pathOptions={fillBlueOptions} radius={150} />
      <Circle
        center={center}
        pathOptions={fillRedOptions}
        radius={100}
        stroke={false}
        pulse={true}
      />
      <LayerGroup>
        <Circle
          center={[-9.661004633264834, -35.70232189771209]}
          pathOptions={greenOptions}
          radius={100}
        />
      </LayerGroup>
    </LayerGroup>
    <FeatureGroup pathOptions={purpleOptions}>
      <Popup>Popup in FeatureGroup</Popup>
      <Circle center={[51.51, -0.06]} radius={200} />
      <Rectangle bounds={rectangle} />
    </FeatureGroup>
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
