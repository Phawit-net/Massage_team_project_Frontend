import React, { Component } from 'react'

export default class ServiceCard extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #000000", boxSizing: "border-box", margin: "30px 30px 30px 30px", width: "666px", height: "286px" }}>
                picture
                <br />
                name
                <br />
                detail
                <br />
                price
                <br />
                time
            </div>
        )
    }
}