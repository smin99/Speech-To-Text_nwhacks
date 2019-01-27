import React, { Component } from 'react';
import './Profile.css';
import Navbar from './Navbar';
import man from '../constants/images/pexels-photo-1315741.jpeg';
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

class Profile extends Component {
    render() {
        return(
            <div>
                <Navbar sass={true}/>
                <div className="profilePage">
                    <  img className="pavatar" alt="Avatar" src={man} />
                    <div className="bigDiv">
                        Name: John Doe<br />
                        Age: 21<br />
                        Gender: M<br />
                        Times Available: 7am - 3pm MTW
                    </div>
                    <div>
                        <Link to={routes.SEARCH}>
                            <button className="stevebtn">Find Buddies</button>
                        </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Profile;