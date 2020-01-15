import React, { Component } from 'react'
import Axios from '../config/axios.setup'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList: [],
      page: 1
    };
  }

  myCallback = (dataFromChild) => {
    this.setState({
      shopList : dataFromChild.shopList,
      page : dataFromChild.page
    })
  }

  async componentDidMount() {
    const result = await Axios.get(`http://localhost:8080/shops/${this.state.page}`)
    this.setState({ shopList: result.data })
  }

    render() {
        return (
            <div>
            </div>
        )
    }
}
