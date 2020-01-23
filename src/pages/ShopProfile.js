import React, { Component } from 'react'
import ShopInformation from '../components/ShopProfile/ShopInformation'
import CreateService from '../components/ShopProfile/CreateService'
import ServiceHistory from '../components/ShopProfile/ServiceHistory'
import ApprovePurchase from '../components/ShopProfile/ApprovePurchase'
import CustomerUsage from '../components/ShopProfile/CustomerUsage'
import { Row, Col } from 'antd';
import Axios from 'axios'
import '../Shopprofiles.css'
export default class ShopProfile extends Component {
    state = {
        case: 1,
        id: "",
        shopName: "",
        pic: "",
    };

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

    HandleShopInformation = () => {
        this.setState({ case: 1 })
    };

    HandleCreateService = () => {
        this.setState({ case: 2 })
    };


    HandleServiceHistory = () => {
        this.setState({ case: 3 })
    };


    HandleApprovePurchase = () => {
        this.setState({ case: 4 })
    };


    HandleCustomerUsage = () => {
        this.setState({ case: 5 })
    };

    Show = () => {
        switch (this.state.case) {

            case 1: return <ShopInformation />;

            case 2: return <CreateService />;

            case 3: return <ServiceHistory />;

            case 4: return <ApprovePurchase />;

            case 5: return <CustomerUsage />;
        }
    };

    render() {
        return (
            <div style={{ display: "grid", gridTemplateColumns: "25% 70%", gridGap: "5%", justifyContent: "space-around", margin: "200px 20px 20px 20px"}}>
                <Col style={{ width: "100%", height: "50%", position: "sticky", top: "250px" }}>
                    <Row className="pic" type="grid">
                        <Col span={6}></Col>
                        <Col className="img" span={6}> <img className="img" src={`${Axios.defaults.baseURL}/${this.state.pic}`} alt="picture" /> </Col>
                        <Col className="name" span={12}> {this.state.shopName}</Col>
                    </Row>
                    <Row className="listUserProfile" style={{ marginLeft: "16%", width: "100%" }} type="grid">
                        <Col span={8}></Col>
                        <Col className="containerList" span={16}>
                            <Row className="list" onClick={this.HandleShopInformation}> Shop information </Row>
                            <Row className="list" onClick={this.HandleCreateService}> Create Service </Row>
                            <Row className="list" onClick={this.HandleServiceHistory}> Services history</Row>
                            <Row className="list" onClick={this.HandleApprovePurchase}> Approve purchase </Row>
                            <Row className="list" onClick={this.HandleCustomerUsage}> Customer usage </Row>
                        </Col>
                    </Row>
                </Col>

                <div style={{ border: "1px solid black", width: "100%", height: "100%" }}>
                    {this.Show()}
                </div>
            </div>
        )
    }


}