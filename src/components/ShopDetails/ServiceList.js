import React, { Component } from 'react'
import ServiceCard from './ServiceCard'
import { Row, Col, Pagination, List } from 'antd'

const numEachPage = 4
export default class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0 * numEachPage,
      maxValue: 1 * numEachPage,
    };
  }

  handleChange = value => {
    this.setState({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    })
    console.log(this.state.minValue, this.state.maxValue)
  }

  render() {
    let servicesList = this.props.servicesList
    return (
      <div
        style=
        {{
          backgroundColor: "#FFFFFF", border: "1px solid #000000",
          boxSizing: "border-box", marginTop: "30px", display: "flex",
          flexDirection: "column", alignItems: "center"
        }}>
        <h1 style={{ color: "#926F3B" }}>
          Services
        </h1>
        < Row type="flex" gutter={[8, 32]} >
          {servicesList.slice(this.state.minValue, this.state.maxValue).map(service =>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
              <ServiceCard key={service.id} service={{ service }}  />
            </Col>
            // <p>{service.id }</p>
          )}
        </Row >
        <br />
        <Pagination

          total={servicesList.length}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          pageSize={numEachPage}
          onChange={this.handleChange}
          style={{ align: "center" }}
        />
      </div >
    )
  }
}
