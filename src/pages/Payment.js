import React, { Component } from 'react'
import { Row, Col, Card, Avatar, Radio, Steps, Button, message, Upload, Icon } from 'antd'
const { Dragger } = Upload;
const { Step } = Steps;
const steps = [
    {
        title: 'Upload Transaction slip',
        content:
            <Card>
                <h2>Please upload your transaction slip </h2>
                <Dragger>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag your slip to this area to upload</p>
                    <p className="ant-upload-hint">
                        Support only JPEG File.
    </p>
                </Dragger>
            </Card>,
    },
    {
        title: 'Confirm payment',
        content: <Card cover={<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6VPq1wKuo5ECC-RscCQKc7ka_HIdQjBhFpixOwjqAuOcVGDY9' alt='slip image'/>}>
            <Button type='primary' size='large'>Confirm</Button>
        </Card>,
    },
    {
        title: 'finished',
        content: 
        <Card>
            <Row type='flex' justify='center'>  <h1>Thank you for Booking</h1></Row>
             <Row type='flex' justify='center'><h2>Please see your payment status on your purchased history</h2></Row>
           
           
        </Card>,
    },
];
export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    render() {
        const { current } = this.state;
        return (
            <>
                <Row style={{ marginTop: '20px', marginLeft: '10%', marginRight: '10%' }}>
                    <Row>
                        <Col>
                            <h2 style={{ color: '#926F3B' }}>Booking Detail</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{ borderBlockColor: '#926F3B' }}>
                                <Row >
                                    <Col xs={24} lg={9} xl={5}>
                                        <Avatar src='https://www.honestdocs.co/system/image_attachments/images/000/034/114/medium/02._Oil_Massage_120_mins_1_%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87_-_Montra_health_and_spa____1_800.jpg' shape='square' size={200} />
                                    </Col>
                                    <Col xs={24} lg={14} xl={19}>
                                        <Row type='flex' justify='space-between'>
                                            <Col> <h2 style={{ color: '#926F3B' }}>Services name (....person)</h2></Col>
                                            <Col>
                                                <Row>
                                                    <h2 style={{ color: '#926F3B' }}>Shopname</h2>
                                                </Row>
                                                <Row>
                                                    <h3 style={{ color: '#926F3B' }}>Time</h3>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <h5>Shop description</h5>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row type='flex' justify='end' style={{ marginTop: '20px' }}>
                        <Col xs={24} md={10} lg={4}>
                            <h4>Payment Method</h4>
                        </Col>
                        <Col xs={24} md={5} lg={4}>
                            <Radio.Group value='30%'>
                                <Radio value='30%'>Advanced(30%)</Radio>
                                <Radio value='100%'>Full payment(100%)</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <Row type='flex' justify='end' style={{ marginTop: '10px' }} >
                        <Col xs={24} md={10} xl={4}>
                            <h4>Total price</h4>
                        </Col>
                        <Col xs={24} md={5} xl={4}>
                            <h4>Price</h4>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '20px', marginBottom: '40px' }}>
                        <div>
                            <Steps current={current}>
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                            <div className="steps-content" style={{marginTop:'20px'}}>{steps[current].content}</div>
                            <div className="steps-action" style={{marginTop:'20px'}}>
                                {current < steps.length - 1 && (
                                    <Button type="primary" onClick={() => this.next()}>
                                        Next
            </Button>
                                )}
                                {current === steps.length - 1 && (
                                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                        Done
            </Button>
                                )}
                                {current > 0 && (
                                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                        Previous
            </Button>
                                )}
                            </div>
                        </div>
                    </Row>
                </Row>
            </>
        )
    }
}
