import React, { Component } from 'react'
import FindLocation from './FindLocation'
import FormLocation from './FormLocation'

export default class CreateLocation extends Component {
    render() {
        return (
            <div>
                <FindLocation />
                <FormLocation />
            </div>
        )
    }
}
