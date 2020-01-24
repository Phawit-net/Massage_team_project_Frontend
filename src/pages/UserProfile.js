import React, { Component } from 'react'
import '../UserProfile.css'
import ServiceUsage from '../components/UserProfile/ServiceUsage'
import UserInformation from '../components/UserProfile/UserInformation'
import PurchaseHistory from '../components/UserProfile/PurchaseHistory';
import { Row, Col } from 'antd';
import Axios from "../config/axios.setup"

export default class UserProfile extends Component {

    state = {
        case: 1,
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

    HandleUserInformation = () => {
        this.setState({ case: 1 })
    };

    HandlePurchaseHistory = () => {
        this.setState({ case: 2 })
    };

    HandleServicesUsage = () => {
        this.setState({ case: 3 })
    };

    HandleShopLink = () => {
        this.setState({ case: 4 })
    };

    Display = () => {
        switch (this.state.case) {
            case 1: return <UserInformation />;

            case 2: return <PurchaseHistory />;

            case 3: return <ServiceUsage />;

            default: return <UserInformation />;
        }
    }

    render() {
        return (
            <div style={{ display: "grid", gridTemplateColumns: "25% 70%", gridGap: "5%", justifyContent: "space-around", margin: "200px 20px 20px 20px", height: "100vh" }}>
                <Col style={{ width: "100%", height: "50%", position: "sticky", top: "250px" }}>
                    <Row className="pic" type="grid">
                        <Col span={6}></Col>
                        <Col className="img" span={6}> <img className="img" src={`${Axios.defaults.baseURL}/${this.state.pic}`} alt="user profile" /> </Col>
                        <Col className="name" span={12}> {this.state.shopName}</Col>
                    </Row>
                    <Row className="listUserProfile" style={{ marginLeft: "16%", width: "100%" }} type="grid">
                        <Col span={8}></Col>
                        <Col className="containerList" span={16}>
                            <Row className="list" onClick={this.HandleUserInformation}> User information </Row>
                            <Row className="list" onClick={this.HandlePurchaseHistory}> Purchase history</Row>
                            <Row className="list" onClick={this.HandleServicesUsage}> Services usage</Row>
                        </Col>
                    </Row>
                </Col>

                <div style={{ border: "1px solid black", width: "100%", height: "100%" }}>
                    {this.Display()}
                </div>
            </div>

        )
    }
}
