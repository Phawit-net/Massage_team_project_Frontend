import React, { Component } from 'react'
import ServiceCard from '../components/ShopDetails/ServiceCard'


export default class ShopDetails extends Component {
    render() {
        return (
            <div>
             <img src="http://www.thaiticketmajor.com/variety/img_content/imgeditor/sky-mirror-beach.jpg" alt="" style = {{ width: "100%", height: "30%" , position: "absolute", top:"-200px", zIndex:"-1"}}/>
            <ServiceCard />
            </div>
                
        )
    }
}
