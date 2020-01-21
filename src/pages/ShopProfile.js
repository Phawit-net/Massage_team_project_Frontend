import React, { Component } from 'react'
import ShopInformation from '../components/ShopProfile/ShopInformation'
import CreateService from '../components/ShopProfile/CreateService'
import ServiceHistory from '../components/ShopProfile/ServiceHistory'
import ApprovePurchase from '../components/ShopProfile/ApprovePurchase'
import CustomerUsage from '../components/ShopProfile/CustomerUsage'
import {Row, Col} from 'antd';
import '../Shopprofiles.css'




export default class ShopProfile extends Component {
    state = {
        case : 1
    };

    HandleShopInformation = () => {
        this.setState({case:1})
    };

    HandleCreateService  = () => {
        this.setState({case:2})
    };


    HandleServiceHistory  = () => {
        this.setState({case:3})
    };


    HandleApprovePurchase  = () => {
        this.setState({case:4})
    };


    HandleCustomerUsage  = () => {
        this.setState({case:5})
    };

    Show = ()=>{  switch (this.state.case){

        case 1: return <ShopInformation/>;

        case 2: return <CreateService/>;

        case 3: return <ServiceHistory/>;
        
        case 4: return <ApprovePurchase/>;

        case 5 : return <CustomerUsage/>;
    }};

    render() {
        return (
            <div style={{display:"grid", gridTemplateColumns:"25% 70%", gridGap:"5%",justifyContent:"space-around", margin:"200px 20px 20px 20px", height:"100vh"}}>
            <div style={{ width:"100%", height:"50%", position:"sticky",top:"250px"}}>
                <Row style={{display:"flex", flexFlow:"row wrap", justifyContent:"center", marginBottom:"10px"}} >
                    <Col> <img src="http://www.thaiticketmajor.com/variety/img_content/imgeditor/sky-mirror-beach.jpg" alt="picture" style={{borderRadius:"50%", width: "80px", height:"80px", marginLeft:"-50%"}}/> </Col>
                    <Col style={{marginLeft:"-5%", marginTop:"8%", fontSize:"20px"}}> shop name</Col>
                </Row>
                <Row className="listUserProfile" style={{listStyle: "none", margin:"auto", width:"100%"}}>
                    <Col className="containerList">
                    <Row className="list" onClick={this.HandleShopInformation}> Shop information </Row>
                    <Row className="list" onClick={this.HandleCreateService}> Create Service </Row>
                    <Row className="list" onClick={this.HandleServiceHistory}> Services history</Row>
                    <Row className="list" onClick={this.HandleApprovePurchase}> Approve purchase </Row>
                    <Row className="list" onClick={this.HandleCustomerUsage}> Customer usage </Row>
                    </Col>
                </Row>
            </div>

            <div style={{border:"1px solid black", width:"100%", height:"100%"}}>
                { this.Show()}
            </div>
        </div>
        )
}
}