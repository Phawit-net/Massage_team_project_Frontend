import React, { Component } from 'react'
import { Row, Col ,Input } from "antd";
import Axios from "../../config/axios.setup";

export default class ShopInformation extends Component {
    state = {
        Shopname: 'dddd',
        ShopAccountNo:'',
        ShopAccountName : '',
        Tel: '',
        Shop_Images:[]
      };
    componentDidMount(){
        Axios.get('/getShop/1')
       .then(result => {
         console.log(result.data)
        
        this.setState({
           Shopname: result.data.shopName,
           Owner_Firstname: result.data.firstname,
           Owner_Lastname: result.data.lastname,
           Email: result.data.email,
           Tel: result.data.tel,
           Shop_Images:result.data.photoProfile
       })
         
       })
       .catch(err => {
         console.error(err);
       })

  }
  
    render() {
        const { TextArea } = Input;
        return (
            <div>
                <Row><h2>Shop information</h2></Row>
                <Row type='flex'><Col span={2}><h3>Shopname</h3></Col><Col> <h3>{this.state.Shopname}</h3></Col></Row>
                <Row type='flex'><Col span={2}><h3>Owner Firstname</h3></Col><Col> <Input size="small" placeholder="Input owner firstname" /> </Col></Row>
                <Row type='flex'><Col span={2}><h3>Owner Lastname</h3></Col><Col> <Input size="small" placeholder="Input owner lastname" /> </Col></Row>
                <Row type='flex'><Col span={2}><h3>Shop Description</h3></Col><Col> <TextArea rows={4} /> </Col></Row>
            </div>
        )
    }
}
