import React, { Component } from "react";
import { Row, Typography, Col } from "antd";
const { Text } = Typography;

export default class ShopList extends Component {
  render() {
    return (
      <div>
        <Row
          type="flex"
          style={{
            border: "2px solid #D8AE47",
            margin: "10px",
            padding: "10px"
          }}
        >
          <Col span={4}>
            <img
              style={{ width: "100%" }}
              src="https://www.honestdocs.co/system/image_attachments/images/000/039/082/medium/01._Oil_massage_90_mins_1_%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87_-_Montra_health_and_spa___1_350.jpg"
            />
          </Col>
          <Col span={16}>
            <Row>
              <Text strong style={{ fontSize: "1.6em" }}>
                Arunmanee Massage & Spa
              </Text>
            </Row>
            <Row>
              <Text>
                Welcome All Foreigner and Thai people we provide thr best
                massage master from all of Thailand. There are so many services
                that we can provide to you such as Oil massage, Foot massage,
                Thai traditional Massage
              </Text>
            </Row>
          </Col>
        </Row>
        <Row
          type="flex"
          style={{
            border: "2px solid #D8AE47",
            margin: "10px",
            padding: "10px"
          }}
        >
          <Col span={4}>
            <img
              style={{ width: "100%" }}
              src="https://www.honestdocs.co/system/image_attachments/images/000/039/082/medium/01._Oil_massage_90_mins_1_%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87_-_Montra_health_and_spa___1_350.jpg"
            />
          </Col>
          <Col span={16}>
            <Row>
              <Text strong style={{ fontSize: "1.6em" }}>
                Arunmanee Massage & Spa
              </Text>
            </Row>
            <Row>
              <Text>
                Welcome All Foreigner and Thai people we provide thr best
                massage master from all of Thailand. There are so many services
                that we can provide to you such as Oil massage, Foot massage,
                Thai traditional Massage
              </Text>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
