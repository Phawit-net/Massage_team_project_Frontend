import React, { Component } from "react";
import { Avatar, Row, Col } from "antd";
import UserInformation from "../components/UserProfile/UserInformation";
import ServiceUsage from "../components/UserProfile/ServiceUsage";
export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <UserInformation/>
        {/* <ServiceUsage/> */}
      </div>
    );
  }
}
