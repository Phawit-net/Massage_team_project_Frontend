import React, { Component } from 'react'
import ShopInformation from '../components/ShopProfile/ShopInformation'
import CreateService from '../components/ShopProfile/CreateService'
import ServiceHistory from '../components/ShopProfile/ServiceHistory'
import ApprovePurchase from '../components/ShopProfile/ApprovePurchase'
import CustomerUsage from '../components/ShopProfile/CustomerUsage'
import { Row, Col, Avatar, Menu, Card, Icon, Layout } from 'antd';
import Axios from 'axios'
import styles from './ShopProfile.module.css'
const { Content, Sider } = Layout;
export default class ShopProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectCategory: '1',
            id: "",
            shopName: "",
            pic: "",
        }
    }

    componentDidMount() {
        Axios.get('/getShop')
            .then(result => {
                console.log(result.data.id)
                this.setState({
                    id: result.data.id,
                    shopName: result.data.shopName
                })
            })
            .catch(err => {
                console.log({ message: err.message });
            });


        Axios.get('/servicePic')
            .then(result => {
                this.setState({ pic: result.data.serviceProfilePic })
            }).catch(err => {
                console.error(err);
            })
    }

    handleRenderCategory() {
        switch (this.state.selectCategory) {
            case '1':
                return <ShopInformation />
            case '2':
                return <CreateService />
            case '3':
                return <ServiceHistory />
            case '4':
                return <ApprovePurchase />
            case '5':
                return <CustomerUsage />
            default:
                return
        }
    }
    handleSelectCategory(e) {
        this.setState({
            selectCategory: e.key
        })
    }

    render() {
        return (
            <Layout style={{ marginTop: '200px', marginLeft: '5%', marginRight: '5%' }} gutter={[48]}>

                <Sider breakpoint="lg" collapsedWidth="0" className={styles.siderList}>
                    <Menu defaultSelectedKeys={this.state.selectCategory} onSelect={(e) => this.handleSelectCategory(e)} className={styles.menulist} >
                        <Menu.Item key='0' style={{height: '120px', paddingTop: '20px', cursor: 'default'}} disabled>
                            <Row type='flex' justify='space-around'>
                                <Col xs={24} md={10}> <Avatar src={`${Axios.defaults.baseURL}/${this.state.pic}`} size={64} icon="user" /></Col>
                                <Col xs={24} md={12}><h3>{this.state.shopName.toUpperCase()}</h3></Col>
                            </Row>
                        </Menu.Item>
                        <Menu.Item key='1' className={styles.menulist}>
                            <Icon type="info-circle" />
                            <span>Shop Information</span>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <Icon type="plus-circle" />
                            <span>Add Service</span>
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <Icon type="history" />
                            <span>Service History</span>
                        </Menu.Item>
                        <Menu.Item key='4'>
                            <Icon type="audit" />
                            <span>Approve Purchase</span>
                        </Menu.Item>
                        <Menu.Item key='5'>
                            <Icon type="pie-chart" />
                            <span>Customer Usage</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content>
                        <Card>
                            {this.handleRenderCategory()}
                        </Card>
                </Content>
            </Layout>

            // <Row style={{ marginTop: '200px', marginLeft: '10%', marginRight: '10%' }} gutter={[48]}>
            //     <Col xs={24} sm={24} md={8} lg={6} >
            //         <Row type='flex' justify='start'>
            //             <Col xs={24} md={10}> <Avatar src={`${Axios.defaults.baseURL}/${this.state.pic}`} size={64} icon="user" /></Col>
            //             <Col xs={24} md={12}><h3>{this.state.shopName.toUpperCase()}</h3></Col>
            //         </Row>
            //         <Row style={{ marginTop: '20px' }}>
            //             {/* <Card bodyStyle={{ padding: '0' }}> */}
            //             <Menu defaultSelectedKeys={this.state.selectCategory} onSelect={(e) => this.handleSelectCategory(e)}
            //                 inlineCollapsed={this.state.collapsed}>
            //                 <Menu.Item key='1'>
            //                     <Icon type="info-circle" />
            //                     <span>Shop Information</span>
            //                 </Menu.Item>
            //                 <Menu.Item key='2'>
            //                     <Icon type="plus-circle" />
            //                     <span>Add Service</span>
            //                 </Menu.Item>
            //                 <Menu.Item key='3'>
            //                     <Icon type="history" />
            //                     <span>Service History</span>
            //                 </Menu.Item>
            //                 <Menu.Item key='4'>
            //                     <Icon type="audit" />
            //                     <span>Approve Purchase</span>
            //                 </Menu.Item>
            //                 <Menu.Item key='5'>
            //                     <Icon type="pie-chart" />
            //                     <span>Customer Usage</span>
            //                 </Menu.Item>
            //             </Menu>
            //             {/* </Card> */}
            //         </Row>
            //     </Col>
            //     <Col xs={24} sm={24} md={16} lg={18}>
            //         <Card>
            //             {this.handleRenderCategory()}
            //         </Card>
            //     </Col>
            // </Row>

            // <div style={{ display: "grid", gridTemplateColumns: "25% 70%", gridGap: "5%", justifyContent: "space-around", margin: "200px 20px 20px 20px", height: "100vh" }}>
            //     <Col style={{ width: "100%", height: "50%", position: "sticky", top: "250px" }}>
            //         <Row className="pic" type="grid">
            //             <Col span={6}></Col>
            //             <Col className="img" span={6}> <img className="img" src={`${Axios.defaults.baseURL}/${this.state.pic}`} alt="picture" /> </Col>
            //             <Col className="name" span={12}> {this.state.shopName}</Col>
            //         </Row>
            //         <Row className="listUserProfile" style={{ marginLeft: "16%", width: "100%" }} type="grid">
            //             <Col span={8}></Col>
            //             <Col className="containerList" span={16}>
            //                 <Row className="list" onClick={this.HandleShopInformation}> Shop information </Row>
            //                 <Row className="list" onClick={this.HandleCreateService}> Create Service </Row>
            //                 <Row className="list" onClick={this.HandleServiceHistory}> Services history</Row>
            //                 <Row className="list" onClick={this.HandleApprovePurchase}> Approve purchase </Row>
            //                 <Row className="list" onClick={this.HandleCustomerUsage}> Customer usage </Row>
            //             </Col>
            //         </Row>
            //     </Col>

            //     <div style={{ border: "1px solid black", width: "100%", height: "100%" }}>
            //         {this.Show()}
            //     </div>
            // </div>
        )
    }


}