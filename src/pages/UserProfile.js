import React, { Component } from 'react'
import '../UserProfile.css'
import ServiceUsage from '../components/UserProfile/ServiceUsage'
import UserInformation from '../components/UserProfile/UserInformation'
import PurchaseHistory from '../components/UserProfile/PurchaseHistory';
import { Row, Col, Avatar, Menu, Card, Icon, Layout } from 'antd';
import Axios from "../config/axios.setup"
import styles from './UserProfile.module.css'
const { Content, Sider } = Layout;

export default class UserProfile extends Component {

    state = {
        selectCategory: '1',
        id: "",
        shopName: "",
        pic: "",
    };

    componentDidMount() {
        Axios.get('/getShop')
            .then(result => {
                this.setState({
                    id: result.data.id,
                    shopName: result.data.shopName,
                })
            })
            .catch(err => {
                console.error(err);
            })

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
                return <UserInformation />
            case '2':
                return <PurchaseHistory />
            case '3':
                return <ServiceUsage />
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
                            <span>User Information</span>
                        </Menu.Item>
                        <Menu.Item key='2'>
                            <Icon type="history" />
                            <span>Purchase History</span>
                        </Menu.Item>
                        <Menu.Item key='3'>
                            <Icon type="pie-chart" />
                            <span>Services Usage</span>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Content>
                    <Card bodyStyle={{ padding: '30px', paddingBottom: '70px'}} className={styles.boxCard}>
                        <div style={{ width: '100%', height: '100%' }}>
                            <img src='coner.png' style={{ position: 'absolute', width: '120px', height: '135px', right: '0.5%', bottom: '1%', opacity: '0.8' }} />
                            <img src='coner.png' style={{ position: 'absolute', transform: 'scaleX(-1)', width: '120px', height: '135px',left: '0.5%', bottom: '1%', opacity: '0.8' }} />
                        </div>
                        {this.handleRenderCategory()}
                    </Card>
                </Content>

            </Layout>
        )
    }
}
