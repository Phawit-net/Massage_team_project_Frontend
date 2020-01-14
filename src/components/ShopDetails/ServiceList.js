import React, { Component } from 'react'
import Service from './ServiceCard'
import { Row, Col } from 'antd'

export default class ServiceList extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #000000", boxSizing: "border-box", margin: "30px 30px 30px 30px" }}>

        Services
          <Row type="flex" justify="start">
          <Col>
            <Service />
          </Col>
          <Col>
            <Service />
          </Col>
          <Col>
            <Service />
          </Col>
          <Col>
            <Service />
          </Col>
        </Row>
      123

      </div>
    )
  }
}
