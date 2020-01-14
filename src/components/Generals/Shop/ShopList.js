import React, { Component } from "react";
import ShopCard from "./ShopCard";
import Axios from 'axios';


export default class ShopList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopList : []
    };
  }

  async componentDidMount(){
    const result = await Axios.get(`http://localhost:8080/shops`)
    this.setState({ shopList: result.data })
    console.log(this.state.shopList)
  }

  render() {
    return (
      <div>
        <ShopCard 
          shopList = {this.state.shopList}/>
          {/* shopPics = {this.state.shopList.shopPic}/> */}
      </div>
    );
  }
}
