import React, { Component } from "react";
import { Row, Col, Form, Input, Upload, Icon, Button } from "antd";
import Axios from "../../config/axios.setup";
import { failLoginNotification, successLoginNotification } from '../Notification/notification'
import FindLocation from '../ShopDetails/FindLocation'

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
      productcategories: [],
      productcategoriesID: 0,
      location: {
        lat: 0,
        lng: 0,
      },
      address: '',
    };
  }

  handleChangeByInputLat = e => {
    if (e.target.value <= 90 && e.target.value >= -90) {
      this.setState({
        location: {
          lat: e.target.value,
          lng: this.state.location.lng,
        }
      })
    }
  }
  handleChangeByInputLng = e => {
    if (e.target.value <= 180 && e.target.value >= -180) {
      this.setState({
        location: {
          lat: this.state.location.lat,
          lng: e.target.value,
        }
      })
    }
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, value) => {
      let payload = new FormData();
      console.log(this.state.fileList[0])
      if (this.state.fileList[0] === undefined) {
        payload.append("shopDescription", value.shopdescription);
        payload.append("shopAccountNo", value.accountno);
        payload.append("shopAccountName", value.accountname);
        payload.append("latitude", value.latitude);
        payload.append("longitude", value.longitude);
        payload.append("address", value.address);
      } else {
        payload.append("shopDescription", value.shopdescription);
        payload.append("photoPost", this.state.fileList[0]);
        payload.append("shopAccountNo", value.accountno);
        payload.append("shopAccountName", value.accountname);
        payload.append("latitude", value.latitude);
        payload.append("longitude", value.longitude);
        payload.append("address", value.address);
      }
      Axios.put("/updateShop", payload)
        .then(result => {
          console.log('yes1')
          successLoginNotification()
          console.log('yes2')
          console.log(result);
        })
        .catch(err => {
          failLoginNotification("Cannot connect to database")
          console.error(err);
        });

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
    this.setState({ productcategoriesID: value })
  };

  normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  componentDidMount() {
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
    Axios.get('/getAddress')
      .then(result => {
        if (result.data) {
          this.setState({
            location: {
              lat: result.data.latitude,
              lng: result.data.longitude,
            },
            address: result.data.address,
          })
        } else {
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
              location: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
            })
            // console.log(this.state.location)
          })
        }
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

  getLocation = location => {
    this.setState({
      location: location,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.location.lat !== this.state.location.lat || prevState.location.lng !== this.state.location.lng) {
      // console.log(true)
      this.props.form.setFieldsValue({
        latitude: this.state.location.lat,
        longitude: this.state.location.lng,
      });
    }
  }

  validateLatitude = (rule, value, callback) => {
    if (!(value <= 90 && value >= -90)) {
      callback("latitude values range between -90 and +90 degrees");
    } else {
      callback();
    }
  };

  validateLongitude = (rule, value, callback) => {
    if (!(value <= 180 && value >= -180)) {
      callback("longitude values range between -180 and +180 degrees");
    } else {
      callback();
    }
  };

  valueFormatter = e => {
    return e.target.value.replace(/[^\d\.]/, '')
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

    // const valueFormatter = e => e.target.value.replace(/\D/, '')

    return (
      <Row type="flex" justify="center" align="top">
        <Col span={20}>
          <Row type="flex" justify='start'>
            <Col>
              <h1>Shop information</h1>
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
                  initialValue: this.state.shopAccountNo
                })(<Input />)}
              </Form.Item>

              <Form.Item label="Account Name" style={{ marginTop: "0", marginBottom: "0" }}>
                {getFieldDecorator("accountname", {
                  rules: [
                    {
                      required: false,
                      message: "Show Shop Account Name"
                    }
                  ],
                  initialValue: this.state.shopAccountName
                })(<Input />)}
              </Form.Item>

              <Form.Item label="Shop Description" style={{ marginTop: "0", marginBottom: "0" }}>
                {getFieldDecorator("shopdescription", {
                  rules: [
                    {
                      required: false,
                      message: "Show Shop Description"
                    }
                  ],
                  initialValue: this.state.shopDescription
                })(<TextArea />)}
              </Form.Item>

              <Form.Item label="Upload" extra="Select file image">
                {getFieldDecorator("upload", {
                  // valuePropName: "fileList",
                  getValueFromEvent: this.normFile
                })(
                  <Upload {...props}>
                    <Button>
                      <Icon type="upload" /> Select File
                </Button>
                  </Upload>
                )}
              </Form.Item>
              <Row type="flex" justify='center'>
                <FindLocation
                  inputLocation={this.state.location}
                  callbackFromParent={this.getLocation}
                />
              </Row>
              <Form.Item label="Latitude" >
                {getFieldDecorator('latitude', {
                  getValueFromEvent: this.valueFormatter,
                  rules: [{
                    validator: this.validateLatitude,
                  }]
                })
                  (<Input placeholder="00.000000" onChange={this.handleChangeByInputLat} />)}
              </Form.Item>

              <Form.Item label="Longitude" >
                {getFieldDecorator('longitude', {
                  getValueFromEvent: this.valueFormatter,
                  // initialValue: parseFloat(this.state.location.lng.toFixed(6)),
                  rules: [{
                    validator: this.validateLongitude,
                  }]
                })
                  (<Input placeholder="00.000000" onChange={this.handleChangeByInputLng} />)}
              </Form.Item>

              <Form.Item label="Address" >
                {getFieldDecorator('address', {
                  rules: [
                    {
                      required: false,
                      message: "address"
                    }
                  ],
                  initialValue: this.state.address
                })
                  (<Input placeholder="address" />)}
              </Form.Item>

              <Row
                type="flex"
                justify="end"
                gutter={[16, 16]}
                style={{ marginBottom: "10vh" }}
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