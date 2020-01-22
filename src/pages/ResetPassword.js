import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Row, Col,Button } from 'antd'

export default class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: 'error'
        }
    }
    renderContent() {
        switch (this.state.status) {
            case 'error':
                return ( 
                    <Row style={{ marginTop: '200px',marginLeft:'10%',marginRight:'10%',marginBottom:'200px'}}>
                    <Col >
                    <h1 style={{fontSize:'100px'}}>Oops! Sorry</h1>
                    <h2>We can't find the page that you are looking for</h2>
                    <h2>Please contact admin </h2>
                    <Link to='/home'><span style={{fontSize:'20px'}}>Back To Home</span></Link>
                    </Col> 
                    </Row>
            )
            case 'success':
                return(
                    <Row>

                    </Row>
                )
        }
    }
    render() {
        return (
           <>
                {this.renderContent()}
           </>
        )
    }
}
