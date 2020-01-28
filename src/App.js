import React from 'react';
import './App.css'
import { Row,BackTop } from 'antd'
import Header from './components/Generals/Header/Header'
import Footer from './components/Generals/Footer/Footer'
import { Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import PrivateRoutes from './components/Routes/PrivateRoutes'
class App extends React.Component {
  render() {
    const role = this.props.user.role
    return (
      <>
        <Row style={{ position: 'fixed', width: '100%', zIndex: '200' }}>
          <Header />
          <BackTop/>
        </Row>
        <Row>
          <Switch>
          <PrivateRoutes handleAppLogin={this.login} role={role} />
          </Switch>
        </Row>
        <Row style={{ marginTop: '50px' }}>
          <Footer />
        </Row>
      </>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(App)
