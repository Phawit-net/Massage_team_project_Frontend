import React, { Component } from "react";
import { Row, Input } from "antd";
// import Search from '../components/ShopPackages/Search'
import ShopList from "../components/Generals/Shop/ShopList";
import Axios from "axios";

const { Search } = Input;
export default class ShopPackages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList: [],
      page: 1,
      keyword: ""
    };
  }

  async componentDidMount() {
    const result = await Axios.get(
      `http://localhost:8080/shops/${this.state.page}`
    );
    this.setState({ shopList: result.data });
  }

  handleSearch(value) {
    console.log(value);
    console.log(this.state);
    let keyword = value;
    let page = this.state.page;
    Axios.get(
      `http://localhost:8080/searchShop?keyword=${keyword}&page=${page}`
    ).then(result => {
      this.setState({
        shopList: result.data,
        keyword: keyword
      });
    });
  }
  
  myCallback = dataFromChild => {
    this.setState({
      shopList: dataFromChild.shopList,
      page: dataFromChild.page
    });
  };

  render() {
    return (
      <div>
        <Row>
          <h1>Shop & Packages</h1>
          <Search
            placeholder="input search text"
            onSearch={value => this.handleSearch(value)}
            enterButton
          />
          <ShopList
            shopList={this.state.shopList}
            callbackFromParent={this.myCallback}
          />
        </Row>
      </div>
    );
  }
}
