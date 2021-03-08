import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import Users from './Users'
import axios from 'axios'
import Search from './Search'
import Alert from './Alert'

export class App extends Component {
    constructor(props) {
        super(props);
        this.searchUsers = this.searchUsers.bind(this);
        this.clearResults = this.clearResults.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.state = {
            loading: false,
            users: [],
            user: {},
            alert: null
        }
    }
    searchUsers(keyword) {
        this.setState({ loading: true });
        setTimeout(() => {
            axios.get(`https://api.github.com/search/users?q=${keyword}`).
                then(res => this.setState({ users: res.data.items, loading: false }))
        }, 1000);
    }
    getUsers(userName) {
        this.setState({ loading: true });
        setTimeout(() => {
            axios.get(`https://api.github.com/users/${userName}`).
                then(res => this.setState({ user: res.data, loading: false }))
        }, 1000);
    }
    clearResults() {
        this.setState({
            users: []
        });
    }
    setAlert(msg, type) {
        this.setState({ alert: { msg, type } });
    }
    render() {
        return (
            <BrowserRouter>
                <NavBar title="Github Finder" icon="fab fa-github" />
                <Alert alert={this.state.alert} />
                <Switch>
                    <Route path="/" render={
                        props => (
                            <>
                                <Search searchUsers={this.searchUsers} clearResults={this.clearResults} showClearBtn={this.state.users.length > 0 ? true : false} setAlert={this.setAlert} />
                                <Users users={this.state.users} loading={this.state.loading} />
                            </>
                        )
                    } />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
