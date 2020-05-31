import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

    render() {

        return (

            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

                <Link to="/" className="navbar-brand">Welcome</Link>
                <div className="collpase">
                <ul className="navbar-nav mr-auto">

                    <li className="navbar-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>

                    <li className="navbar-item">
                    <Link to="/login" className="nav-link">Log In</Link>
                    </li>

                    <li className="navbar-item">
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                    </li>

                    <li className="navbar-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                    </li>

                    <li className="navbar-item">
                    <Link to="/logout" className="nav-link">Log Out</Link>
                    </li>

                </ul>
                </div>

            </nav>
        )
    }

}