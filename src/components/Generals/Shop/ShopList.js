import React, { Component } from "react";
import ShopCard from "./ShopCard";
import Axios from 'axios';

export default class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList : [{
        id:1,
        name:'asdas'
      },{
        id:2,
        name:'qweqwe'
      }]
    };
  }

  componentDidMount(){
    Axios.get("http://localhost:8080/shops")
      .then(result => {
        this.setState({
          shopList: result.data
        });
      },
        console.log(this.state)
      )
  }

  render() {
    return (
      <div>
        <ShopCard shopList={this.state.shopList}/>
      </div>
    );
  }
}
