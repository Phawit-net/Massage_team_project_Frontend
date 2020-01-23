import React, { Component } from "react";
import { Row, Typography, Col, Button, List } from "antd";
import Paginations from './Paginations';
import ShopCard from "./ShopCard";
import Axios from 'axios';
const { Text } = Typography;

var exampleItems = [...Array(15).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

export default class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      exampleItems: exampleItems,
      pageOfItems: []
    };
  }

  onChangePage = (pageOfItems) =>{
    this.setState({ pageOfItems: pageOfItems });
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
          {this.state.pageOfItems.map(item =>
              <div key={item.id}>{item.name}</div>
          )}
        <Paginations items={this.state.exampleItems} onChangePage={this.onChangePage} />
      </div>
    );
  }
}
