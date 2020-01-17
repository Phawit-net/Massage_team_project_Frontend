import React, { Component } from 'react'
import { Row, Col, Card, Menu, Drawer, Button } from 'antd'
import { Link } from 'react-router-dom'
import Logo from '../../../picture/NuadThaiLogo.png'
import styles from './Header.module.css'
import LoginModal from './LoginModal'
import UserDropdown from './UserDropdown'
import {logout} from '../../../redux/actions/actions'
import { connect } from 'react-redux'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            loginvisible: false,
        }
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onCloseDrawer = () => {
        this.setState({
            visible: false,
        });
    };
    showLoginModal = () => {
        this.setState({
            loginvisible: true,
        });
    };

    handleCancel = e => {
        this.setState({
            loginvisible: false,
        });
    };
    showLoginModalDrawer = () => {
        this.onCloseDrawer();
        this.showLoginModal()
    }
    renderUserOptioninTopnavbar() {
        switch (this.props.user.role) {
            case 'buyer':
                return <UserDropdown />
            case 'seller':
                return <UserDropdown />
            default:
                return (<LoginModal loginvisible={this.state.loginvisible} showLoginModal={this.showLoginModal} handleCancel={this.handleCancel} />)
        }

    }
    renderUserOptioninDrawer = () => {
        const userOption = (
            <Menu>
                <Menu.Item ><Link to='/userprofile'onClick={()=>this.onCloseDrawer()}>Profile</Link></Menu.Item>
                {this.props.user.role==='seller'?<Menu.Item><Link to='/shopprofile' onClick={()=>this.onCloseDrawer()}>Shop profile</Link></Menu.Item>:''}
                <Menu.Item onClick={()=>{this.props.logout();this.onCloseDrawer()}} >Logout</Menu.Item>
            </Menu>
        )
        switch (this.props.user.role) {
            case 'buyer':
                return userOption
            case 'seller':
                return userOption
            default:
                return (<Menu.Item onClick={() => this.showLoginModalDrawer()}>Login</Menu.Item>)
        }
    }
    render() {
        return (
            <Card style={{ backgroundColor: '#f1e6b2', opacity: '0.8' }} bodyStyle={{ padding: '0' }}>
                <Row type='flex' justify='center' align='middle'>
                    <Col xs={19} md={5} lg={10} xl={10}>
                   <Link to ='/home'><img src={Logo} alt='Logo' style={{ width: '150px', height: '150px' }} /></Link>     
                    </Col>
                    <Col xs={5} md={19} lg={12} xl={10}>
                        <Row>
                            <Menu mode="horizontal" inlineIndent='50' style={{ backgroundColor: '#f1e6b2' }} className={styles.rightMenu}>
                                <Menu.Item className={styles.menuoption}><Link className={styles.linkcolor} to='/home'>Home</Link></Menu.Item>
                                <Menu.Item className={styles.menuoption}><Link className={styles.linkcolor} to='/shoppackages'>Shop & Packages</Link></Menu.Item>
                                <Menu.Item className={styles.menuoption}>Contact Us</Menu.Item>
                                {this.renderUserOptioninTopnavbar()}
                            </Menu>
                            <Button id={styles.drawermenu} icon='menu-unfold' size='large' ghost onClick={this.showDrawer} />
                            <Drawer
                                title="Menu"
                                placement="right"
                                closable={false}
                                onClose={this.onCloseDrawer}
                                visible={this.state.visible}
                            >
                                <Menu >
                                    <Menu.Item ><Link to='/home' onClick={() => this.onCloseDrawer()}>Home</Link></Menu.Item>
                                    <Menu.Item ><Link to='/shoppackages' onClick={() => this.onCloseDrawer()}>Shop & Packages</Link></Menu.Item>
                                    <Menu.Item >Contact Us</Menu.Item>
                                    {this.renderUserOptioninDrawer()}
                                </Menu>
                            </Drawer>
                        </Row>
                    </Col>
                </Row>
            </Card>
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


export default connect(mapStateToProps, mapDispatchToProps)(Header)