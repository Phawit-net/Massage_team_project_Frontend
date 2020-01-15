import React, { Component } from 'react'
import { Row, Input } from 'antd'
// import Search from '../components/ShopPackages/Search'
import ShopList from '../components/Generals/Shop/ShopList'
import Axios from 'axios'

const { Search } = Input;
export default class ShopPackages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList: [],
      page: 1,
      keyword: "",
    };
  }

  async componentDidMount() {
    const result = await Axios.get(`http://localhost:8080/shops/${this.state.page}`)
    this.setState({ shopList: result.data })
    // console.log(this.state.shopList)
  }

  handleSearch(value) {
    let keyword = value
    let page = this.state.page
    Axios.get(`http://localhost:8080/searchShop?keyword=${keyword}&page=${page}`)
      .then(result => {
        this.setState({
          shopList: result.data,
          keyword: keyword
        })
      })
  }

  render() {
    return (
      <div
        style=
        {{
          width: '1354px',
          height: '1138px',
          background: '#FFFEFE',
          border: '1px solid #926F3B',
          boxSizing: 'border-box',
          margin: "100px 30px 100px 30px"
        }}
      >
        <Row>
          <h1>
            Shop & Packages
        </h1>
          <Search placeholder="input search text" onSearch={value => this.handleSearch(value)} enterButton />
          {/* {this.state.shopList.map(shop =>
            <p key={shop.id} >{shop.shopName}</p>
          )} */}
          <ShopList shopList={this.state.shopList} keyword={this.state.keyword} />
        </Row>
      </div>
    )
  }
}
