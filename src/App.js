import React from 'react';
import './App.css'
import { Row } from 'antd'
import Header from './components/Generals/Header/Header'
import Footer from './components/Generals/Footer/Footer'
import { Switch, Route } from 'react-router-dom'
import FindLocation from "../src/components/ShopDetails/FindLocation";
import Home from './pages/Home'
import Payment from './pages/Payment'
import ShopDetails from './pages/ShopDetails'
import ShopPackages from './pages/ShopPackages'
import ShopProfile from './pages/ShopProfile'
import Signup from './pages/Signup'
import UserProfile from './pages/UserProfile'
class App extends React.Component {
  render() {
    return (
      <>
        {/* <Row style={{ position: 'fixed', width: '100%', zIndex: '200' }}>
          <Header />
        </Row>
        <Row>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/payment' component={Payment} />
            <Route path='/shopdetails' component={ShopDetails} />
            <Route path='/shoppackages' component={ShopPackages} />
            <Route path='/shopprofile' component={ShopProfile} />
            <Route path='/signup' component={Signup} />
            <Route path='/userprofile' component={UserProfile} />
          </Switch>
        </Row>
        <Row>
          <Footer />
        </Row> */}
        <FindLocation />
      </>
    )
  }
}


export default App;
