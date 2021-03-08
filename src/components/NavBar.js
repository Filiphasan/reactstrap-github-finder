import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropType from 'prop-types'

export class NavBar extends Component {
    render() {
        const { icon, title } = this.props;
        return (
            <div className="container-fluid bg-primary">
                <div className="container">
                    <nav className="navbar navbar-expand-sm navbar-dark ">
                        <Link to="/" className="navbar-brand">
                            <i className={icon}></i> {title}
                        </Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="about" className="nav-link" >About</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
NavBar.defaultProps = {
    title: 'Github',
    icon: 'fab fa-github'
}
NavBar.propType = {
    title: PropType.string.isRequired,
    icon: PropType.string.isRequired
}
export default NavBar

