import React, { Component } from "react";
import { Row, Col, Table, Button, Icon } from "antd";
import Axios from "../../config/axios.setup";
import style from './ServiceHistory.module.css'

export class ServiceHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesList: []
    };
  }

  getServices() {
    Axios.get("/getServices")
      .then(result => {
        this.setState({ servicesList: result.data });
        console.log(result.data);
      })
      .catch(err => console.error(err));
  }

  async componentDidMount() {
    this.getServices();
  }

  handleDeleteService = async (key, e) => {
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
        width: "20%"
      },
      {
        title: "ServiceName",
        dataIndex: "serviceName",
        width: "40%"
      },
      {
        title: "Time(hr)",
        dataIndex: "time",
        width: "20%"
      },
      {
        title: "Action",
        dataIndex: "",
        key: 'x',
        render: (text, record) => (
          <Button
            type="primary"
            onClick={(e) => this.handleDeleteService(record.key, e)}
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
        image: (<img src={`${Axios.defaults.baseURL}/${result.serviceProfilePic}`} alt="serviceProfilePic" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />),
        serviceName: result.serviceName,
        time: result.time
      })
    );


    return (
      <Row type="flex" justify="center" style={{ marginTop: '1vh' }}>
        <Col span={22}>
          <Row type="flex">
            <Col><h1><Icon type="history" /> Service History</h1></Col>
          </Row>
          <Row style={{ marginTop: '1vh' }}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 3 }}
              scroll={{ x: 800 }}
            />
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ServiceHistory;
