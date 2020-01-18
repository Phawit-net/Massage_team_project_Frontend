import React, { Component } from 'react'
import { Row, Col, Form, Input, Select, Button, Divider, Card } from 'antd'
import testmodel from '../picture/test model.png'
import styles from './ContactUs.module.css'
import aboutus from '../picture/about us.jpg'
const { TextArea } = Input;
const { Option } = Select;
export default class ContactUs extends Component {
    render() {
        return (
            <>
                <Row style={{ marginTop: '150px' }} id='About this project'>
                    <Row type='flex' style={{ height: '700px' }} >
                        <img src={aboutus} style={{ height: '100%', width: '100%' }} />
                    </Row>
                    <Row style={{ marginLeft: '10%', marginRight: '10%', marginTop: '20px' }} type='flex' align='middle' gutter={[32, 0]} >
                        <Col span={12}>
                            <Card bodyStyle={{ padding: '0' }} cover={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTMBYQmEreTAtSIicmy2DTOnefXW9WZvBmFiMh_upLaq6XG2az' alt='project description image' />} />
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
                        <a href='https://github.com/panuwat33586' target='_blank'>
                            <Col className={styles.person}>
                                <h1>A</h1>
                                <img src={testmodel} alt='test model' />
                            </Col>
                        </a>
                        <Col className={styles.person}>
                            <h1>A</h1>
                            <img src={testmodel} alt='test model' />
                        </Col>
                        <Col className={styles.person}>
                            <h1>A</h1>
                            <img src={testmodel} alt='test model' />
                        </Col>
                    </Row>
                    <Row type='flex' justify='center' gutter={[16, 0]} style={{ marginTop: '50px' }}>
                        <Col>
                            <Row type='flex' justify='start'>
                                <h1>Contact us via email</h1>
                            </Row>
                            <Row type='flex' justify='start'>
                                <Form layout='vertical'>
                                    <Form.Item label='Email'>
                                        <Select style={{ width: '300px' }} placeholder='please select an email'>
                                            <Option value='panuwat33586@gmail.com'>A (panuwat33586@gmail.com)</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item label='Title'>
                                        <Input style={{ width: '300px' }} placeholder='please input title' />
                                    </Form.Item>
                                    <Form.Item label='Message'>
                                        <TextArea style={{ width: '400px' }} autoSize={{ minRows: 5, maxRows: 5 }} placeholder='please input message that you want to inform ' />
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
                                <Button type='link' href='#About this project' style={{fontSize:'20px',color: '#926f3b' }}>About this project</Button>
                            </Row>
                            <Row><Button type='link' href='#Our team' style={{fontSize:'20px',color: '#926f3b' }}>Our Team</Button> </Row>
                        </Col>
                    </Row>
                </Row>
            </>
        )
    }
}
