import React, { Component } from 'react'
import { Input } from 'antd'
import Axios from 'axios';

const { Search } = Input;

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shops: [],
      page: "1",
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/shops')
      .then(result => {
        this.setState({
          shops: result.data
        })
      })
  }

  handleSearch(value) {
    let keyword = value
    let page = this.state.page
    Axios.get(`http://localhost:8080/searchShop?keyword=${keyword}&page=${page}`)
      .then(result => {
        this.setState({
          shops: result.data
        })
      })
  }

  render() {
    console.log(this.state.shops, this.state.page)
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
        <h1>
          Shop & Packages
        </h1>
        <Search placeholder="input search text" onSearch={value => this.handleSearch(value)} enterButton />
        {this.state.shops.map(shop =>
          <p key={shop.id} >{shop.shopName}</p>
        )}


      </div>
    )
  }
}
