import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col,Table,Button } from "antd";

export class ServiceHistory extends Component {
  static propTypes = {};

  render() {
    const columns = [
        {
          title: 'Image',
          dataIndex: 'image',
          width: 80,
        },
        {
          title: 'Service name',
          dataIndex: 'serviceName',
          width: 80,
        },
        {
          title: 'Detail',
          dataIndex: 'detail',
          width:200
        },
        {
            title: 'Time (hr)',
            dataIndex: 'time',
            width:80
          },
          {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <Button type="primary" style={{ backgroundColor: "#9e4624" }}>Delete</Button>,
          },
      ];
      
      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          key: i,
          image: `Edward King ${i}`,
          serviceName: 32,
          detail: `London, Park Lane no.cdsdscdcdc ${i}`,
          time:'1',
          
        });
      }
    return (
      <Row type="flex" justify='center'>
        <Col span={10}>
          <Row type="flex">
            <Col offset={3} style={{ fontSize: "3vh" }}>
              Create Services
            </Col>
          </Row>
          <Row>
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ServiceHistory;
