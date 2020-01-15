import React, { Component } from 'react'
import { Row, Col } from 'antd'
import BookingModal from './BookingModal'
export default class ServiceList extends Component {
  render() {
    let service = this.props.service.service
    console.log(service.service)
    return (
      <>
        <div
          style=
          {{
            marginTop: "50px", width: "100%", height: "90%",
            display: "grid", gridTemplateColumns: "35% 60%",
            justifyContent: "space-between", border: "1px solid #926F3B",
          }}>
          <div style={{ margin: "10px" }} >
            <img
              style={{ width: "100%", height: "100%", }}
              src={service.serviceProfilePic}
              alt="test"
            />
          </div>
          <div title="text" style={{ width: "100%", height: '200px', overflow: "scroll" }}>
            <strong> {service.serviceName} </strong>
            {service.serviceDescription}

          </div>
          <div style={{ float: "right", margin: "10px 40px" }}>
            <p>
              price: {service.price}
            </p>
            <br />
            <p>
              time: {service.time}
            </p>
          </div>

          <div style={{ display: "inline-block" }}>
          <p>{service.id}</p>
            {/* <BookingModal id={service.id} /> */}
          </div>
        </div>
      </>
    )
  }
}