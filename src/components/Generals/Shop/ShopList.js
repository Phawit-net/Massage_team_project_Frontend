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

  render() {
    const shopListItem = this.props.shopList
    const keyword = this.props.keyword
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {

              this.setState({
                page: page,
              }, async () => {
                if (keyword === '') {
                  const result = await Axios.get(`http://localhost:8080/shops/${page}`)
                  this.setState({ shopList: result.data })
                  this.props.callbackFromParent(this.state);
                } else {
                  const result = await Axios.get(`http://localhost:8080/searchShops?keyword=${keyword}&page=${page}`)
                  this.setState({ shopList: result.data })
                  this.props.callbackFromParent(this.state);
                }
              })
            },
            pageSize: 3,
            total: shopListItem.length

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
