import React, { Component } from 'react'
import User from './User';
import Loading from './Loading'

export class Users extends Component {
    render() {
        const { users, loading } = this.props;
        if (loading) {
            return (
                <Loading />
            )
        } else {
            return (
                <div className="container">
                    <div className="row">
                        {
                            users.map(user => (
                                <User key={user.id} user={user} />
                            ))
                        }
                    </div>
                </div>
            )
        }
    }
}

export default Users
