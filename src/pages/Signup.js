import React, { Component } from 'react'
import { Row, Col, Form, Input, Icon, Button, Radio } from 'antd'
import { withRouter } from 'react-router-dom'
import Axios from '../config/axios.setup'
import styles from './Signup.module.css'

class Signup extends Component {
  state = {
    confirmDirty: false,
    rolesValue: 'buyer'
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        Axios.post('/registerUser', {
          username: values.username,
          password: values.password,
          firstname: values.firstname,
          lastname: values.lastname,
          email: values.email,
          tel: values.tel,
          roles: values.roles,
          shopName: values.shopName
        })
          .then(result => {
            console.log(result)
            this.props.history.push('/home')
          })
          .catch(err => {
            console.error(err)
          })
        this.props.form.resetFields()
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };


  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Row type='flex' justify='center' align='middle' style={{ height: '100%', marginTop: '200px' }}>
        <Col xs={24} lg={12}>
          <Row className={styles.box}>
            <Col span={24}><h1>Register</h1></Col>
            <Form onSubmit={this.handleSubmit}>
              <Col xs={24} lg={12}>
                <Row>
                  <Form.Item label="Username" className={styles.form}>
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: 'Please input your username', whitespace: true }],
                    })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Username" />)}
                  </Form.Item>
                </Row>

                <Row>
                  <Form.Item label="Password" className={styles.form} hasFeedback>
                    {getFieldDecorator('password', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your password',
                        },
                        {
                          validator: this.validateToNextPassword,
                        },
                      ],
                    })(<Input.Password prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password" placeholder="Password" />)}
                  </Form.Item>
                </Row>

                <Row>
                  <Form.Item label="Comfirm Password " className={styles.form} hasFeedback>
                    {getFieldDecorator('confirm', {
                      rules: [
                        {
                          required: true,
                          message: 'Please input your confirm password',
                        },
                        {
                          validator: this.compareToFirstPassword,
                        },
                      ],
                    })(<Input.Password onBlur={this.handleConfirmBlur}
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password" placeholder="Comfirm Password" />)}
                  </Form.Item>
                </Row>

                <Row>
                  <Form.Item label="User type" className={styles.form}>
                    {getFieldDecorator('roles', {
                      initialValue: 'buyer',
                      rules: [{ required: true, message: 'Please select user type' }]
                    })(
                      <Radio.Group onChange={(e) => this.setState({ rolesValue: e.target.value })}>
                        <Radio value="buyer">Buyer</Radio>
                        <Radio value="seller">Seller</Radio>
                      </Radio.Group>,
                    )}
                  </Form.Item>
                </Row>

                <Row>
                  {(this.state.rolesValue === 'seller') ?
                    <Form.Item label="Shop name" className={styles.form}>
                      {getFieldDecorator('shopName', {
                        rules: [{ required: true, message: 'Please input your firstname', whitespace: true }],
                      })(<Input prefix={<Icon type="shop" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Shop name" />)}
                    </Form.Item>
                    : undefined
                  }
                </Row>

              </Col>

              <Col xs={24} lg={12}>
                <Row>
                  <Form.Item label="Firstname" className={styles.form}>
                    {getFieldDecorator('firstname', {
                      rules: [{ required: true, message: 'Please input your firstname', whitespace: true }],
                    })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Firstname" />)}
                  </Form.Item>
                </Row>

                <Row>
                  <Form.Item label="Lastname" className={styles.form}>
                    {getFieldDecorator('lastname', {
                      rules: [{ required: true, message: 'Please input your last name', whitespace: true }],
                    })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Lastname" />)}
                  </Form.Item>
                </Row>

                <Row>
                  <Form.Item label="Email" className={styles.form}>
                    {getFieldDecorator('email', {
                      rules: [
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!'
                        },
                        {
                          required: true,
                          message: 'Please input your email',
                        },
                      ],
                    })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Email" />)}
                  </Form.Item>
                </Row>

                <Row>
                  <Form.Item label="Tel" className={styles.form}>
                    {getFieldDecorator('tel', {
                      rules: [{ required: true, message: 'Please input your phone number', whitespace: true }],
                    })(<Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Tel" />)}
                  </Form.Item>
                </Row>

                <Row>
                  <Form.Item style={{ padding: '5% 10%', margin: 0 }}>
                    <Col span={12}>
                      <Button href='/home' style={{ float: 'right', margin: '3px' }}>cancle</Button>
                    </Col>
                    <Col span={12}>
                      <Button htmlType="submit" className={styles.button} style={{ float: 'left', margin: '3px' }}>sign up</Button>
                    </Col>
                  </Form.Item>
                </Row>

              </Col>
            </Form>
          </Row>
        </Col>
      </Row >
    )
  }
}

const FormSignup = Form.create({ name: 'Signup' })(Signup);
export default withRouter(FormSignup)