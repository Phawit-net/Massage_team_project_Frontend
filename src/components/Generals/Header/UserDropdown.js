import React, { Component } from 'react'
import { Dropdown,Icon,Menu } from 'antd'
import styles from './Header.module.css'
import {connect} from 'react-redux'
import {logout} from '../../../redux/actions/actions'

 class UserDropdown extends Component {
    render() {
        const menu = (
            <Menu>
              <Menu.Item>
                <span>
                  Profile
                </span>
              </Menu.Item>
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
                        User <Icon type="down" />
                    </span>
                </Dropdown>

            </>
        )
    }
}
const mapDispatchToProps = {
  logout: logout,
}


export default connect(null, mapDispatchToProps)(UserDropdown)