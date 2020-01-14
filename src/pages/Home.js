import React, { Component } from 'react'
import ShopList from '../components/Generals/Shop/ShopList'
import { Carousel,Row, Typography, Col} from 'antd';

const { Text } = Typography;

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay className='catMenu'>
                  <div>
                    <img style={{ width: '50%', height: '50%' }}src="/humans.jpg" alt="img1" />
                  </div>
                  <div>
                    <img style={{ width: '50%', height: '50%' }} src="/massage.jpg" alt="img2" />
                  </div>
                  <div>
                    <img style={{ width: '50%', height: '50%' }} src="/thai_massage_twickenham.jpg" alt="img3" />
                  </div>
                </Carousel>
                <div style={{backgroundColor:'#f1e6b2', opacity: '0.8' , padding:'60px' ,fontSize:'20px'}}>
                  <Row style={{display:'flex',justifyContent:'center'}}>
                    Heaven For Thai Massage Lover
                  </Row>
                  <Row style={{display:'flex',justifyContent:'center'}}>
                    A place where Thai massage from all over Thailand meet Thai massge lover
                  </Row>
                </div>
                <ShopList/>
            </div>
        )
    }
}
