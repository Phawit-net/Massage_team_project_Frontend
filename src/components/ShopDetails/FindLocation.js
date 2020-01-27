import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Axios from 'axios'

export default class FindLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // defaultLocation: {
      //   lat: 13.75,
      //   lng: 100.539,
      // },
      location: {
        lat: 13.75,
        lng: 100.539,
      },
      address: "",
      haveUsersLocation: false,
      zoom: 13,
      draggable: true,
      inputLocation: false,
    }
  }
  componentDidMount() {
    Axios.get('/getAddress')
      .then(result => {
        if (result.data) {
          this.setState({
            location: {
              lat: result.data.latitude,
              lng: result.data.longitude,
            },
            address: result.data.address,
            haveUsersLocation: true,
          })
        } else {
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              location: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
              haveUsersLocation: true,
              zoom: 13,
            })
          }, () => {
            console.log('we need your location');
            fetch('https://ipapi.co/json')
              .then(res => res.json())
              .then(location => {
                console.log(location);
                this.setState({
                  location: {
                    lat: location.latitude,
                    lng: location.longitude,
                  },
                  haveUsersLocation: true,
                  zoom: 13,
                })
              })
          });
        }
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.inputLocation.lng !== this.props.inputLocation.lng) {
      this.setState({
        location: {
          lat: this.props.inputLocation.lat,
          lng: this.props.inputLocation.lng,
        },
      });
    }
    if (prevProps.inputLocation.lat !== this.props.inputLocation.lat) {
      this.setState({
        location: {
          lat: this.props.inputLocation.lat,
          lng: this.props.inputLocation.lng,
        },
      });
    }
  }

  updateMarker = event => {
    const latlng = event.target.getLatLng();
    let currentLat = parseFloat(latlng.lat.toFixed(6));
    let currentLng = parseFloat(latlng.lng.toFixed(6));
    this.setState({
      location: {
        lat: currentLat,
        lng: currentLng,
      }
    })
    this.props.callbackFromParent(this.state.location)
  }
  render() {
    const position = [this.state.location.lat, this.state.location.lng]
    return (
      <>
        <Map center={[this.state.location.lat, this.state.location.lng]} zoom={this.state.zoom} style={{ zIndex: '100' }}  >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.haveUsersLocation ?
            <Marker
              draggable={this.state.draggable}
              onDragend={this.updateMarker}
              position={position}>
              <Popup>
                {this.state.address ? this.state.address : 'Put your address here'}
              </Popup>
            </Marker> : ''
          }
        </Map>
      </>
    )
  }
}
