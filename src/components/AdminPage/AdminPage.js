import React, { Component, Fragment } from "react"
import { Redirect } from 'react-router-dom'

import "./AdminPage.css"

/* Componentes */
import Header from '../UsersHeader/UsersHeader'
import Navbar from './Navbar/Navbar'
import Users from "./Users/Users"
import Messages from "./Messages/Messages"

export default class AdminPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            userData: {},
        }

        this.logout = this.logout.bind(this)
    }

    componentWillMount() {
        if (sessionStorage.getItem("userData")) {
            const data = JSON.parse(sessionStorage.getItem("userData"))

            this.setState({
                userData: data.userData,
            })
        }
        else {
            this.setState({
                redirect: true
            })
        }
    }

    logout() {
        sessionStorage.setItem("userData", '');
        sessionStorage.clear();

        this.setState({
            redirect: true
        })
    }

    render() {

        // Devuelve home si deslogeamos
        if (this.state.redirect) {
            return <Redirect to="/" />
        }

        // Devuelve home si el usuario no existe
        if (!this.state.userData.id) {
            return <Redirect to="/" />
        }

        return (
            <Fragment>
                <Header user={this.state.userData} logout={this.logout} />
                <Navbar />
                <Users />
                <Messages />
            </Fragment>
        );
    }
}