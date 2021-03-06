import React, { Component } from 'react'
import { Row, Col, Form, Input, Select, Button, Divider, Card, message, Typography } from 'antd'
import styles from './ContactUs.module.css'
import Axios from '../config/axios.setup'
const { Option } = Select;

class ContactUs extends Component {
    handleSubmit(e) {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                Axios.post('/contact', {
                    sender: values.sender,
                    receiver: values.receiver,
                    title: values.title,
                    message: values.message
                })
                    .then(() => {
                        message.success(`your mail has been sent to ${values.receiver}`)
                        this.props.form.resetFields()
                    })
                    .catch(err => {
                        console.log(err.response.data)
                        message.error('something wrong')
                    })
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <Row style={{ marginTop: '140px' }} id='About this project'>
                    <Row type='flex' >
                        <img src='about.jpg' style={{ height: '100%', width: '100%' }} alt='aboutus top pic' />
                    </Row>
                    <Row style={{ marginLeft: '10%', marginRight: '10%', marginTop: '20px' }} type='flex' align='middle' gutter={[32, 0]} >
                        <Col span={12}>
                            <Card bodyStyle={{ padding: '0' }} cover={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTMBYQmEreTAtSIicmy2DTOnefXW9WZvBmFiMh_upLaq6XG2az' alt='project_description_image' />} />
                        </Col>
                        <Col span={12}>
                            <h2 style={{ textIndent: '50px', color: '#926f3b' }}>This purpose of creating this project is to support foreign who love Thai massage to easily find a thai massage shop,On the other hand a SME thai massage shops can easily find their customer through our website by posting their services. </h2>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '50px' }} type='flex' justify='center' id='Our team' >
                        <Row>
                            <h1 style={{ textAlign: 'center' }}>Our Team</h1>
                            <h2><b>Click our picture to see our git hub</b></h2>
                            <h3 style={{ textAlign: 'center' }}> if you interest in our project please hire us</h3>
                        </Row>
                    </Row>
                    <Row type='flex' justify='center' align='middle' className={styles.cover}>
                        <a href='https://github.com/panuwat33586' target='_blank' rel="noopener noreferrer" style={{ textAlign: 'center' }}>
                            <Col className={styles.person}>
                                <Typography strong style={{ fontSize: '30px', color: '#926F3B' }}>A</Typography>
                                <img src='a.png' alt='a' style={{ width: '50%', height: '50%' }} />
                            </Col>
                        </a>
                        <a href='https://github.com/bebiiez' target='_blank' rel="noopener noreferrer" style={{ textAlign: 'center' }}>
                            <Col className={styles.person}>
                                <Typography strong style={{ fontSize: '30px', color: '#926F3B' }}>Bebie</Typography>
                                <img src='bb.png' alt='bebie' style={{ width: '50%', height: '50%' }} />
                            </Col>
                        </a>
                        <a href='https://github.com/Apichai123' target='_blank' rel="noopener noreferrer" style={{ textAlign: 'center' }}>
                            <Col className={styles.person}>
                                <Typography strong style={{ fontSize: '30px', color: '#926F3B' }}>Beer</Typography>
                                <img src='beer.png' alt='beer' style={{ width: '50%', height: '50%' }} />
                            </Col>
                        </a>
                        <a href='https://github.com/atiwatice' target='_blank' rel="noopener noreferrer" style={{ textAlign: 'center' }}>
                            <Col className={styles.person}>
                                <Typography strong style={{ fontSize: '30px', color: '#926F3B' }}>Ice</Typography>
                                <img src='ice.png' alt='ice' style={{ width: '50%', height: '50%' }} />
                            </Col>
                        </a>
                        <a href='https://github.com/ohmohmpr' target='_blank' rel="noopener noreferrer" style={{ textAlign: 'center' }}>
                            <Col className={styles.person}>
                                <Typography strong style={{ fontSize: '30px', color: '#926F3B' }}>Ohm</Typography>
                                <img src='ohm.png' alt='ohm' style={{ width: '50%', height: '50%' }} />
                            </Col>
                        </a>
                        <a href='https://github.com/Phawit-net' target='_blank' rel="noopener noreferrer" style={{ textAlign: 'center' }}>
                            <Col className={styles.person}>
                                <Typography strong style={{ fontSize: '30px', color: '#926F3B' }}>Net</Typography>
                                <img src='net.png' alt='net' style={{ width: '50%', height: '50%' }} />
                            </Col>
                        </a>
                        <a href='https://github.com/Bhornumnard' target='_blank' rel="noopener noreferrer" style={{ textAlign: 'center' }}>
                            <Col className={styles.person}>
                                <Typography strong style={{ fontSize: '30px', color: '#926F3B' }}>Tuk</Typography>
                                <img src='tuk.png' alt='tuk' style={{ width: '50%', height: '50%' }} />
                            </Col>
                        </a>
                        <a href='https://github.com/apiwutnat' target='_blank' rel="noopener noreferrer" style={{ textAlign: 'center' }}>
                            <Col className={styles.person}>
                                <Typography strong style={{ fontSize: '30px', color: '#926F3B' }}>Nat</Typography>
                                <img src='nat.png' alt='nat' style={{ width: '50%', height: '50%' }} />
                            </Col>
                        </a>
                    </Row>
                    <Row type='flex' justify='center' style={{ marginTop: '50px' }}>
                        <Col>
                            <Row type='flex' justify='start'>
                                <h1>Contact us via email</h1>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Form layout='vertical' onSubmit={(e) => this.handleSubmit(e)}>
                                    <Form.Item label='Your Email'>
                                        {getFieldDecorator('sender',
                                            { rules: [{ required: true, message: 'Please input your email' }] }
                                        )(
                                            <Input style={{ width: '300px' }} placeholder='please input your email' />
                                        )}
                                    </Form.Item>
                                    <Form.Item label='Email'>
                                        {getFieldDecorator('receiver',
                                            { rules: [{ required: true, message: 'Please select email' }] }
                                        )(
                                            <Select style={{ width: '300px' }} placeholder='please select an email'>
                                                <Option value='panuwat33586@gmail.com'>A (panuwat33586@gmail.com)</Option>
                                                <Option value='nanoic_ohm@hotmail.com'>Ohm (nanoic_ohm@hotmail.com)</Option>
                                                <Option value='natthalada.p@gmail.com'>Bebie (natthalada.p@gmail.com)</Option>
                                                <Option value='neztle.net@gmail.com'>Net (neztle.net@gmail.com)</Option>
                                                <Option value='boonsinatiwat2536@gmail.com'>Ice (boonsinatiwat2536@gmail.com)</Option>
                                                <Option value='Tak_25908@hotmail.com'>Tak (Tak_25908@hotmail.com)</Option>
                                                <Option value='Rusefer@gmail.com'>Beer (Rusefer@gmail.com)</Option>
                                            </Select>
                                        )}
                                    </Form.Item>
                                    <Form.Item label='Title'>
                                        {getFieldDecorator('title',
                                            { rules: [{ required: true, message: 'Please input title' }] }
                                        )(
                                            <Input style={{ width: '300px' }} placeholder='please input title' />
                                        )}
                                    </Form.Item>
                                    <Form.Item label='Message'>
                                        {getFieldDecorator('message',
                                            { rules: [{ required: true, message: 'Please input your message' }] }
                                        )(
                                            <Input.TextArea style={{ width: '400px' }} autoSize={{ minRows: 5, maxRows: 5 }} placeholder='please input message that you want to inform ' />
                                        )}
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className={styles.button}>
                                            Send
                                 </Button>
                                    </Form.Item>
                                </Form>
                            </Row>
                        </Col>
                        <Col>
                            <Divider style={{ height: '100%' }} type='vertical' />
                        </Col>
                        <Col>
                            <Row>
                                <Button type='link' href='#About this project' style={{ fontSize: '20px', color: '#926f3b' }}>About this project</Button>
                            </Row>
                            <Row><Button type='link' href='#Our team' style={{ fontSize: '20px', color: '#926f3b' }}>Our Team</Button> </Row>
                        </Col>
                    </Row>
                </Row>
            </>
        )
    }
}

export default Form.create()(ContactUs)
