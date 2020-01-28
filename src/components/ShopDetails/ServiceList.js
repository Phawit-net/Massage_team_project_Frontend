import React, { Component } from 'react'
import ServiceCard from './ServiceCard'
import styles from "./ServiceList.module.css";
import { Row, Col } from 'antd'
import Paginations from '../Generals/Shop/Paginations'

const numEachPage = 4

export default class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0 * numEachPage,
      maxValue: 1 * numEachPage,
      pageOfItems: []
    };
  }

  handleChange = value => {
    this.setState({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,

    })
  }


  onChangePage = (pageOfItems) => {
    this.setState({ pageOfItems: pageOfItems });
  }


  render() {
    let servicesList = this.props.servicesList
    return (
      <div
        style=
        {{
          backgroundColor: "#FFFFFF", border: "2px solid #9E4624",
          boxSizing: "border-box", marginTop: "30px", display: "flex",
          flexDirection: "column", alignItems: "center"
        }}>
        <div style={{ fontSize: '50px' }} className={styles.font}>
          Services
        </div>
        < Row type="flex" >
          {this.state.pageOfItems.slice(this.state.minValue, this.state.maxValue).map(service =>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} style={{ padding: '10px' }}>
              <ServiceCard key={service.id} service={{ service }} />
            </Col>
          )}
        </Row >
        <br />
        <Paginations items={servicesList} onChangePage={this.onChangePage} pageSize={numEachPage} />
        <br />
      </div >
    )
  }
}
