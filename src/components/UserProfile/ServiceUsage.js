import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Row, Col, Form, Icon } from "antd";
import Axios from "../../config/axios.setup";
export default class ServiceUsage extends Component {
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
        }
      },
      series: [],
      labels: [],
    };
  }

  componentDidMount() {
    Axios.get('/getShopUserUsage')
      .then(result => {
        let shopnames = [], shopcount = [], showShopname = { labels: [] }
        result.data.map(function (x) {
          shopnames.push(x.shopName)
          showShopname.labels.push("Shop - " + x.shopName)
          shopcount.push(x.count)
          return result;
        });
        console.log(shopnames)
        console.log(shopcount)
        this.setState({
          labels: shopnames,
          series: shopcount,
          options: showShopname
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
            <Col span={10}>
              <Form {...formItemLayout}>
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="donut"
                  width="380"
                />
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
