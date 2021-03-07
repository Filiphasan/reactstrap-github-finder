import React, { Component } from 'react'

export class User extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { id, name, login, avatar_url, html_url, followers, blog } = this.props.user;
        return (
            <div className="col-md-3">
                <div className="card m-2">
                    <img src={avatar_url} className="img-fluid" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <p className="card-text">Followers: {followers}</p>
                        <a href={html_url} className="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
