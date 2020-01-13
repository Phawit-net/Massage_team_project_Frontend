import React, { Component } from 'react'
import { Modal, Button, Row, Col, Card, Input, Form, Icon } from 'antd'
import styles from './Header.module.css'
import Logo from '../../../picture/NuadThaiLogo.png'
import LoginModalBackground from '../../../picture/LoginModalBackground.jpg'

class LoginModal extends Component {

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <Button type='link' onClick={() => this.props.showLoginModal()}><span className={styles.menuoption} >Login</span></Button>
                <Modal
                    bodyStyle={{ backgroundImage: `url(${LoginModalBackground})`, backgroundSize: 'cover'}}
                    width={800}
                    visible={this.props.loginvisible}
                    footer={null}
                >
                    <Row style={{ marginTop: '20px' }}>
                        <Col  md={10} lg={12}>
                        </Col>
                        <Col  md={14} lg={12}>
                            <Card style={{opacity:'0.8'}}>
                                <Row type='flex' justify='center' >
                                    <Col><img src={Logo} alt='Logo' style={{ width: '150px', height: '150px' }} /></Col>
                                </Row>
                                <Row>
                                    <Form onSubmit={this.handleSubmit} className="login-form">
                                        <Form.Item>
                                            {getFieldDecorator('username', {
                                                rules: [{ required: true, message: 'Please input your username!' }],
                                            })(
                                                <Input
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="Username"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: 'Please input your Password!' }],
                                            })(
                                                <Input
                                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    type="password"
                                                    placeholder="Password"
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            <Row><a href='#'>Forget your password?</a></Row>
                                            <Row> <a href='#'>Signup for new account</a></Row>
                                        </Form.Item>
                                        <Form.Item>
                                            <Row type='flex' justify='center'>
                                                <Col>
                                                <Button  htmlType="submit" style={{backgroundColor:'#9E4624'}} >
                                               <span style={{color:'white'}}>Log in</span> 
                                               </Button>
                                               </Col> 
                                            </Row>
                                            
                                        </Form.Item>
                                    </Form>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Modal>
            </>
        )
    }
}
export default Form.create()(LoginModal);
