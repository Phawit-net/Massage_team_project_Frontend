import React, { Component } from "react";
import { Row, Typography, Col, Button, List } from "antd";
import styles from "./ShopCard.module.css";
import { Link } from 'react-router-dom'

const { Text } = Typography;

export default class ShopCard extends Component {
  render() {
    const { item } = this.props
    return (
      <div>
        <List.Item key={item.id}>
          <Row type="flex" style={{ border: "2px solid #D8AE47", margin: "10px", padding: "10px" }} justify='center'>
            <Col md={4} sm={12} xs={24}>
              <img
                style={{ width: "100%" }}
                src="https://www.honestdocs.co/system/image_attachments/images/000/039/082/medium/01._Oil_massage_90_mins_1_%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87_-_Montra_health_and_spa___1_350.jpg"
              />
            </Col>
            <Col md={20} sm={24} xs={24} style={{ paddingLeft: '20px' }}>
              <Row>
                <Text strong style={{ fontSize: "1.6em" }}>
                  {item.shopName}
                </Text>
              </Row>
              <Row>
                <Text>
                  {item.shopDescription}
                </Text>
              </Row>
              <Row style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type='primary' className={styles.Button}><Link to='/shopdetails'>View Shop</Link></Button>
              </Row>
            </Col>
          </Row>
        </List.Item>
      </div>
    );
  }
}
