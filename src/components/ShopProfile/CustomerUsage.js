import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Row, Col, Form } from "antd";
import Axios from "../../config/axios.setup";
export default class CustomerUsage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {labels: [],plotOptions: {
        //-----------------
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
        //-----------------
      }},
      series: [],
      labels: [],
    };
  }

  componentDidMount(){
    Axios.get('/getShopUserUsage')
   .then(result => {
     let servicesNames=[],serviceCount=[],showServicesName={labels: []}
     result.data.map(function(x) {
      servicesNames.push(x.serviceName)
      showServicesName.labels.push("Services - " + x.servicesNames)
      serviceCount.push(x.count)
      return result
    });
    console.log(servicesNames)
    console.log(serviceCount)
    this.setState({
      labels:servicesNames,
      series:serviceCount,
      options:showServicesName
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
          <Row type="flex" justify="start">
            <Col style={{ fontSize: "25px" }}>Customer Usage</Col>
          </Row>
          <Row>
            <Form {...formItemLayout}>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                // type="pie"
                width="380"
              />
            </Form>
          </Row>
        </Col>
      </Row>
    );
  }
}
