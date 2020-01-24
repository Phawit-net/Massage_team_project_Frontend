import React, { Component } from "react";
import { Row, Typography, Col,Pagination, Button, List } from "antd";
import Paginations from './Paginations';
import ShopCard from "./ShopCard";
import Axios from 'axios';
const { Text } = Typography;
const numEachPage = 3

export default class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      minValue: 0 * numEachPage,
      maxValue: 1 * numEachPage,
      pageOfItems: []
    };
  }

  onChangePage = (pageOfItems) =>{
    this.setState({ pageOfItems: pageOfItems });
  }

  handleChange = value => {
    this.setState({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
      
    })
    console.log(this.state.minValue, this.state.maxValue)
  }

  render() {
    const shopListItem = this.props.shopList
    // const keyword = this.props.keyword
    return (
        <div>
        < Row type="flex" >
          {this.state.pageOfItems.slice(this.state.minValue, this.state.maxValue).map(shop =>
            <ShopCard key={shop.id} shop={{ shop }}/>
          )}
        </Row >
        <br />
        
        {/* <List
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
        /> */}
        <Paginations items={shopListItem} onChangePage={this.onChangePage} pageSize = {numEachPage}/>
      </div>
    );
  }
}
