import React, { Component } from "react";
import { Row, Col } from "antd";
import Axios from "../../config/axios.setup";

export default class UserInformation extends Component {
    state = {
        Username: '',
        Firstname: '',
        Lastname: '',
        Email : '',
        Tel: ''
      };

      componentDidMount(){
         Axios.get('/get-user')
        .then(result => {
          console.log(result.data)
         
         this.setState({
            Username: result.data.username,
            Firstname: result.data.firstname,
            Lastname: result.data.lastname,
            Email: result.data.email,
            Tel: result.data.tel
        
        })
          
        })
        .catch(err => {
          console.error(err);
        })
 
   }

  render() {
    return (
      <div>

<Row><h2>Personal information</h2></Row>
<Row type='flex'><Col span={4}><h3>Username</h3></Col><Col> <h3>{this.state.Username}</h3></Col></Row>
<Row type='flex'><Col span={4}><h3>Firstname</h3></Col><Col> <h3>{this.state.Firstname}</h3></Col></Row>
<Row type='flex'><Col span={4}><h3>Lastname</h3></Col><Col> <h3>{this.state.Lastname}</h3></Col></Row>
<Row type='flex'><Col span={4}><h3>Email</h3></Col><Col> <h3>{this.state.Email}</h3></Col></Row>
<Row type='flex'><Col span={4}><h3>Tel.</h3></Col><Col> <h3>{this.state.Tel}</h3></Col></Row>
       
      </div>
    );
  }
}
