import React, { Component } from "react";
import { Row, Typography, Col, Button } from "antd";
import styles from "./ShopCard.module.css";
import { Link } from 'react-router-dom'
import Axios from '../../../config/axios.setup'

const { Paragraph, Text } = Typography;

export default class ShopCard extends Component {
  render() {
    let shop = this.props.shop.shop
    return (
      <div>
        <Row style={{ border: "2px solid #D8AE47", margin: "10px" }}>
          <Row type='flex' justify='center'>
            <Col style={{ position: 'absolute', width: '100%', height: '100%' }}>
              <img src='patternLeft.png' alt="patternLeft" style={{ position: 'absolute' }} />
              <img src='patternRight.png'alt="patternRight" style={{ position: 'absolute', right: '0%' }} />
              <img src='patternLeft.png' alt="patternLeft" style={{ position: 'absolute', transform: 'scaleY(-1)', bottom: '0%' }} />
              <img src='patternRight.png' alt="patternRight" style={{ position: 'absolute', transform: 'scaleY(-1)', right: '0%', bottom: '0%' }} />
            </Col>
            <Col md={4} sm={16} xs={24} style={{ padding: '30px 10px 30px 30px' }} className={styles.imgContent}>
              <img
                style={{ width: "100%" }}
                src={`${Axios.defaults.baseURL}/${shop.shopProfilePic}`}
                alt="shopProfilePic"
              />
            </Col>
            <Col md={20} sm={24} xs={24} style={{ padding: '30px 30px 30px 10px' }} className={styles.content} >
              <Row>
                <Text strong style={{ fontSize: "1.6em" }}>
                  {shop.shopName}
                </Text>
              </Row>
              <Row>
                <Paragraph ellipsis={{ rows: 3, expandable: true }} >
                  {shop.shopDescription}
                </Paragraph>
              </Row>
              <Row style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }} className={styles.ButtonRow}>
                <Button type='primary' className={styles.Button}><Link to={`/shopdetails?id=${shop.id}`}>View Shop</Link></Button>
              </Row>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}