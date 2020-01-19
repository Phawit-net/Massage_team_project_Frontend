import React, { Component } from 'react'
import styles from "./Home.module.css";
import Axios from '../config/axios.setup'
import ShopList from '../components/Generals/Shop/ShopList'
import { Link } from 'react-router-dom'
import { Carousel, Row, Typography, Col } from 'antd';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList: [],
      page: 1,
      keyword: ''
    };
  }

  myCallback = (dataFromChild) => {
    this.setState({
      shopList: dataFromChild.shopList,
      page: dataFromChild.page
    })
  }

  async componentDidMount() {
    const result = await Axios.get(`http://localhost:8080/shops/${this.state.page}`)
    this.setState({ shopList: result.data })
  }

  render() {
    return (
      <div>
        <Carousel autoplay className={styles.slide}>
          <img style={{ width: '100%', height: '100%' }} src="/cover1.png" alt="img1" />

          <img style={{ width: '100%', height: '100%' }} src="/cover2.png" alt="img2" />

          <img style={{ width: '100%', height: '100%' }} src="/cover3.png" alt="img3" />
        </Carousel>
        <Row style={{ backgroundColor: '#f1e6b2', opacity: '0.8', fontSize: '20px' }} >
          <Col>
            <div style={{ borderTop: '5px solid #855f3e' }}></div>
          </Col>
          <Col xs={0} md={24}>
            <img src='/pattern3.png' style={{ position: 'absolute', opacity: '0.4' }} className={styles.pattern} />
          </Col>
          <Col xs={0} md={24}>
            <img src='/pattern3.png' style={{ position: 'absolute', opacity: '0.4', right: '0%', transform: 'scaleX(-1)' }} className={styles.pattern} />
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', padding: '10px' }} className={styles.font} span={24}>
            Heaven For Thai Massage Lover
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', padding: '10px' }} className={styles.font} span={24}>
            A place where Thai massage from all over Thailand meet Thai massge lover
          </Col>
        </Row>
        <Row type='flex' justify='center' align='middle' style={{paddingTop:'20px'}}>
          <img src='/explore.png' style={{width:'30px',height:'30px',marginRight:'10px'}}/>
          <Link to='/shoppackages' className={styles.explorefont}>Explore All Shop</Link>
          <img src='/explore.png' style={{width:'30px',height:'30px',marginLeft:'10px'}}/>
        </Row>
        <Row style={{margin:'0px 150px'}} className={styles.shoplist}>
          <ShopList
            shopList={this.state.shopList}
            callbackFromParent={this.myCallback}
            keyword={this.state.keyword} />
        </Row>
      </div>
    )
  }
}
