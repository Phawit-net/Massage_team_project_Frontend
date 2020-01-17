import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Table, Button } from "antd";
import Axios from "../../config/axios.setup";
import style from './ApprovePurchase.module.css'

export class ApprovePurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statementList: []
    };
  }

  async getStatements() {
    const result = await Axios.get("/getApproveList")
      .then(result => {
        this.setState({ statementList: result.data });
        console.log(result.data);
      })
      .catch(err => console.error(err));
  }
  async componentDidMount(){
      this.getStatements()
  }

  handleApproveStatement = async(key,e) => {
  
    await Axios.put(`/approve/${key}`)
      .then(result => {
        console.log(result);
        this.getStatements()
      })
      .catch(err => console.error(err));
  }
  handleRejectStatement = async(key,e) => {
    console.log(key)
    await Axios.put(`/rejectApprove/${key}`)
      .then(result => {
        console.log(result);
        this.getStatements()
      })
      .catch(err => console.error(err));
  }

  render() {
    const columns = [
      {
        title: "Customer Name",
        dataIndex: "customerName",
        width: 100,
        fixed: "left"
      },
      {
        title: "Service Name",
        dataIndex: "serviceName",
        width: 100,
        fixed: "left"
      },
      {
        title: "Number of User",
        dataIndex: "numberOfUser",
        width: 100
      },

      {
        title: "Price (Baht)",
        dataIndex: "price",
        width: 100
      },
      {
        title: "Payment Slip",
        dataIndex: "paymentSlip",
        width: 100
      },
      {
        title: "Payment Method",
        dataIndex: "paymentMethod",
        width: 100
      },

      {
        title: "Approve",
        dataIndex: "",
        key: "x",
        fixed: "right",
        render: (text, record) => (
          <div>
            <Button
              type="primary"
              onClick={(e)=>this.handleApproveStatement(record.key,e)}
              className={style.ButtonApprove}
            >
              &#10003;
            </Button>
            <Button
              type="primary"
              onClick={(e)=>this.handleRejectStatement(record.key,e)}
              className={style.ButtonReject}
            >
              &#10008;
            </Button>
          </div>
        )
      }
    ];

    const data = [];
    this.state.statementList.map(result =>
      data.push({
        key: result.id,
        // customerName: result.users[0].firstname,
        serviceName: result.serviceName,
        numberOfUser: result.numberOfUser,
        price: result.price,
        paymentSlip: result.paymentImage,
        paymentMethod: result.paymentMethod,

        
      })
    );

    return (
      <Row type="flex" justify="center">
        <Col span={20}>
          <Row type="flex">
            <Col style={{ fontSize: "20px" }}>Services History</Col>
          </Row>
          <Row>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 50 }}
              scroll={{ y: 240 }}
            />
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ApprovePurchase;
