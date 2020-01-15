import React, { Component } from 'react'
import ServiceCard from '../components/ShopDetails/ServiceCard'
// import Header from '../components/Generals/Header/Header'
// import Footer from '../components/Generals/Footer/Footer'

export default class ShopDetails extends Component {
    render() {
        return (
            <div>
             <img src="http://www.thaiticketmajor.com/variety/img_content/imgeditor/sky-mirror-beach.jpg" alt="" style = {{ width: "100vw", height: "40vh" , position: "absolute", top:"-200px", zIndex:"-1"}}/>
            <ServiceCard />
            </div>
                
        )
    }
}
