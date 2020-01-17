import React, { Component } from "react";
import { Row, Input } from "antd";
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
          
          
            <h1 style={{marginBottom:"20px", textIndent: "4ch"}}>Shop & Packages</h1>
          <div style={{width : "90vw", margin : "auto" , border: "1px solid #9E4624"}}>  
          <Search
            placeholder="input search text"
            onSearch={value => this.handleSearch(value)}
            enterButton
            style={{margin:"2% 0% 2% 2%", width:"97%"}}
          />
          <div style={{marginBottom:"2%"}}>
          <ShopList
            shopList={this.state.shopList}
            keyword = {this.state.keyword}
            callbackFromParent={this.myCallback}
          />
          </div>
          </div>
        </Row>
      </div>
    );
  }
}
