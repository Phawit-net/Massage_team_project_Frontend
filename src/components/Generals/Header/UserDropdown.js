import React, { Component } from 'react'
import { Dropdown,Icon,Menu } from 'antd'
import styles from './Header.module.css'
import {connect} from 'react-redux'
import {logout} from '../../../redux/actions/actions'
import { Link } from 'react-router-dom'
 class UserDropdown extends Component {
    render() {
        const menu = (
            <Menu>
              <Menu.Item>
                {this.props.user.role==='buyer'||this.props.user.role==='seller'?
                <Link to='/userprofile'><span>Profile</span></Link>:this.props.user.role==='admin'?
                <Link to='/admin'><span>Admin</span></Link>:''}
              </Menu.Item>
              {this.props.user.role==='seller'?<Menu.Item><Link to='/shopprofile'><span>Shop profile</span></Link></Menu.Item>:''}
              <Menu.Item onClick={()=>{this.props.logout();window.location.reload()}}>
                <span >
                 Logout
                </span>
              </Menu.Item>
            </Menu>
          );
        return (
            <>
                <Dropdown overlay={menu}>
                    <span className={styles.menuoption} >
                        {this.props.user.name} <Icon type="down" />
                    </span>
                </Dropdown>

            </>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}
const mapDispatchToProps = {
  logout: logout,
}


export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown)