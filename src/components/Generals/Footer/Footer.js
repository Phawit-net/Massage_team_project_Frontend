import React, { Component } from 'react'
import {Row,Col,Card,Icon} from 'antd'
import Logo from '../../../picture/NuadThaiLogo.png'

export default class Footer extends Component {
    render() {
        return (
            <Card style={{backgroundColor:'#c4c4c4',fontSize:'20px',color:'#926F3B', position:"relative", bottom:"0"}}>
               <Row type='flex' justify='space-around' >
                   <Col>
                   <Row>
                 <img src={Logo} alt='Logo' style={{ width: '150px', height: '150px' }} />
                   </Row>
                   <Row tpe='flex' align='top'>
                      <b style={{fontSize:'15px'}} >Heaven For Thai Massage Lover</b>
                   </Row> 
                   </Col>     
                   <Col>
                   <Row>
                       <Col> <b>About Us</b></Col>
                   </Row>
                   <Row >
                      <span>Working with us</span>
                      <br/>
                      <span >Advertise with us</span>
                      <br/>
                      <span >Our policy</span>
                      <br/>
                       <span >Private policy</span>                    
                   </Row>
                   </Col>
                   <Col>
                   <Row>
                        <Col><b >Follow Us</b></Col>
                   </Row>
                   <Row>
                      <Icon type="facebook" style={{fontSize:'40px'}} />
                      <br/>
                       <Icon type="twitter" style={{fontSize:'40px'}} />                  
                   </Row>
                   </Col>
               </Row> 
            </Card>
        )
    }
}
