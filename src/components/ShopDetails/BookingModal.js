import React, { Component } from 'react'
import { Row, Col, InputNumber, Form, DatePicker, TimePicker, Button } from 'antd'
import moment from 'moment';
import styles from './BookingModal.module.css'

export class BookingModal extends Component {
  state = {
    serviceList: {

      serviceName: "Full Body Thai Yoga massage", serviceDescription: " In this unique healing system of Thai Yoga Massage, also called Nuad Boran, the practitioner guides the client through a series of yoga postures, while palming and thumbing along the body’s energy (‘Sen’) lines and pressure points.",
      serviceProfilePic: "https://cdn.spafinder.com/2015/10/thai-massage-1.jpg", time: "", price: 1000, service_id: "1"

    },
    personValue: 1,
    dateValue: '',
    startValue: '',
    endValue: '',
  }

  handleAdd1hr(start,startString) {
    this.setState({ startValue: startString })
    this.props.form.setFieldsValue({
      endTime: moment(this.add1Hour(start),'HH:mm'),
    });
  }

  add1Hour(x) {
    let startDate = moment(x)
    let onehour = startDate.startOf('hour').add(1, 'hours').format('HH:mm')
    this.setState({ endValue: onehour })
    return onehour
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      //   Axios.post('http://localhost:8080/', { 
      //               name: values.person,
      //               lastname: values.date,
      //               startTime: values.startTime,
      //               endTime: values.endTime,
      //               price: values.person * this.state.serviceList.price
      //             })
      //               .then(result => {
      //                 console.log(result)
      //               })
      //               .catch(err => {
      //                 console.error(err)
      //               })
      //             this.props.form.resetFields()
      }
    });
  };


  render() {
    console.log('Start', this.state.startValue)
    console.log('End', this.state.endValue)
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
      <Row className={styles.borderBox}>
        <Col span={24} style={{ width: '100%', height: '100%' }}>

          <Row className={styles.borderBoxSmall}>
            <Col span={8} style={{ padding: '5px' }} >
              <img src={service.serviceProfilePic} alt="" style={{ objectFit: 'cover', height: '200px' }} />
            </Col>

            <Col span={16}>
              <Row>
                <Col span={16} style={{ color: '#926F3B' }}>
                  <h3>{service.serviceName} ({this.state.personValue} person)</h3>
                </Col>
                <Col span={8}>
                  <Row><h4>Arunmanee Massage & Spa</h4></Row>
                  <Row>{this.state.dateValue} {this.state.startValue}-{this.state.endValue}</Row>
                </Col>
              </Row>
              <Row style={{ paddingTop: '15px' }}>{service.serviceDescription}</Row>
            </Col>

          </Row>

          <Row style={{ padding: '5px' }}>
            <Col>

              <Row><h1>Booking Information</h1></Row>
              <Form {...formItemLayout} labelAlign='left' onSubmit={this.handleSubmit}>
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
                      // onChange={(start, startString) => { this.setState({ startValue: startString }) }}
                      onChange={(start,startString) => this.handleAdd1hr(start,startString)} />)}
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

                <Row>
                  <Form.Item style={{ margin: 0 }} {...tailFormItemLayout}>
                    <Col span={12}>
                      <Button style={{ float: 'right', margin: '3px' }}>cancle</Button>
                    </Col>
                    <Col span={12}>
                      <Button htmlType="submit" style={{ float: 'left', margin: '3px' }} className={styles.button}>comfirm</Button>
                    </Col>
                  </Form.Item>
                </Row>

              </Form>
            </Col>
          </Row>
        </Col>

      </Row>
    )
  }
}

const FormBookingModal = Form.create({ name: 'bookingService' })(BookingModal);
export default FormBookingModal
