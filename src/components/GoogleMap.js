import React from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle = {
  position: 'relative',  
  width: '100%',
  height: '400px'
}
export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter:{
      lat: 51.531812738771954,
      lng: -0.06695641599754677
    }
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
 
  render() {
    return (
      <Map google={this.props.google}
         initialCenter={
           {
             lat: this.state.mapCenter.lat,
             lng: this.state.mapCenter.lng
           }
         } containerStyle={containerStyle}//div style={{height: '400px'}}
         >
        <Marker onClick={this.onMarkerClick}
                name={'We are here'} />
 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCZ1BzFqzU2txchmLwB1MZrv62xXsUHBpg")
})(MapContainer)