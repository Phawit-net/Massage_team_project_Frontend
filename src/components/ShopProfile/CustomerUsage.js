import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Row, Col, Form, Icon } from "antd";
import Axios from "../../config/axios.setup";
export default class CustomerUsage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [], plotOptions: {
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
        },
        legend: {
          position: "bottom"
        }
      },
      series: [],
      labels: []
    };
  }

  componentDidMount() {
    Axios.get('/getServiceUsage')
      .then(result => {
        let servicesNames = [], serviceCount = [], showServicesName = { labels: [] }
        result.data.map(function (x) {
          servicesNames.push(x.serviceName)
          showServicesName.labels.push("Services - " + x.serviceName)
          serviceCount.push(x.count)
          return result
        });
        this.setState({
          labels: servicesNames,
          series: serviceCount
          ,
          options: showServicesName
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
          <Row type="flex" justify="start">
            <Col><h1><Icon type="pie-chart" /> Service Usage</h1></Col>
          </Row>
          <Row type="flex" justify="center" align="top">
            <Col xs={24} md={24} lg={10}>
              <Form {...formItemLayout}>
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="donut"
                  style={{ minWidth: "250px", maxWidth: "450px", maxHeight: "450px" }}
                />
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
