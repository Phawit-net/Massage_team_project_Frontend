import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Form, Input, Upload, Icon, Modal, Button } from "antd";
import Axios from "../../config/axios.setup";
const { TextArea } = Input;


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export class ShopInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopName: '',
      shopAccountNo: '',
      shopAccountName: '',
      shopDescription: '',
      previewVisible: false,
      previewImage: "",
      fileList: []
    };
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handleSubmit = e => {
    e.preventDefault();
    //alert("OK")
    this.props.form.validateFieldsAndScroll((err, value) => {
        value.accountno = 123456
            alert(value.accountno)
          
        
      })


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

  componentDidMount(){
    Axios.get('getShop/1')
   .then(result => {
     console.log(result.data)
    
    this.setState({
        shopName: result.data.shopName,
        shopAccountNo: result.data.shopAccountNo,
        shopAccountName: result.data.shopAccountName,
        shopDescription: result.data.shopDescription,
   })
     
   })
   .catch(err => {
     console.error(err);
   })

}

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
              Shop information
            </Col>
          </Row>
          <Row>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item
                label="Shop name"
                style={{ marginTop: "0", marginBottom: "0" }}
              >
                {getFieldDecorator("shopname", {
                  rules: [
                    {
                      required: false,
                      message: "Show Shop name"
                    }
                  ]
                })(<label ><h3>{this.state.shopName}</h3></label>)}
              </Form.Item>

              <Form.Item label="Account No">
                {getFieldDecorator("accountno", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Account No"
                    }
                  ]
                })(<Input />)}
              </Form.Item>

              <Form.Item label="Account Name">
                {getFieldDecorator("accountname", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Account Name"
                    }
                  ]
                })(<Input />)}
              </Form.Item>

              <Form.Item
                label="Shop Description"
                style={{ marginTop: "0", marginBottom: "0" }}
              >
                {getFieldDecorator("shopdescription", {
                  rules: [
                    {
                      required: false,
                      message: "Please input shop description"
                    }
                  ]
                })(<TextArea />)}
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


              <Form.Item>
            <Button type="primary" htmlType="submit">
              <b>Register</b>
            </Button>
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

export default Form.create({ name: "ShopInformation" })(ShopInformation);
