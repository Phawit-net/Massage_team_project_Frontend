import React, { Component } from 'react'
import { Row } from 'antd'
import Header from '../components/Generals/Header/Header'
import Footer from '../components/Generals/Footer/Footer'
import Search from '../components/ShopPackages/Search'

export default class ShopPackages extends Component {
  render() {
    return (
      <>
        <Row>
          <Header />
        </Row>
        <Row>
          <Search />
        </Row>
        <Row>
          <Footer />
        </Row>
      </>
    )
  }
}
