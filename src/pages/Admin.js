import React, { Component } from 'react'
import { Table } from 'antd'
import './Admin.css'
import Axios from 'axios'

export default class Admin extends Component {
    state = {
        data: [],
        filter: [],
        show: []
    };

    refresh = () => {
        Axios.get('/Alluser')
            .then(res => {
                this.setState({ data: res.data })
                this.setState({
                    filter: this.state.data.map(data => ({
                        id: data.id,
                        Username: data.username,
                        Role: data.roles,
                        Firstname: data.firstname,
                        Lastname: data.lastname,

                    }))

                })
                console.log(this.state.filter)
                this.setState({
                    show: this.state.filter.filter(data => data.Role !== 'admin')
                })
                console.log(this.state.show)
            }).catch(err =>
                console.log({ message: err.message })
            )
    }


    componentDidMount() {

        this.refresh()

    }

    HandleDelete = (id) => (e) => {
        Axios.delete(`deleteUser/${id}`)
            .then(result => {
                console.log(result)
                this.refresh()
            }).catch(err => {
                console.log({ message: err.message })
            })
        
    }





    render() {
        const columns = [
            {
                title: 'Username',
                dataIndex: 'Username',
                key: 'Username',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Role',
                dataIndex: 'Role',
                key: 'Role',
            },
            {
                title: 'Firstname',
                dataIndex: 'Firstname',
                key: 'Firstname',
            },
            {
                title: 'Lastname',
                key: 'Lastname',
                dataIndex: 'Lastname'
            },
            {
                title: 'Action',
                key: 'id',
                dataIndex: 'id',

                render: (id) => (
                    <span>
                        <a onClick={this.HandleDelete(id)}>  delete </a>
                    </span>
                ),
            },
        ];

    

        return (
            <div style={{marginBottom:'300px', marginLeft:'10%',marginRight:'10%'}}>
                <Table className="admin" columns={columns} dataSource={this.state.show} scroll={{x:800}} />
            </div>
        )
    }
}
