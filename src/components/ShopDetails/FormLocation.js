import React, { Component } from 'react'
import { Form, Input, Button, Radio } from 'antd'
import FindLocation from './FindLocation'

class FormLocation extends Component {
  handleFormCoordChange = e => {
    // this.setState({  });
    console.log(this.props.location.lat, this.props.location.lng)

  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.form.validateFieldsAndScroll((err, value) => {
    //   if (!err) {
    //     let payload = new FormData();
        
    //     this.state.fileList.forEach(file => payload.append('serviceProfilePic', file))
    //     payload.append("serviceName", value.serviceName);
    //     payload.append("serviceDescription", value.serviceDetail);
    //     payload.append("time", value.serviceTime);
    //     payload.append("price", value.servicePrice);

    //     Axios.post("/createService", payload, {
    //       headers: { 'content-type': 'multipart/form-data' }
    //     })
    //       .then(result => {
    //         this.props.form.resetFields();
    //         this.setState({ fileList: [] })
    //         console.log(this.state.fileList)
    //         console.log(result)
    //       })
    //       .catch(err => console.error(err));
    //   }
    // });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout =
    {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    }
    const buttonItemLayout =
    {
      wrapperCol: { span: 14, offset: 4 },
    }
    return (
      <div>

        <Form layout='horizontal' onSubmit={this.handleSubmit}>
          <Form.Item label="Location" {...formItemLayout}>

            <Radio.Group defaultValue="horizontal" onChange={this.handleFormCoordChange}>
              <Radio.Button value="horizontal">Lat Long</Radio.Button>
              <Radio.Button value="vertical">GPS Coordinates</Radio.Button>
            </Radio.Group>

          </Form.Item>
          <Form.Item label="Latitude" {...formItemLayout}>
            {getFieldDecorator('Latitude', {
              initialValue: parseFloat(this.props.location.lat.toFixed(6)),
              rules: [],
            })
              (<Input placeholder={this.props.location.lat} />)}


          </Form.Item>
          <Form.Item label="Longitude" {...formItemLayout}>
            {getFieldDecorator('Longitude', {
              initialValue: parseFloat(this.props.location.lng.toFixed(6)),
              rules: [],
            })
              (<Input placeholder={this.props.location.lng} />)}
          </Form.Item>

          <Form.Item label="address" {...formItemLayout}>
            <Input placeholder="address" />
          </Form.Item>

          <Form.Item {...buttonItemLayout}>
            <Button
              htmlType="submit"
              type="primary">
              Submit
            </Button>
          </Form.Item>
        </Form>

      </div>
    );
  }
}
export default Form.create()(FormLocation);



