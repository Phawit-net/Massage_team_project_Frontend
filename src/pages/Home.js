import React, { Component } from 'react'
import ShopList from '../components/Generals/Shop/ShopList'
import { Carousel } from 'antd';

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
                <div style={{backgroundColor:'#f1e6b2', opacity: '0.8' }}>
                    Heaven For Thai Massage Lover 
                    A place where Thai massage from all over Thailand meet Thai massge lover 
                </div>
                <ShopList/>
            </div>
        )
    }
}
