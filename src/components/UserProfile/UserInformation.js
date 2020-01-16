import React, { Component } from "react";
import { Row, Col, Form,Input } from "antd";
import Axios from "../../config/axios.setup";

export default class UserInformation extends Component {
    state = {
        Username: '',
        Firstname: '',
        Lastname: '',
        Email : '',
        Tel: ''
      };

      componentDidMount(){
         Axios.get('/getUser')
        .then(result => {
          console.log(result.data)
         
         this.setState({
            Username: result.data.username,
            Firstname: result.data.firstname,
            Lastname: result.data.lastname,
            Email: result.data.email,
            Tel: result.data.tel
        })
          
        })
        .catch(err => {
          console.error(err);
        })
 
   }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    
    
    return (

<Row type="flex" justify="center" align="top">
<Col span={9}>
  <Row type="flex" justify='start'>
    <Col style={{ fontSize: "25px" }}>
    Personal information
    </Col>
  </Row>
  <Row>
    <Form {...formItemLayout}>
      <Form.Item label="Username " style={{ marginTop: "0", marginBottom: "0" }}>
      <h3>{this.state.Username}</h3>
      </Form.Item>

      <Form.Item label="Firstname " style={{ marginTop: "0", marginBottom: "0" }}>
      <h3>{this.state.Firstname}</h3>
      </Form.Item>

      <Form.Item label="Lastname " style={{ marginTop: "0", marginBottom: "0" }}>
      <h3>{this.state.Lastname}</h3>
      </Form.Item>

      <Form.Item label="Email " style={{ marginTop: "0", marginBottom: "0" }}>
      <h3>{this.state.Email}</h3>
      </Form.Item>

      <Form.Item label="Tel " style={{ marginTop: "0", marginBottom: "0" }}>
      <h3>{this.state.Tel}</h3>
      </Form.Item>

    </Form>
  </Row>
 
</Col>
</Row>


    );
  }
}
