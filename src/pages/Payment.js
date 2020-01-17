import React, { Component } from 'react'
import { Row, Col, Card, Avatar, Radio, Steps, Button, Upload, Icon } from 'antd'
import Axios from '../config/axios.setup'
import { connect } from 'react-redux'
import {clearBooking} from '../redux/actions/actions'
const { Dragger } = Upload;
const { Step } = Steps;


class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            file: '',
            previewImage: '',
            totalprice: '',
            paymentMethod: 'pay30%'
        };
    }
    componentDidMount() {
        this.calculateTotalprice()
    }
    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }
    confirm() {
        const booking = this.props.booking[0]
        let payload = new FormData()
        payload.append('paymentphoto',this.state.file)
        payload.append('numberofuser', booking.person)
        payload.append('price',this.state.totalprice)
        payload.append('starttime', booking.startTime)
        payload.append('endtime', booking.endTime)
        payload.append('date', booking.date)
        payload.append('paymentmethod', this.state.paymentMethod)
        payload.append('servicename', booking.service.serviceName)
        payload.append('shopname', booking.service.shop.shopName)
        payload.append('serviceid', booking.service.id)
        payload.append('shopid', booking.service.shop_id)
        Axios.post('/historystatement', payload)
            .then(() => {
                const current = this.state.current + 1;
                this.setState({ current });
                setTimeout(
                 ()=>{window.location.replace('/home')
                this.props.clearBooking()},4000)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }
    handleChange = (e) => {
        let image = URL.createObjectURL(e.file.originFileObj)
        this.setState({
            previewImage: image,
            file: e.file.originFileObj
        })
    }
    calculateTotalprice = () => {
        if (this.state.paymentMethod === 'pay30%') {
            this.setState({
                totalprice: Math.round(this.props.booking[0].price * 0.3)
            })
        } else {
            this.setState({
                totalprice: this.props.booking[0].price
            })
        }
    }
    handleSelectPaymentMethod = (e) => {
        this.setState(
            {
                paymentMethod: e.target.value
            }, () => this.calculateTotalprice())
    }
    render() {
        const booking = this.props.booking[0]
        const { current } = this.state;
        const steps = [
            {
                title: 'Upload Transaction slip',
                content:
                    <Card>
                        <h2>Please upload your transaction slip </h2>
                        <Dragger onChange={this.handleChange}>
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
                content: <Card cover={<img src={this.state.previewImage} alt='slip image' />}>
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
        return (
            <>
                <Row style={{ marginTop: '200px', marginLeft: '10%', marginRight: '10%' }}>
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
                                        <Avatar src={booking.service.serviceProfilePic} shape='square' size={200} />
                                    </Col>
                                    <Col xs={24} lg={14} xl={19}>
                                        <Row type='flex' justify='space-between'>
                                            <Col> <h2 style={{ color: '#926F3B' }}>{`${booking.service.serviceName} (${booking.person} person)`}</h2></Col>
                                            <Col>
                                                <Row>
                                                    <h2 style={{ color: '#926F3B' }}>{booking.service.shop.shopName}</h2>
                                                </Row>
                                                <Row>
                                                    <h3 style={{ color: '#926F3B' }}>{`${booking.date}`}</h3>
                                                </Row>
                                                <Row>
                                                    <h3 style={{ color: '#926F3B' }}>{`${booking.startTime} - ${booking.endTime}`}</h3>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <h5>{booking.service.serviceDescription}</h5>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row type='flex' justify='end' style={{ marginTop: '20px' }}>
                        <Col xs={24} md={6} lg={4}>
                            <h4>Payment Method</h4>
                        </Col>
                        <Col xs={24} md={4} lg={4}>
                            <Radio.Group defaultValue='pay30%' onChange={e => this.handleSelectPaymentMethod(e)}>
                                <Radio value='pay30%'>Advanced(30%)</Radio>
                                <Radio value='payFullPrice'>Full payment(100%)</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <Row type='flex' justify='end' style={{ marginTop: '10px' }} >
                        <Col xs={24} md={6} xl={4}>
                            <h3>Total price</h3>
                        </Col>
                        <Col xs={24} md={2} xl={4}>
                            <h3>{`${this.state.totalprice} Baht`}</h3>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '20px', marginBottom: '40px' }}>
                        <div>
                            <Steps current={current}>
                                {steps.map(item => (
                                    <Step key={item.title} title={item.title} />
                                ))}
                            </Steps>
                            <div className="steps-content" style={{ marginTop: '20px' }}>{steps[current].content}</div>
                            <div className="steps-action" style={{ marginTop: '20px' }}>
                                {current === 0 && (
                                    <Button type="primary" disabled={this.state.file===''?true:false} onClick={() => this.next()}>
                                        Next
            </Button>
                                )}
                                {current === 1 && (
                                    <Button type="primary" onClick={() => this.confirm()}>
                                        Confirm
            </Button>
                                )}

                                {current === 1 && (
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
const mapStateToProps = (state) => {
    return {
        booking: state.booking
    }
}
const mapDispatchToProps = {
    clearBooking: clearBooking,
  }
export default connect(mapStateToProps, mapDispatchToProps)(Payment)