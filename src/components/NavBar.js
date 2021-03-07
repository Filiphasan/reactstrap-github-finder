import React, { Component } from 'react'
import PropType from 'prop-types'

export class NavBar extends Component {
    render() {
        const { icon, title } = this.props;
        return (
            <nav className="navbar navbar-dark bg-primary">
                <a href="#" className="navbar-brand mx-auto">
                    <i className={icon}></i> {title}
                </a>
            </nav>
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

