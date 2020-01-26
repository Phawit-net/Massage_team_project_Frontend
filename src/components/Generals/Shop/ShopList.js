import React, { Component } from "react";
import { Row } from "antd";
import Paginations from './Paginations';
import ShopCard from "./ShopCard";
const numEachPage = 3

export default class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    return (
        <div>
        < Row type="flex" >
          {this.state.pageOfItems.slice(this.state.minValue, this.state.maxValue).map(shop =>
            <ShopCard key={shop.id} shop={{ shop }}/>
          )}
        </Row >
        <br />        
        <Paginations items={shopListItem} onChangePage={this.onChangePage} pageSize = {numEachPage}/>
      </div>
    );
  }
}
