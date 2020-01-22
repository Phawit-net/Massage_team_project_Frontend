import React, { Component } from 'react'
import { Row, Col, Form, Button,Input } from 'antd'
class Forgetpassword extends Component {
    handleSubmitForgetpassword=(e)=>{
        e.preventDefault()
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row style={{height:'100%'}}>
                <Form onSubmit={(e)=>this.handleSubmitForgetpassword}>
                    <h4>Please input your registered email</h4>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input placeholder='please input your registered email' />)}
                    </Form.Item>
                    <Form.Item/>
                    <Form.Item/>
                    <Form.Item/>
                    <Form.Item/>
                    <Form.Item>
                        <Row>
                            <Col><Button onClick={()=>this.props.handlebacktoLogin()}>Back</Button></Col>
                            <Col><Button htmlType="submit">Submit</Button></Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Row>
        )
    }
}

export default Form.create()(Forgetpassword)