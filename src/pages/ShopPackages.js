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
      keyword: ""
    };
  }

  async componentDidMount() {
    const result = await Axios.get(
      `http://localhost:8080/shops`
    );
    this.setState({ shopList: result.data });
  }

  handleSearch(value) {
    let keyword = value;
    Axios.get(
      `/searchShops?keyword=${keyword}`
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
              onSearch={value => this.handleSearch(value)}
              enterButton
              style={{ margin: "2% 0% 2% 2%", width: "97%" }}
            />
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
