import React, { Component } from 'react'
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  Map,
  Marker,
  Popup,
  Rectangle,
  TileLayer,
  ImageOverlay
} from 'react-leaflet'
import map from './basemap.jpg';


class FortMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 18,
  }
 
  
  render() {
    const center = [0, 0]
    
    return (
        <Map center={center} zoom={this.state.zoom}>
          <TileLayer
            url={map}
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
        </Map>
    )
  }
}

export default FortMap;