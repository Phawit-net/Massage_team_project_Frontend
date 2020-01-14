import React from 'react';
import './App.css'
import { Row } from 'antd'
import ShopPackage from './pages/ShopPackages'


class App extends React.Component {
  render() {
    return (
      <>
        <Row>
          <ShopPackage />
        </Row>
      </>
    )
  }
}


export default App;
