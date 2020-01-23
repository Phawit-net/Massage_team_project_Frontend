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

  render() {
    const position = [this.props.location.latitude, this.props.location.longitude]
    return (
      <>
        <Map center={[this.props.location.latitude, this.props.location.longitude]} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={position}>
            <Popup>
              {this.props.location.address}
            </Popup>
          </Marker> : ''
        </Map>
      </>
    )
  }
}
