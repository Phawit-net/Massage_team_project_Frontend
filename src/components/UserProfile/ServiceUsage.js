import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Row, Col, Form } from "antd";
import Axios from "../../config/axios.setup";
export default class ServiceUsage extends Component {
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
        },
        
        //-----------------
      }},
      series: [],
      labels: [],
    };
  }

  componentDidMount(){
    Axios.get('/getShopUserUsage')
   .then(result => {
     let shopnames=[],shopcount=[],showShopname={labels: []}
     result.data.map(function(x) {
      shopnames.push(x.shopName)
      showShopname.labels.push("Shop - " + x.shopName)
      shopcount.push(x.count)
      return result;
    });
    console.log("labels --> "+shopnames)
    console.log("series --> "+shopcount)
    console.log("options --> "+showShopname)
    this.setState({
      labels:shopnames,
      series:shopcount,
      options:showShopname
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
            <Col style={{ fontSize: "25px" }}>Service Usage</Col>
          </Row>
          <Row>
            <Form {...formItemLayout}>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                //type="pie"
                width="380"
              />
            </Form>
          </Row>
        </Col>
      </Row>
    );
  }
}
