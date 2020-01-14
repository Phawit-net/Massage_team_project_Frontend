import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Form, Input, Upload, Icon, Modal, Button } from "antd";
const { TextArea } = Input;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export class CreateService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: "",
      fileList: []
    };
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handleSubmit = e => {
    e.preventDefault();
  };

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

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
          <Row type="flex" justify='start'>
            <Col style={{ fontSize: "25px" }}>
              Create Services
            </Col>
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
              <Form.Item label="Service time">
                {getFieldDecorator("serviceTime", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Service time(hr)"
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
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.handleChange}
                    >
                      {fileList.length >= 8 ? null : uploadButton}
                    </Upload>
                    <Modal
                      visible={previewVisible}
                      footer={null}
                      onCancel={this.handleCancel}
                    >
                      <img
                        alt="example"
                        style={{ width: "100%" }}
                        src={previewImage}
                      />
                    </Modal>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Row>
          <Row
            type="flex"
            justify="end"
            gutter={[16, 16]}
            style={{ marginBottom: "1vh" }}
          >
            <Col>
              <Button type="primary" style={{ backgroundColor: "#9e4624" }}>
                Confirm
              </Button>
            </Col>
            <Col>
              <Button type="primary" style={{ backgroundColor: "#c4c4c4" }}>
                Cancel
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "CreateService" })(CreateService);
