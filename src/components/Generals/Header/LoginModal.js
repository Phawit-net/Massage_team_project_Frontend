import React, { Component } from 'react'
import { Modal, Button, Row, Col, Card, Input, Form, Icon } from 'antd'
import styles from './Header.module.css'
import Axios from '../../../config/axios.setup'
import jwtDecode from 'jwt-decode'
import { login } from '../../../redux/actions/actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Forgetpassword from './Forgetpassword'
class LoginModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectform:false,
            notification: ''
        }
    }
    handleSignin = (e) => {
        e.preventDefault()   
        this.props.form.validateFields((err,values)=>{ 
            console.log(values)
            if(!err){  
            const username = values.username
            const password = values.password 
            Axios.post('/loginUser', { username, password })
            .then(response => {
                console.log(response.data)
                const user = jwtDecode(response.data.token)
                this.props.login(user, response.data.token);
                this.props.handleCancel();
                this.props.form.resetFields();
                this.setState({
                    notification: ''
                })
            })
            .catch(err => {
                this.props.form.resetFields()
                this.setState({
                    notification: err.response.data
                })
            })
        }else{
            return 
        }
        })
    };
    handleClosesignin = () => {
        this.props.handleCancel()
        this.props.form.resetFields();
        this.handlebacktoLogin()
        this.setState({
            notification: ''
        })
    }
    handlebacktoLogin=()=>{
        this.setState({
            selectform:false
        })
    }
    renderFormComponent(getFieldDecorator){
        if(this.state.selectform===false){
          return(
            <Row>
            <h5 style={{color:'red'}}>{this.state.notification}</h5>
            <Form onSubmit={(e) => this.handleSignin(e)} className="login-form">
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
                    <Row><Button type='link' style={{padding:'0'}} onClick={()=>this.setState({selectform:true})}>Forget your password?</Button></Row>
                    <Row> <Link to='/signup' onClick={()=>this.handleClosesignin()}>Signup for new account</Link></Row>
                </Form.Item>
                <Form.Item>
                    <Row type='flex' justify='center'>
                        <Col>
                            <Button htmlType="submit" style={{ backgroundColor: '#9E4624' }} >
                                <span style={{ color: 'white' }}>Log in</span>
                            </Button>
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </Row>
          )
        }else{
            return <Forgetpassword handlebacktoLogin={this.handlebacktoLogin}/>
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <Button type='link' style={{ color: '#926f3b' }} onClick={() => this.props.showLoginModal()}><span className={styles.menuoption} >Login</span></Button>
                <Modal
                    bodyStyle={{ backgroundImage: `url(LoginModalBackground.jpg)`, backgroundSize: 'cover' }}
                    width={800}
                    visible={this.props.loginvisible}
                    onCancel={this.handleClosesignin}
                    footer={null}
                >
                    <Row style={{ marginTop: '20px' }}>
                        <Col md={10} lg={12}>
                        </Col>
                        <Col md={14} lg={12}>
                            <Card style={{ opacity: '0.8' }}>
                                <Row type='flex' justify='center' >
                                    <Col><img src='/NuadThaiLogo.png' alt='Logo' style={{ width: '150px', height: '150px' }} /></Col>
                                </Row>
                                <Row>
                                    <h5 style={{color:'red'}}>{this.state.notification}</h5>
                                    <Form onSubmit={(e) => this.handleSignin(e)} className="login-form">
                                        <Form.Item>
                                            {getFieldDecorator('username', {
                                                rules: [{ required: true, message: 'Please input your username!' }],
                                            })(
                                                <Input
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="Username"
                                                    onChange={e => this.setState({ username: e.target.value })}
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
                                                    onChange={e => this.setState({ password: e.target.value })}
                                                />,
                                            )}
                                        </Form.Item>
                                        <Form.Item>
                                            <Row><a href='#'>Forget your password?</a></Row>
                                            <Row> <a href='/signup'>Signup for new account</a></Row>
                                        </Form.Item>
                                        <Form.Item>
                                            <Row type='flex' justify='center'>
                                                <Col>
                                                    <Button htmlType="submit" style={{ backgroundColor: '#9E4624' }} >
                                                        <span style={{ color: 'white' }}>Log in</span>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form.Item>
                                    </Form>
                                </Row>
                              {this.renderFormComponent(getFieldDecorator)}
                            </Card>
                        </Col>
                    </Row>
                </Modal>
            </>
        )
    }
}
const mapDispatchToProps = {
    login: login
}

export default connect(null, mapDispatchToProps)(Form.create()(LoginModal))
