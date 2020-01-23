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
                <Link to='/userprofile'>
                <span>
                  Profile
                </span>
                </Link>
              </Menu.Item>
              {this.props.user.role==='seller'?<Menu.Item><Link to='/shopprofile'><span>Shop profile</span></Link></Menu.Item>:''}
              <Menu.Item>
                <span onClick={()=>this.props.logout()}>
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