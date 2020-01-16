import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Table, Button } from "antd";
import Axios from "../../config/axios.setup";
import style from './ServiceHistory.module.css'


export class ServiceHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesList: []
    };
  }

  async getServices() {
    const result = await Axios.get("/getServices")
      .then(result => {
        this.setState({ servicesList: result.data });
        console.log(result.data);
      })
      .catch(err => console.error(err));
  }

  async componentDidMount() {
    this.getServices();
  }

   handleDeleteService = async(key,e) => {
    console.log(key)
    await Axios.delete(`/deleteService/${key}`)
      .then(result => {
        console.log(result);
        this.getServices();
      })
      .catch(err => console.error(err));
  }

  render() {
    const columns = [
      {
        title: "Image",
        dataIndex: "image",
        width: 100
      },
      {
        title: "ServiceName",
        dataIndex: "serviceName",
        width: 300
      },
      {
        title: "Time(hr)",
        dataIndex: "time",
        width: 100
      },
      {
        title: "Action",
        dataIndex: "",
        key: 'x',
        render: (text, record) => (
          <Button
            type="primary"
            onClick={(e)=>this.handleDeleteService(record.key,e)}
            className={style.ButtonDelete}
          >
            Delete
          </Button>
        )
      }
    ];

    const data = [];
    this.state.servicesList.map(result =>
      data.push({
        key: result.id,
        image: result.serviceProfilePic,
        serviceName: result.serviceName,
        time: result.time
      })
    );

  
    return (
      <Row type="flex" justify="center">
        <Col span={10}>
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

export default ServiceHistory;
