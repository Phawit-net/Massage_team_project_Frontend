import React, { Component } from "react";
import { Row, Col, Form } from "antd";
import Axios from "../../config/axios.setup";

export default class UserInformation extends Component {
  state = {
    Username: '',
    Firstname: '',
    Lastname: '',
    Email: '',
    Tel: ''
  };

  componentDidMount() {
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
        <Col span={22}>
          <Row type="flex" justify='start'>
            <Col><h1>Personal information</h1></Col>
          </Row>
          <Row>
            <Form {...formItemLayout}>
              <Form.Item label="Username " style={{ marginTop: "0", marginBottom: "0" }}>
                <h4>{this.state.Username}</h4>
              </Form.Item>

              <Form.Item label="Firstname " style={{ marginTop: "0", marginBottom: "0" }}>
                <h4>{this.state.Firstname}</h4>
              </Form.Item>

              <Form.Item label="Lastname " style={{ marginTop: "0", marginBottom: "0" }}>
                <h4>{this.state.Lastname}</h4>
              </Form.Item>

              <Form.Item label="Email " style={{ marginTop: "0", marginBottom: "0" }}>
                <h4>{this.state.Email}</h4>
              </Form.Item>

              <Form.Item label="Tel " style={{ marginTop: "0", marginBottom: "0" }}>
                <h4>{this.state.Tel}</h4>
              </Form.Item>

            </Form>
          </Row>

        </Col>
      </Row>


    );
  }
}
