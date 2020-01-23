import React, { Component } from 'react'
import { Row, Table, Col, Tag } from 'antd'
import Axios from '../../config/axios.setup';
import moment from 'moment';

export default class PurchaseHistory extends Component {
  state = {
    purchaseHistory: []
  }

  componentDidMount() {
    Axios.get('/purchaseHistory')
      .then(result => {
        this.setState({ purchaseHistory: result.data })
      })
  }


  render() {
    const history = this.state.purchaseHistory
    let color
    const columns = [
      {
        title: 'SHOP',
        width: 100,
        dataIndex: 'shopName',
        key: 'name',
        fixed: 'left',
      },
      {
        title: 'SERVICE',
        dataIndex: 'serviceName',
        key: 'serviceName',
      },
      {
        title: 'DATE',
        key: 'Date',
        render: (text, history) => `${moment(history.date).format('DD MMM YYYY')}`
      },
      {
        title: 'TIME',
        key: 'Time',
        render: (text, history) =>
          `${moment(history.startTime, 'HH:mm:ss').format('HH:mm')}-${moment(history.endTime, 'HH:mm:ss').format('HH:mm')}`
      },
      { title: 'PERSON', dataIndex: 'numberOfUser', key: 'numberOfUser' },
      {
        title: 'AMOUNT', dataIndex: 'price', key: 'price',
        render: (text, history) => (
          `฿ ${history.price.toFixed(2)}`
        )
      },
      {
        title: 'PAYMENT METHOD', dataIndex: 'paymentMethod', key: 'paymentMethod',
        render: (text, history) => (
          (history.paymentMethod === 'pay30' ? '30%' : '100%')
        )
      },
      {
        title: 'STATUS', dataIndex: 'status', key: 'status',
        render: (text, history) => (
          < Tag key={history.status}
            color={(history.status === 'Approve' || history.status === 'Approve30' ? color = '#00FF00'
              : (history.status === 'waitingApprove' ? color = '#FFC300' : color = '#FF0000'))}>
            {history.status.toUpperCase()}
          </Tag>
        ),
      },
    ];

    return (
      <Row type='flex' justify='space-around' style={{ padding: '10px' }}>
        <Col span={22}>
          <Row><h1>Purchase History</h1></Row>
          <Row>
            <Table columns={columns} dataSource={history} scroll={{ x: 800 }} size="small" rowKey={history => history.id} />
          </Row>
        </Col>

      </Row >
    )
  }
}
