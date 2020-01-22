import React, { Component } from "react";
import { Row, Col,Typography } from "antd";
import Axios from "../config/axios.setup";
import { withRouter } from "react-router-dom";
import ServiceList from "../components/ShopDetails/ServiceList";
import styles from "./ShopDetails.module.css";
const { Text } = Typography;

class ShopDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      shopName: "",
      shopProfilePic: "",
      servicesList: []
    };
  }

  async componentDidMount() {
    let targetShopId = this.props.history.location.search.slice(4);
    const result = await Axios.get(
      `http://localhost:8080/shop?id=${targetShopId}`
    );
    this.setState({
      shopName: result.data.shopName,
      shopProfilePic: result.data.shopProfilePic,
      servicesList: result.data.services
    });
  }

  render() {
    return (
      <div>
        <Row style={{ marginTop: "50px" }}>
          <Col span={24}>
            <div className ={styles.shopName} style={{position:'absolute' ,right:'16.7%',top:'25.9%',backgroundColor:'#f1e0b9',opacity:'0.4',width:'275px',height:'90px'}}></div>
            <div className ={styles.shopName} style={{position:'absolute' ,right:'17.5%',top:'27%',backgroundColor:'#FFF',opacity:'0.2',width:'275px',height:'90px'}}></div>
            <div className ={styles.shopName} style={{position:'absolute' ,right:'17%',top:'26.3%',width:'275px',height:'90px' , display:'flex' , justifyContent:'center',alignItems:'center'}}>
              <Text className={styles.fontHead} style={{fontSize:'50px'}}>{this.state.shopName.charAt(0).toUpperCase() + this.state.shopName.slice(1)}</Text>
            </div>
            <img className={styles.shopRoom} src="nuadthaiRoom.png" style={{width:'100%'}}/>
          </Col>
          <Col span={24}>
            <div style={{ borderTop: '5px solid #855f3e' }}></div>
          </Col>
        </Row>
        <Row style={{display:'flex',justifyContent:'center',alignItems:'center', backgroundColor: '#f1e6b2'}}>
          <Col style={{margin:'20px'}}>
          <img style={{width: "150px",height: "auto"}} src={`${Axios.defaults.baseURL}/${this.state.shopProfilePic}`}/>
          </Col>
          <Col style={{margin:'20px'}}>
            <div className={styles.font} style={{fontSize:'50px'}}>{this.state.shopName}</div>
          </Col>
        </Row>

        <Row>
          <Col sm={{ span: 24, offset: 0 }} md={{ span: 22, offset: 1 }}>
            <ServiceList servicesList={this.state.servicesList} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(ShopDetails);
