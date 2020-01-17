import React, { Component } from 'react'
import '../App.css'
// import PurChaseHist from '../component/UserProfile/PurchaseHistory'
 import ServiceUsage from '../components/UserProfile/ServiceUsage'
// import UserInformation from '../components/UserProfile/UserInformation'

export default class UserProfile extends Component {

    
    render() {
        return (
            <div> 
                    {/* Add component in this div */}
                    <ServiceUsage/>

            </div>
        )
    }
}
