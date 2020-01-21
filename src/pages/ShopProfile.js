import React, { Component } from 'react'
import ShopInformation from '../components/ShopProfile/ShopInformation'
import CreateService from '../components/ShopProfile/CreateService'
import ServiceHistory from '../components/ShopProfile/ServiceHistory'
import ApprovePurchase from '../components/ShopProfile/ApprovePurchase'
import CustomerUsage from '../components/ShopProfile/CustomerUsage'
import {Row,Col,Avatar,Menu,Card} from 'antd'



export default class ShopProfile extends Component {
     constructor(props){
         super(props)
         this.state={
             selectCategory:'1'
         }
     }
     handleRenderCategory(){
         switch(this.state.selectCategory){
             case '1':
                 return <ShopInformation/>
             case'2':
                 return <CreateService/>
             case'3':
                 return <ServiceHistory/>
            case'4':
                 return <ApprovePurchase/>
            case'5':
                 return <CustomerUsage/>
            default:
                return
         }
     }
     handleSelectCategory(e){
         this.setState({
             selectCategory:e.key
         })
     }
    render() {
        return (
        <Row style={{marginTop:'200px' ,marginLeft:'10%',marginRight:'10%'}} gutter={[48]}>
            <Col xs={24} sm={24} md={8} lg={6} >
              <Row type='flex' justify='start'>
                  <Col> <Avatar size={64} icon="user" /></Col>
                   <Col>User</Col>
              </Row>
              <Row style={{marginTop:'20px'}}>
                   <Card bodyStyle={{padding:'0'}}>
                    <Menu defaultSelectedKeys={this.state.selectCategory} onSelect={(e)=>this.handleSelectCategory(e)}>
                        <Menu.Item key='1'>Shop Information</Menu.Item>
                        <Menu.Item key='2'>Add Service</Menu.Item>
                        <Menu.Item key='3'>Service History</Menu.Item>
                        <Menu.Item key='4'>Approve Purchase</Menu.Item>
                        <Menu.Item key='5'>Customer Usage</Menu.Item>
                    </Menu>
                    </Card>
              </Row>
            </Col>
            <Col xs={24} sm= {24} md={16} lg={18}>
                <Card>
                 {this.handleRenderCategory()}
                </Card>
            </Col>
        </Row>
        
        )
}
}