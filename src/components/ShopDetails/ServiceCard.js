import React, { Component } from 'react'
import BookingModal from './BookingModal'
import { Typography, Icon, Row, Col } from "antd";
import Axios from '../../config/axios.setup'

const { Paragraph } = Typography;

export default class ServiceList extends Component {
  render() {
    let service = this.props.service.service

    return (
      <>
        <Row style={{ width: "100%", height: "100%", border: "2px solid #D8AE47" }}>
          <img src='patternLeft.png' alt="patternLeft" style={{ position: 'absolute' }} />
          <img src='patternRight.png' alt="patternRight" style={{ position: 'absolute', right: '0%' }} />
          <img src='patternLeft.png' alt="patternLeft" style={{ position: 'absolute', transform: 'scaleY(-1)', bottom: '0%' }} />
          <img src='patternRight.png' alt="patternRight" style={{ position: 'absolute', transform: 'scaleY(-1)', right: '0%', bottom: '0%' }} />
          <div style={{ margin: "10px", display: 'flex', justifyContent: 'center', zIndex: 3 }} >
            <img
              style={{ width: "50%", height: "50%", }}
              src={`${Axios.defaults.baseURL}/${service.serviceProfilePic}`}
              alt="test"
            />
          </div>
          <div style={{ width: 'auto', margin: '0px 50px' }}>
            <strong> {service.serviceName} </strong>
            <Paragraph ellipsis={{ rows: 3, expandable: true }}>{service.serviceDescription}</Paragraph>
          </div>
          <div style={{ margin: '0px 50px', borderTop: '1px solid #000' }}></div>
          <Row type='flex' justify='center' align='middle' style={{ padding: '10px 0px' }}>
            <Col style={{ padding: '0px 10px' }}>
              <strong>Price:</strong>  {service.price}  <strong> Baht</strong>
            </Col>
            <img src='/explore.png' style={{ width: '20px', height: '20px' }} alt="explore" />
            <Col style={{ padding: '0px 10px' }}>
              <strong>Time:</strong>    {service.time}
              <strong> Hr</strong>
              <Icon type="clock-circle" style={{ paddingLeft: '10px' }} />
            </Col>
            <img src='/explore.png' style={{ width: '20px', height: '20px' }} alt="explore" />
            <Col style={{ padding: '0px 10px' }}>
              <BookingModal id={service.id} />
            </Col>
          </Row>
        </Row>
      </>
    )
  }
}