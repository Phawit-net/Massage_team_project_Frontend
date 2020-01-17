import React, { Component } from 'react'
import BookingModal from './BookingModal'
import Axios from '../../config/axios.setup'
export default class ServiceList extends Component {
  render() {
    let service = this.props.service.service
    return (
      <>
        <div
          style=
          {{
            marginTop: "50px", width: "100%", height: "90%",
            padding: "10px",
            display: "grid", gridTemplateColumns: "35% 60%",
            justifyContent: "space-between", border: "2px solid #D8AE47",
          }}>
          <div style={{ margin: "10px" }} >
            <img
              style={{ width: "100%", height: "100%", }}
              src={`${Axios.defaults.baseURL}/${service.serviceProfilePic}`}
              alt="test"
            />
          </div>
          <div title="text" style={{ width: "100%", height: '200px', overflow: "scroll" }}>
            <strong> {service.serviceName} </strong>
            {service.serviceDescription}

          </div>
          <div style={{ float: "right", margin: "10px 40px" }}>

          </div>

          <div style={{ display: "inline-block" }}>
            <p >
              <strong>Price:</strong>  {service.price}
            </p>
            <p>
              <strong>Time:</strong>    {service.time}
            </p>
            <BookingModal id={service.id} />
          </div>
        </div>
      </>
    )
  }
}