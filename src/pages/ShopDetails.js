import React, { Component } from 'react'
import { Row, Input, Col } from 'antd'
import Axios from 'axios'
import ServiceList from '../components/ShopDetails/ServiceList'

export default class ShopDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      shopName: "",
      shopProfilePic: "",
      servicesList: [],
    }
  }

  async componentDidMount() {
    const result = await Axios.get(`http://localhost:8080/shop?id=${this.state.page}`)
    this.setState({
      shopName: result.data.shopName,
      shopProfilePic: result.data.shopProfilePic,
      servicesList: result.data.services,
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Row
              style=
              {{
                backgroundImage: `url(${'http://www.thaiticketmajor.com/variety/img_content/imgeditor/sky-mirror-beach.jpg'})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
              }}
            >
              <Col span={8} >
                <img
                  style=
                  {{
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px"
                  }}
                  src={this.state.shopProfilePic} />
              </Col>
              <Col span={16}>
                {this.state.shopName}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col sm={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }} >
            <ServiceList servicesList={this.state.servicesList} />
          </Col>
        </Row>
      </div>

    )
  }
}
