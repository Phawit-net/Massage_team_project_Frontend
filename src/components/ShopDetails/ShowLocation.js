import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class FindLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {
        lat: "",
        lng: "",
      },
      address: "",
      zoom: 13,
    }
  }
  openPopup(marker) {
    if (marker && marker.leafletElement) {
      window.setTimeout(() => {
        marker.leafletElement.openPopup()
      })
    }
  }


  render() {
    const position = [this.props.location.latitude, this.props.location.longitude]
    return (
      <>
        <Map center={[this.props.location.latitude, this.props.location.longitude]} zoom={this.state.zoom} style={{ zIndex: '100' }}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            ref={this.openPopup}
            position={position}>
            <Popup  >
              {this.props.location.address}
            </Popup>
          </Marker> : ''
        </Map>
      </>
    )
  }
}
