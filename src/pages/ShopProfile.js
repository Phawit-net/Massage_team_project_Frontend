import React, { Component } from 'react'
import CreateService from '../components/ShopProfile/CreateService'
import ServiceHistory from '../components/ShopProfile/ServiceHistory'

import ShopInformation from "../components/ShopProfile/ShopInformation";
import ApprovePurchase from '../components/ShopProfile/ApprovePurchase';
export default class ShopProfile extends Component {
    render() {
        return (
            <div>
                {/* <CreateService/> */}
                {/* <ServiceHistory/> */}
                <ApprovePurchase/>
                {/* <ShopInformation/> */}
            </div>
        )
    }
}
