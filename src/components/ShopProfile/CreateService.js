import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Form, Input, Upload, Icon, Modal, Button } from "antd";
import Axios from "../../config/axios.setup";
import style from './CreateService.module.css'
const { TextArea } = Input;

export class CreateService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: "",
      fileList: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        let payload = new FormData();
        this.state.fileList.forEach(file=> payload.append('serviceProfilePic', file))
        payload.append("serviceName", value.serviceName);
        payload.append("serviceDescription", value.serviceDetail);
        payload.append("time", value.serviceTime);
        payload.append("price", value.servicePrice);

        Axios.post("/createService", payload,{
          headers: {'content-type':'multipart/form-data'}
        })
          .then(result => {
            this.props.form.resetFields();
            this.setState({fileList:[]})
            console.log(this.state.fileList)
            console.log(result)})
          .catch(err => console.error(err));
      }
    });
  };
  handleCancelCreate = () => {
    this.props.form.resetFields();
    this.setState({fileList:[]})
    console.log(this.state.fileList)
  };

  render() {
    const { fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file]
        }));
        return false;
      },
      fileList
    };

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
    const { getFieldDecorator } = this.props.form;

    return (
      <Row type="flex" justify="center" align="top">
        <Col span={9}>
          <Row type="flex" justify="start">
            <Col style={{ fontSize: "20px" }}>Create Services</Col>
          </Row>
          <Row>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item
                label="Service name"
                style={{ marginTop: "0", marginBottom: "0" }}
              >
                {getFieldDecorator("serviceName", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Service name"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item
                label="Service detail"
                style={{ marginTop: "0", marginBottom: "0" }}
              >
                {getFieldDecorator("serviceDetail", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Service detail"
                    }
                  ]
                })(<TextArea />)}
              </Form.Item>
              <Form.Item label="Service time" style={{ marginTop: "0", marginBottom: "0" }}>
                {getFieldDecorator("serviceTime", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Service time(hr)"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item label="Service price" style={{ marginTop: "0", marginBottom: "0" }}>
                {getFieldDecorator("servicePrice", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Service Price(Baht)"
                    }
                  ]
                })(<Input />)}
              </Form.Item>
              <Form.Item
                label="Image"
                style={{ marginTop: "0", marginBottom: "0" }}
              >
                <Row type="flex">
                  <Col>
                    <Upload {...props}>
                      <Button>
                        <Icon type="upload" /> Select File
                      </Button>
                    </Upload>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label='Action'  style={{ marginTop: "1vh", marginBottom: "0"   }}>
                <Row 

                  type="flex"
                  
                  gutter={[16, 16]}
                  style={{ marginBottom: "1vh",width:'100%' }}
                >
                  <Col >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className={style.ButtonConfirm}
                      style={{width:'80px'}}
                    >
                      Confirm
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      type="primary"
                      onClick={this.handleCancelCreate}
                      className={style.ButtonCancel}
                      style={{width:'80px'}}

                    >
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "CreateService" })(CreateService);
