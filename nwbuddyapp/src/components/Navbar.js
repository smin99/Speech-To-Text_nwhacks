import React, { Component } from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <h2>BuddyStudies</h2>
                <div className="navLinks">
                    <Link className="navLink" to={routes.HOME}>Home</Link>
                    <Link className="navLink" to={routes.PROFILE}>Profile</Link>
                    <Link className="navLink" to={routes.SEARCH}>Search</Link>
                    {!this.props.sass ? (
                        <Link className="navLink" to={routes.SIGNUP}>Login/SignUp</Link>
                    ) : (
                        <Link className="navLink" to={routes.SIGNUP}>Logout</Link>
                    )}
                    
                </div>
            </div>
        )
    }
}

export default Navbar;