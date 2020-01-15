import React from 'react';
import './App.css'
import {Row} from 'antd'
import Header from './components/Generals/Header/Header'
import Footer from './components/Generals/Footer/Footer'
import{Switch,Route} from 'react-router-dom'

import Home from './pages/Home'
import Payment from './pages/Payment'
import ShopDetails from './pages/ShopDetails'
import ShopPakages from './pages/ShopPackages'
import ShopProfile from './pages/ShopProfile'
import Signup from './pages/Signup'
import UserProfile from './pages/UserProfile'
class App extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Header/>
        </Row>
        <Row>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/payment' component={Payment}/>
            <Route path='/shopdetails' component={ShopDetails}/>
            <Route path='/shoppackages' component={ShopPakages}/>
            <Route path='/shopprofile' component={ShopProfile}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/userprofile' component={UserProfile}/>
          </Switch>
        </Row>
          <Row>
          <Footer/>
        </Row>          
      </>
    )
  }
}


export default App;
