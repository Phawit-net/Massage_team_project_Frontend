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
        width: "12%",
        
      },
      {
        title: "Service",
        dataIndex: "serviceName",
        width: "12%",
        
      },
      {
        title: "Number",
        dataIndex: "numberOfUser",
        width: "15%"
      },

      {
        title: "Price(Baht)",
        dataIndex: "price",
        width: "15%"
      },
      {
        title: "Slip",
        dataIndex: "paymentSlip",
        width: "15%"
      },
      {
        title: "Payment",
        dataIndex: "paymentMethod",
        width: "15%"
      },

      {
        title: "Approve",
        dataIndex: "",
        key: "x",
       
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
    this.state.statementList.map(result =>{
      let name = result.user.firstname+" "+result.user.lastname
      data.push({
        key: result.id,
        customerName: name,
        serviceName: result.serviceName,
        numberOfUser: result.numberOfUser,
        price: result.price,
        paymentSlip: (<img src={`${Axios.defaults.baseURL}/${result.paymentImage}`} style={{ width: "100px", height: "100px",borderRadius:"50%" }}/>),
        paymentMethod: result.paymentMethod,

        
      })}
    );

    return (
      <Row type="flex" justify="center" style={{marginTop:'1vh'}}>
        <Col span={20}>
          <Row type="flex">
            <Col style={{ fontSize: "20px" }}>Services History</Col>
          </Row>
          <Row style={{marginTop:'1vh'}}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 3 }}
              
            />
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ApprovePurchase;
