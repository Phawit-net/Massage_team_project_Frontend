import React, { Component } from 'react'
import '../App.css'
// import PurChaseHist from '../component/UserProfile/PurchaseHistory'
// import ServiceUsage from '../component/UserProfile/ServiceUsage'
// import UserInformation from '../component/UserProfile/UserImformation'

export default class UserProfile extends Component {

    state = {
        display: ''
    }

    HandlePersonalInformation = ()=>{
        this.setState({display: 1})
    }
    HandlePurchasedHistory =()=>{
        this.setState({display: 2})
    }

    HandleServiceUsage = ()=>{
        this.setState({display:3})
    }

    HandleshopLink = ()=>{
        this.setState({display:4})
    }

    render() {
        return (
            <div style={{display:"grid", gridTemplateColumns:"25% 70%", gridGap:"5%",justifyContent:"space-around", margin:"20px", height:"100vh"}}>
                <div style={{ width:"100%", height:"35%", position:"sticky",top:"120px"}}>
                    <div style={{display:"flex", flexFlow:"row wrap", justifyContent:"center", marginBottom:"10px"}} >
                        <div> <img src="http://www.thaiticketmajor.com/variety/img_content/imgeditor/sky-mirror-beach.jpg" alt="picture" style={{borderRadius:"50%", width: "80px", height:"80px"}}/> </div>
                        <div style={{marginLeft:"14px", marginTop:"30px", fontSize:"20px"}}> user name</div>
                    </div>
                    <ul className="listUserProfile" style={{listStyle: "none", margin:"auto"}}>
                        <li Onclick={this.HandlePersonalInformation}> Personal information </li>
                        <li onClick={this.HandlePurchasedHistory}> Purchased history </li>
                        <li onClick={this.HandleServiceUsage}> Services Usage</li>
                        <li onClick={this.HandleshopLink}> Shop Link </li>
                    </ul>
                </div>

                <div style={{border:"1px solid black", width:"100%", height:"100%"}}>

                    {/* Add component in this div */}
                    {this.state(display => {
                        switch(display){
                            // case 1: return <UserInformation/>;

                            // case 2: return <PurChaseHis/>;

                            // case 3: return <ServiceUsage/>;
                                                        
                            // case 4: return <ShopLink/>;
                        }
                     })}
                </div>

            </div>
        )
    }
}
