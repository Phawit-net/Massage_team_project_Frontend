import React, { Component } from 'react'
import '../App.css'
// import PurChaseHist from '../component/UserProfile/PurchaseHistory'
import ServiceUsage from '../components/UserProfile/ServiceUsage'
import UserInformation from '../components/UserProfile/UserInformation'
import PurchaseHistory from '../components/UserProfile/PurchaseHistory';

export default class UserProfile extends Component {
    state = {
        case : 1
    };

    HandleUserInformation = ()=> {
        this.setState ({case:1})
    };

    HandlePurchaseHistory= ()=>{
        this.setState({case:2})
    };

    HandleServicesUsage = () => {
        this.setState({case:3})
    };

    HandleShopLink =()=>{
        this.setState({case:4})
    };

    Display =() => {
        switch(this.state.case){
            case 1: return <UserInformation/>;

            case 2: return <PurchaseHistory/>;

            case 3: return <ServiceUsage/>;
                                        
            // case 4: return <ShopLink/>;
        }
     }
    
    render() {
        return (
            <div style={{display:"grid", gridTemplateColumns:"25% 70%", gridGap:"5%",justifyContent:"space-around", margin:"200px 20px 20px 20px", height:"100vh"}}>
            <div style={{ width:"100%", height:"50%", position:"sticky",top:"250px"}}>
                <div style={{display:"flex", flexFlow:"row wrap", justifyContent:"center", marginBottom:"10px"}} >
                    <div> <img src="http://www.thaiticketmajor.com/variety/img_content/imgeditor/sky-mirror-beach.jpg" alt="picture" style={{borderRadius:"50%", width: "80px", height:"80px", marginLeft:"-50%"}}/> </div>
                    <div style={{marginLeft:"-5%", marginTop:"8%", fontSize:"20px"}}> shop name</div>
                </div>
                <ul className="listUserProfile" style={{listStyle: "none", margin:"auto", width:"100%"}}>
                    <li Onclick={this.HandleUserInformation}> User information </li>
                    <li onClick={this.HandlePurchaseHistory}> Purchase history</li>
                    <li onClick={this.HandleServicesUsage}> Services usage</li>
                    <li onClick={this.HandleShopLink}> Shop link </li>
                </ul>
            </div>

            <div style={{border:"1px solid black", width:"100%", height:"100%"}}>
                { this.Display()}
            </div>
        </div>
        )
    }
}
