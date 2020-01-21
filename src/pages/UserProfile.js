import React, { Component } from 'react'
import '../UserProfile.css'
// import PurChaseHist from '../component/UserProfile/PurchaseHistory'
import ServiceUsage from '../components/UserProfile/ServiceUsage'
import UserInformation from '../components/UserProfile/UserInformation'
import PurchaseHistory from '../components/UserProfile/PurchaseHistory';
import { Row, Col } from 'antd';

export default class UserProfile extends Component {
    state = {
        case: 1
    };

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

        }
    }

    render() {
        return (
            <div style={{ display: "grid", gridTemplateColumns: "25% 70%", gridGap: "5%", justifyContent: "space-around", margin: "200px 20px 20px 20px", height: "100vh" }}>
                <Row style={{ width: "100%", height: "50%", position: "sticky", top: "250px" }}>
                    <Col>
                        <Row style={{ display: "flex", flexFlow: "row wrap", justifyContent: "center", marginBottom: "10px" }} >
                            <Col> <img src="http://www.thaiticketmajor.com/variety/img_content/imgeditor/sky-mirror-beach.jpg" alt="picture" style={{ borderRadius: "50%", width: "80px", height: "80px", marginLeft: "-50%" }} /> </Col>
                            <Col style={{ marginLeft: "-5%", marginTop: "8%", fontSize: "20px" }}> shop name</Col>
                        </Row>
                        <Row className="listUserProfile" style={{ listStyle: "none", margin: "auto", width: "60%" }}>
                            <Col className="list" onClick={this.HandleUserInformation}> User information </Col>
                            <Col className="list" onClick={this.HandlePurchaseHistory}> Purchase history</Col>
                            <Col className="list" onClick={this.HandleServicesUsage}> Services usage</Col>
                        </Row>
                    </Col>
                </Row>

                <Row style={{ border: "1px solid black", width: "100%", height: "100%" }}>
                    {this.Display()}
                </Row>
            </div>
        )
    }
}
