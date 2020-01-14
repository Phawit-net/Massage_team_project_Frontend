import React, { Component } from 'react'
import { Row, Col, Card, Menu, Drawer, Button } from 'antd'
import {Link} from 'react-router-dom'
import Logo from '../../../picture/NuadThaiLogo.png'
import styles from './Header.module.css'
import LoginModal from './LoginModal'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            loginvisible:false
        }
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
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
      showLoginModalDrawer=()=>{
          this.onClose();
          this.showLoginModal()
      }
    render() {
        return (
            <Card style={{ backgroundColor: '#f1e6b2', opacity: '0.8' }} bodyStyle={{ padding: '0' }}>
                <Row type='flex' justify='center' align='middle'>
                    <Col xs={19} md={5} lg={10} xl={10}>
                        <img src={Logo} alt='Logo' style={{ width: '150px', height: '150px' }} />
                    </Col>
                    <Col xs={5} md={19} lg={12} xl={10}>
                        <Row>
                            <Menu mode="horizontal" inlineIndent='50' style={{ backgroundColor: '#f1e6b2' }} className={styles.rightMenu}>
                               <Menu.Item className={styles.menuoption}><Link className={styles.linkcolor} to='/home'>Home</Link></Menu.Item>
                               <Menu.Item className={styles.menuoption}><Link className={styles.linkcolor} to='/shoppackages'>Shop & Packages</Link></Menu.Item>
                                <Menu.Item className={styles.menuoption}>Contact Us</Menu.Item>
                                <LoginModal loginvisible={this.state.loginvisible} showLoginModal={this.showLoginModal} handleCancel={this.handleCancel}/>
                            </Menu>
                            <Button id={styles.drawermenu} icon='menu-unfold' size='large' ghost onClick={this.showDrawer}/>
                            <Drawer 
                                title="Menu"
                                placement="right"
                                closable={false}
                                onClose={this.onClose}
                                visible={this.state.visible}
                            >
                                <Menu >
                                    <Menu.Item ><Link to='/home' onClick={()=>this.onClose()}>Home</Link></Menu.Item>
                                    <Menu.Item ><Link to='/shoppackages' onClick={()=>this.onClose()}>Shop & Packages</Link></Menu.Item>
                                    <Menu.Item >Contact Us</Menu.Item>
                                    <Menu.Item onClick={()=>this.showLoginModalDrawer()}>Login</Menu.Item>
                                </Menu>
                            </Drawer>
                        </Row>
                    </Col>
                </Row>
            </Card>
        )
    }
}
