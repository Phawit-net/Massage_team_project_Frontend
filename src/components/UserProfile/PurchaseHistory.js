import React, { Component } from 'react'
import { Row, Table, Col } from 'antd'
import Axios from '../../config/axios.setup';
import moment from 'moment';

export default class PurchaseHistory extends Component {
  state = {
    purchaseHistory: []
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/purchaseHistory')
      .then(result => {
        this.setState({ purchaseHistory: result.data })
      })
  }


  render() {
    const history = this.state.purchaseHistory
    const columns = [
      {
        title: 'Shop',
        width: 120,
        dataIndex: 'shopName',
        key: 'name',
        fixed: 'left',
      },
      {
        title: 'Services',
        dataIndex: 'serviceName',
        key: 'age',
      },
      {
        title: 'Date',
        key: '1',
        render: (text, history) => `${moment(history.date).format('DD MMM YYYY')}`
      },
      {
        title: 'Time',
        key: '2',
        render: (text, history) =>
          `${moment(history.startTime, 'HH:mm:ss').format('HH:mm')}-${moment(history.endTime, 'HH:mm:ss').format('HH:mm')}`
      },
      { title: 'Person', dataIndex: 'numberOfUser', key: '3' },
      { title: 'Amount (Bath)', dataIndex: 'price', key: '4' },
      { title: 'Payment Method', dataIndex: 'paymentMethod', key: '5' },
      { title: 'Status', dataIndex: 'status', key: '6' },
      // {
      //   title: 'Action',
      //   key: 'operation',
      //   // fixed: 'right',
      //   width: 100,
      //   render: () => <a>action</a>,
      // },
    ];

    return (
      <Row type='flex' justify='space-around' style={{ padding: '10px' }}>
        <Col span={22}>
          <Row><h1>Purchase History</h1></Row>
          <Row>
            <Table columns={columns} dataSource={history} scroll={{ x: 800 }} size="small" />
          </Row>
        </Col>

      </Row>
    )
  }
}
