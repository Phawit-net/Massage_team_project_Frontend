import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Form, Input, Button } from 'antd'
import Axios from '../config/axios.setup'

class ResetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            confirmDirty: false,
            status: 'success'
        }
    }
//  componentWillMount(){
//        Axios.get('/checkresetpasswordtimeout',{
//             params:{
//                resetPasswordToken:this.props.match.params.token
//             }
//         }).then(response=>{
//             if(response.data.message==='success'){
//                 this.setState({
//                     username:response.data.username
//                     status:'success'
//                 })
//             }else{
//                 this.setState({
//                     status:'timeout'
//                 })
//             }
//         })
//         .catch(err=>{
//             this.setState({
//                 status:'timeout'
//             })
//         })
//     }
    handlesubmitresetpassword=(e)=>{
        e.preventDefault()
        this.props.form.validateFields((err,values)=>{
            if(!err){
                Axios.post('/resetpassword',{
                    username:this.state.username,
                    newpassword:values.password
                })
            }
            else{
                return
            }
        })
    }
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
          callback('Please enter the same password');
        } else {
          callback();
        }
      };
      handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      };
    renderContent(getFieldDecorator) {
        switch (this.state.status) {
            case 'timeout':
                return (
                    <Row style={{ marginTop: '200px', marginLeft: '10%', marginRight: '10%', marginBottom: '200px' }}>
                        <Col >
                            <h1 style={{ fontSize: '100px' }}>Oops! Sorry</h1>
                            <h2>We can't find the page that you are looking for</h2>
                            <h2>Please contact admin </h2>
                            <Link to='/home'><span style={{ fontSize: '20px' }}>Back To Home</span></Link>
                        </Col>
                    </Row>
                )
            case 'success':
                return (
                    <Row style={{ marginTop: '200px', marginLeft: '10%', marginRight: '10%',marginBottom: '200px' }}>
                        <Row>
                            <h1>Please input your new password</h1>
                        </Row>
                        <Row>
                            <Form onSubmit={(e)=>this.handlesubmitresetpassword(e)}>
                                <Form.Item label=' new password' hasFeedback>
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                            {
                                                validator: this.validateToNextPassword,
                                            },
                                        ],
                                    })(<Input.Password style={{width:'300px'}} />)}
                                </Form.Item>
                                <Form.Item label="Confirm new password" hasFeedback>
                                    {getFieldDecorator('confirm', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            {
                                                validator: this.compareToFirstPassword,
                                            },
                                        ],
                                    })(<Input.Password  style={{width:'300px'}}  onBlur={this.handleConfirmBlur} />)}
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="submit">Submit</Button>
                                </Form.Item>
                            </Form>
                        </Row>
                    </Row>
                )
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                {this.renderContent(getFieldDecorator)}
            </>
        )
    }
}
export default Form.create()(ResetPassword)
