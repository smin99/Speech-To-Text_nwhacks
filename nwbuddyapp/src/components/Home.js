import React, { Component } from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
import Navbar from './Navbar';

class Home extends Component {
    render() {
        return(
            <div>
            <Navbar />
            <div className="home">
                <h1>Welcome to BuddyStudies</h1>
                <h2>The #1 Place to Find Accountibility Buddies Near You</h2>
                
                    <Link to={routes.SIGNUP}>
                        <button className="stevebtn">GET STARTED</button>
                    </Link>
                
                
            </div>
            </div>
        )
    }
}

export default Home;