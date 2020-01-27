import React, { Component } from 'react'
import ShopInformation from '../components/ShopProfile/ShopInformation'
import CreateService from '../components/ShopProfile/CreateService'
import ServiceHistory from '../components/ShopProfile/ServiceHistory'
import ApprovePurchase from '../components/ShopProfile/ApprovePurchase'
import CustomerUsage from '../components/ShopProfile/CustomerUsage'
import { Row, Col, Avatar, Menu, Card, Icon, Layout } from 'antd';
import Axios from "../config/axios.setup"
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
                        <Menu.Item key='0' style={{ height: '120px', paddingTop: '20px', cursor: 'default' }} disabled>
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
        )
    }
}