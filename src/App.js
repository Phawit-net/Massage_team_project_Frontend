import React from 'react';
import './App.css'
import {Row} from 'antd'
import Header from './components/Generals/Header/Header'
import Footer from './components/Generals/Footer/Footer'
class App extends React.Component {
  render() {
    return (
      <>
        <Row>
          <Header/>
        </Row>
        <Row>
          content
        </Row>
        <Row>
          <Footer/>
        </Row>   
      </>
    )
  }
}


export default App;
