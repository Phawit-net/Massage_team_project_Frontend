import React, { Component } from "react";
import { Row, Typography, Col, Button, List, Pagination } from "antd";
import styles from "./ShopCard.module.css";

import ShopCard from "./ShopCard";
import Axios from 'axios';
const { Text } = Typography;


export default class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  async componentDidMount() {
    const result = await Axios.get(`http://localhost:8080/shops/${this.state.page}`)
    this.setState({ shopList: result.data })
  }

  render() {
    const shopListItem = this.props.shopList
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page =>{
              this.setState({
                page: page, 
              }, async () => {
                const result = await Axios.get(`http://localhost:8080/shops/${page}`)
                this.setState({ shopList: result.data })
                this.props.callbackFromParent(this.state);
              })
            },
            pageSize: 3,
            total:12,
          }}
          dataSource={shopListItem}
          renderItem={item => (
            <ShopCard item={item} />
          )}
        />
      </div>
    );
  }
}
