import React, { Component } from "react";
import { Row, Typography, Col, Button, List } from "antd";
import styles from "./ShopCard.module.css";

import ShopCard from "./ShopCard";
import Axios from 'axios';
const { Text } = Typography;


export default class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList: [],
      page: 1
    };
  }

  // async componentDidMount() {
  //   console.log(this.props.shopList)
  //   this.setState({ shopList: this.props.shopList })
  //   // console.log(this.state.shopList)

  // }

  render() {
    const shopListItem = this.props.shopList
    let keyword = this.props.keyword
    // console.log(this.props.shopList)
    // console.log(shopListItem)
    return (
      <div>
        {/* <ShopCard 
          shopList = {this.state.shopList}/> */}
        {/* shopPics = {this.state.shopList.shopPic}/> */}
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              this.setState({
                page: page,
                keyword: keyword
              }, async () => {
                const result = await Axios.get(`http://localhost:8080/shops/${this.state.page}`)
                this.setState({ shopList: result.data })
                console.log(this.state.shopList)
              })
            },
            pageSize: 3,
            total: 21
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
