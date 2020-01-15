import React, { Component } from 'react'
import { Row, Col, InputNumber, Form, DatePicker, TimePicker, Button, Modal, Avatar, message } from 'antd'
import moment from 'moment';

import { withRouter } from 'react-router-dom'
import Axios from '../../config/axios.setup'
import { connect } from 'react-redux';
import { addBooking } from "../../redux/actions/actions";
import styles from './BookingModal.module.css'

class BookingModal extends Component {
  state = {
    serviceList: [],
    shopList: [],
    personValue: 1,
    dateValue: '',
    startValue: '',
    endValue: '',
    bookingvisible: false
  }

  componentDidMount() {
    let targetServiceID = 1;
    Axios.get(`http://localhost:8080/servicesDetail?id=${targetServiceID}`).then(
      result => {
        this.setState({
          serviceList: result.data,
          shopList: result.data.shop
        });
      }
    );
  }

  showBookingModal = () => {
    this.setState({
      bookingvisible: true,
    });
  };

  hideBookingModal = e => {
    this.setState({
      bookingvisible: false,
    });
  };

  handleAdd1hr(start, startString) {
    this.setState({ startValue: startString })
    this.props.form.setFieldsValue({
      endTime: moment(this.add1Hour(start), 'HH:mm'),
    });
  }

  add1Hour(x) {
    let startDate = moment(x)
    let onehour = startDate.startOf('hour').add(1, 'hours').format('HH:mm')
    this.setState({ endValue: onehour })
    return onehour
  }

  handleSubmit(service) {
    this.props.form.validateFields((err, values) => {
      let person = values.person
      let date = this.state.dateValue
      let startTime = this.state.startValue
      let endTime = this.state.endValue
      let price = person * this.state.serviceList.price
      
      if (service && person && date && startTime && endTime && price) {
        this.props.addBooking(service, person, date, startTime, endTime, price);
        this.props.history.push('/payment')
      }else{
        message.error('Please input your booking information');
      }
    })
  };


  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const { getFieldDecorator } = this.props.form;
    let service = this.state.serviceList

    return (
      <>
        <Button type='link' className={styles.button} onClick={() => this.showBookingModal()}>Booking</Button>
        <Modal
          width={800}
          visible={this.state.bookingvisible}
          onCancel={this.hideBookingModal}
          footer={null}
        >
          <Row className={styles.borderBox}>
            <Col span={24} style={{ width: '100%', height: '100%' }}>

              <Row className={styles.borderBoxSmall} type='flex' justify='space-around'>
                <Col xs={24} lg={9} xl={8} style={{textAlign: 'center'}}>
                  <Avatar src={service.serviceProfilePic} alt="" shape='square' size={200} style={{ margin: '5px' }} />
                </Col>

                <Col xs={24} lg={14} xl={16}>
                  <Row>
                    <Col span={16} style={{ color: '#926F3B' }}>
                      <h3>{service.serviceName}</h3>
                      <h5>({this.state.personValue} person)</h5>
                    </Col>
                    <Col span={8}>
                      <Row><h4>{this.state.shopList.shopName}</h4></Row>
                      <Row><h5>Time: </h5><h6>{this.state.startValue ? `${this.state.startValue}-${this.state.endValue}` : undefined}</h6></Row>
                      <Row><h5>Date: </h5><h6>{this.state.dateValue}</h6></Row>
                    </Col>
                  </Row>
                  <Row style={{ padding: '10px' }}><h5>{service.serviceDescription}</h5></Row>
                </Col>

              </Row>

              <Row style={{ padding: '5px' }}>
                <Col>

                  <Row><h1>Booking Information</h1></Row>
                  <Form {...formItemLayout} labelAlign='left'>
                    <Row>
                      <Form.Item label="Number of user:">
                        {getFieldDecorator('person', {
                          initialValue: 1,
                          rules: [{ required: true, message: 'Please input number of user' }],
                        })(<InputNumber
                          style={{ width: '200px' }}
                          min={1}
                          max={10}
                          formatter={value => `${value} person`}
                          parser={value => value.replace(' person', '')}
                          onChange={(value) => { this.setState({ personValue: value }) }} />)}
                      </Form.Item>
                    </Row>

                    <Row>
                      <Form.Item label="Date:">
                        {getFieldDecorator('date', {
                          rules: [{ type: 'object', required: true, message: 'Please select date of booking' }]
                        })(<DatePicker onChange={(date, dateString) => { this.setState({ dateValue: dateString }) }} />)}
                      </Form.Item>
                    </Row>

                    <Row>
                      <Form.Item label="Start time:">
                        {getFieldDecorator('startTime', {
                          rules: [{ type: 'object', required: true, message: 'Please select time of booking' }]
                        })(<TimePicker format="HH:00"
                          onChange={(start, startString) => this.handleAdd1hr(start, startString)} />)}
                      </Form.Item>
                    </Row>

                    <Row>
                      <Form.Item label="End time:">
                        {getFieldDecorator('endTime', {
                          initialValue: moment(this.state.endValue, 'HH:mm'),
                          rules: [{ type: 'object' }]
                        })(<TimePicker disabled format='HH:mm' />)}
                      </Form.Item>
                    </Row>

                    <Row>
                      <Form.Item label="Total price:">
                        <Col>{service.price * this.state.personValue} Bath</Col>
                      </Form.Item>
                    </Row>

                    <Row type='flex' justify='center'>
                      <Form.Item style={{ margin: 0 }} {...tailFormItemLayout}>
                        <Col span={12} width="100%">
                          <Button style={{ float: 'right', margin: '3px' }} onClick={this.hideBookingModal}>cancle</Button>
                        </Col>
                        <Col span={12} width="100%">
                          <Button htmlType="submit" style={{ float: 'left', margin: '3px' }}
                            className={styles.button} onClick={() => this.handleSubmit(service)}
                          >comfirm</Button>
                        </Col>
                      </Form.Item>
                    </Row>

                  </Form>
                </Col>
              </Row>
            </Col>

          </Row>
        </Modal>
      </>
    )
  }
}

const FormBookingModal = Form.create({ name: 'bookingService' })(BookingModal);

const mapDispatchToProps = {
  addBooking: addBooking,
};

export default connect(null, mapDispatchToProps)(withRouter(FormBookingModal));
