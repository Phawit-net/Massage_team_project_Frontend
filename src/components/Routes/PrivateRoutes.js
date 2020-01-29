import React, { Component } from 'react'
import * as allRoutes from './index'
import rolesConfig from '../../config/roles'
import { Route, withRouter, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import store from "../../redux/store/store";
import { LOGOUT_USER } from '../../redux/actions/actions'

class PrivateRoutes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allowedRoutes: [],
            redirectRoute: []
        }
    }
    componentWillMount() {
        let role = this.props.role || 'guest'
        if (role) {
            this.setState({
                allowedRoutes: rolesConfig[role].routes,
                redirectRoute: [rolesConfig[role].redirect]
            })
        } else {
            store.dispatch({ type: LOGOUT_USER })
        }
    }
    render() {
        return (
            <>
                <Switch>
                    {this.state.allowedRoutes.map(route =>
                        < Route
                            path={route.url}
                            component={allRoutes[route.component]}
                            key={route.url}
                        />
                    )}
                    {this.state.redirectRoute.map(url =>
                        <Redirect to={url} />
                    )}
                </Switch>
            </>
        )
    }
}

export default withRouter(PrivateRoutes);