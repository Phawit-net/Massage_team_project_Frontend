import React, { Component } from 'react'
import styles from "./Home.module.css";
import Axios from '../config/axios.setup'
import ShopList from '../components/Generals/Shop/ShopList'
import { Link } from 'react-router-dom'
import { Carousel, Row, Typography, Col } from 'antd';
import Pagination from '../components/Generals/Shop/Pagination'
var exampleItems = [...Array(15).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList: [],
      page: 1,
      keyword: '',
      exampleItems: exampleItems,
      pageOfItems: []
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


  onChangePage = (pageOfItems) =>{
    this.setState({ pageOfItems: pageOfItems });
  }


  render() {
    
    return (
      <div>
        <Carousel autoplay className={styles.slide}>
          <img style={{ width: '100%', height: '100%' }} src="HomeCover1.png" alt="img1" />

          <img style={{ width: '100%', height: '100%' }} src="HomeCover2.png" alt="img2" />

          <img style={{ width: '100%', height: '100%' }} src="HomeCover3.png" alt="img3" />
        </Carousel>
        <Row style={{ backgroundColor: '#f1e6b2', fontSize: '20px' }} >
          <Col>
            <div style={{ borderTop: '5px solid #855f3e' }}></div>
          </Col>
          <Col xs={0} md={24}>
            <img src='pattern3.png' style={{ position: 'absolute', opacity: '0.4' }} className={styles.pattern} />
          </Col>
          <Col xs={0} md={24}>
            <img src='pattern3.png' style={{ position: 'absolute', opacity: '0.4', right: '0%', transform: 'scaleX(-1)' }} className={styles.pattern} />
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', padding: '10px' }} className={styles.font} span={24}>
            Heaven For Thai Massage Lover
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', padding: '10px' }} className={styles.font} span={24}>
            A place where Thai massage from all over Thailand meet Thai massge lover
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <img src='Separator.png' alt="Separator" style={{ width: '10%', height: '10%' }} />
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', margin: '40px 0px' }} span={24}>
            <img src='slogan1.png' alt="slogan1" style={{ width: '150px', height: '150px', margin: '0px 30px' }} />
            <img src='slogan2.png' alt="slogan2" style={{ width: '150px', height: '150px', margin: '0px 30px' }} />
          </Col>
        </Row>
        {/* <Row style={{ backgroundColor: '#f1e6b2'}} type='flex' justify='center'>
          
        </Row> */}
        <Row type='flex' justify='center' align='middle' style={{ paddingTop: '20px' }}>
          <img src='/explore.png' alt="explore" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
          <Link to='/shoppackages' className={styles.explorefont}>Explore All Shop</Link>
          <img src='/explore.png' alt="explore" style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
        </Row>
        <Row style={{ margin: '0px 150px' }} className={styles.shoplist}>
          <ShopList
            shopList={this.state.shopList}
            callbackFromParent={this.myCallback}
            keyword={this.state.keyword} />
        </Row>

        <Row>
          {this.state.pageOfItems.map(item =>
              <div key={item.id}>{item.name}</div>
          )}
          <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage} />
        </Row>
      </div >
    )
  }
}
