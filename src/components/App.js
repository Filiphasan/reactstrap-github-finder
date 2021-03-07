import React, { Component } from 'react'
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
            <>
                <NavBar title="Github Finder" icon="fab fa-github" />
                <Alert alert={this.state.alert} />
                <Search searchUsers={this.searchUsers} clearResults={this.clearResults} showClearBtn={this.state.users.length > 0 ? true : false} setAlert={this.setAlert} />
                <Users users={this.state.users} loading={this.state.loading} />
            </>
        )
    }
}

export default App
