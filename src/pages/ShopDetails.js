import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Axios from '../config/axios.setup'
import { withRouter } from 'react-router-dom'
import ServiceList from '../components/ShopDetails/ServiceList'
import ShowLocation from '../components/ShopDetails/ShowLocation'
class ShopDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      shopName: "",
      shopProfilePic: "",
      servicesList: [],
      location: {
        address: "",
        latitude: "",
        longitude: "",
      },
      haveLocation: false,
    }
  }

  async componentDidMount() {
    let targetShopId = this.props.history.location.search.slice(4)
    const result = await Axios.get(`http://localhost:8080/shop?id=${targetShopId}`)
    const address = await Axios.get(`http://localhost:8080/address?id=${targetShopId}`)
    if (address.data !== null) {
      this.setState({
        location: {
          address: address.data.address,
          latitude: address.data.latitude,
          longitude: address.data.longitude,
        },
        haveLocation: true,
      })
    }
    this.setState({
      shopName: result.data.shopName,
      shopProfilePic: result.data.shopProfilePic,
      servicesList: result.data.services,
    })
  }

  render() {
    return (
      <div>
        <Row style={{ marginTop: "200px" }}>
          <Col>
            <Row
              style=
              {{
                backgroundImage: `url(${Axios.defaults.baseURL}/${this.state.shopProfilePic})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
              }}
            >
              <Col span={12} >
                <img
                  style={{
                    borderRadius: "50%",
                    border: "1px solid #000",
                    width: "150px",
                    height: "auto",
                    float: "right"
                  }}
                  alt="shopProfilePic"
                  src={`${Axios.defaults.baseURL}/${this.state.shopProfilePic}`} />
              </Col>
              <Col span={12}>
                <h1>{this.state.shopName}</h1>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col sm={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }} >
            <ServiceList servicesList={this.state.servicesList} />
          </Col>
        </Row>

        <Row type="flex" justify="center">
          <Col  >
            {this.state.haveLocation ?
              <ShowLocation location={this.state.location} /> : ""
            }
          </Col>
        </Row>
      </div>

    )
  }
}

export default withRouter(ShopDetails);