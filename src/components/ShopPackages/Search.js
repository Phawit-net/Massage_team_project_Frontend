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

    return (
      <>
        
        {/* <Search placeholder="input search text" onSearch={value => this.handleSearch(value)} enterButton />
        {this.state.shops.map(shop =>
          <p key={shop.id} >{shop.shopName}</p>
        )} */}


      </>
    )
  }
}
