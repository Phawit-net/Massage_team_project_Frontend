import React, { Component } from "react";
import { Row, Input, Col } from "antd";
import ShopList from "../components/Generals/Shop/ShopList";
import Axios from "axios";
import styles from "./ShopPackages.module.css";

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
      `http://localhost:8080/shops`
    );
    this.setState({ shopList: result.data });
  }

  // handleSearch(value) {
  //   console.log(value);
  //   console.log(this.state);
  //   let keyword = value;
  //   let page = this.state.page;
  //   Axios.get(
  //     `http://localhost:8080/searchShops?keyword=${keyword}&page=${page}`
  //   ).then(result => {
  //     this.setState({
  //       shopList: result.data,
  //       keyword: keyword
  //     });
  //   });
  // }

  myCallback = dataFromChild => {
    this.setState({
      shopList: dataFromChild.shopList,
      page: dataFromChild.page
    });
  };

  render() {
    return (
      <div>
        <Row style={{ marginTop: '150px' }}>
          <Col style={{ padding: "20px 0px 20px 40px" }} className={styles.font}>
            Shop & Packages
          </Col>
          <div style={{ width: "90vw", margin: "auto", border: "2px solid #9E4624" }}>
            <Search
              placeholder="input search text"
              // onSearch={value => this.handleSearch(value)}
              enterButton
              style={{ margin: "2% 0% 2% 2%", width: "97%" }}
            />
            {/* <div style={{ margin: "2% 0% 2% 2%", width: "97%" }}>
              <from>
                <input placeholder ="input search text" />
                <button className={styles.searchButton} type="submit"><Icon type="search" style={{color:'#fff'}} /></button>
              </from>
            </div> */}

            <div style={{ marginBottom: "2%" }}>
              <ShopList
                shopList={this.state.shopList}
                keyword={this.state.keyword}
                callbackFromParent={this.myCallback}
              />
            </div>
          </div>
        </Row>
      </div>
    );
  }
}
