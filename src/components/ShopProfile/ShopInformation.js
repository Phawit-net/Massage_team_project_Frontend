import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Form, Input, Upload, Icon, Modal, Button} from "antd";
import Axios from "../../config/axios.setup";
import { compose } from "redux";
import { failLoginNotification, successLoginNotification } from '../Notification/notification'
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
      fileList: [],
      productcategories:[],
      productcategoriesID:0
    
    };
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
        console.log(value.shopdescription)
        console.log(value.accountno)
        console.log(value.accountname)
        let payload = new FormData();
        payload.append("shopDescription", value.shopdescription);
        payload.append("photoPost", this.state.fileList[0]);
        payload.append("shopAccountNo", value.accountno);
        payload.append("shopAccountName", value.accountname);
        console.log(payload);
        if(this.state.fileList[0]==undefined){
          failLoginNotification("Please select file image")
        }
        if (!err) {
            Axios.put("/updateShop", payload)
              .then(result => {
                successLoginNotification()
                console.log(result);
              })
              .catch(err => {
                console.error(err);
              });
            //this.props.form.resetFields();
          }

          
        
      });

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

  handleSelectChange = value => {
    this.setState({productcategoriesID:value})
  };

  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  componentDidMount(){
     Axios.get('/getShop')
    .then(result => {
     //console.log(result.data)
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

handleChangeAccountNo = e => {
console.log(e.target.value)
// this.setState({
//     shopAccountNo: e.target.value
// })
}

handleChangeshopAccountName = e => {
console.log(e.target.value)
}

handleChangeshopShopDescription = e => {
console.log(e.target.value)
}


  render() {
   
    const { previewVisible, previewImage} = this.state;
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
        })
        );
        return false;
      },
      fileList
    };

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
              <Form.Item label="Shop name" style={{ marginTop: "0", marginBottom: "0" }}>
              <h3>{this.state.shopName}</h3>
              </Form.Item>

              <Form.Item label="Account No" style={{ marginTop: "0", marginBottom: "0" }}>
                {getFieldDecorator("accountno", {
                  rules: [
                    {
                      required: false,
                      message: "Show Shop Account No"
                    }
                  ],
                  initialValue:this.state.shopAccountNo
                })(<Input/>)}
              </Form.Item>

              <Form.Item label="Account Name" style={{ marginTop: "0", marginBottom: "0" }}>
                {getFieldDecorator("accountname", {
                  rules: [
                    {
                      required: false,
                      message: "Show Shop Account Name"
                    }
                  ],
                  initialValue:this.state.shopAccountName
                })(<Input/>)}
              </Form.Item>

              <Form.Item label="Shop Description" style={{ marginTop: "0", marginBottom: "0" }}>
                {getFieldDecorator("shopdescription", {
                  rules: [
                    {
                      required: false,
                      message: "Show Shop Description"
                    }
                  ],
                  initialValue:this.state.shopDescription
                })(<TextArea/>)}
              </Form.Item>
              
              <Form.Item label="Upload" extra="Select file image">
            {getFieldDecorator("upload", {
              valuePropName: "fileList",
              getValueFromEvent: this.normFile
            })(
              <Upload {...props}>
                <Button>
                  <Icon type="upload" /> Select File
                </Button>
              </Upload>
            )}
          </Form.Item>


         <Row
            type="flex"
            justify="end"
            gutter={[16, 16]}
            style={{ marginBottom: "1vh" }}
          >
            <Col>
              <Button type="primary" htmlType="submit" style={{ backgroundColor: "#9e4624" }}>
                Save
              </Button>
            </Col>
            <Col>
              <Button type="primary" style={{ backgroundColor: "#c4c4c4" }}>
                Cancel
              </Button>
            </Col>
          </Row>

          
            </Form>
          </Row>
         
        </Col>
      </Row>
    );
  }
}

export default Form.create({ name: "ShopInformation" })(ShopInformation);
