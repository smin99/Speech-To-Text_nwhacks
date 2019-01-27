import React, { Component } from 'react';
import './Search.css';
import man1 from '../constants/images/adult-beard-boy-220453.jpg';
import man2 from '../constants/images/adult-blur-cars-724887.jpg';
import man3 from '../constants/images/beard-boy-casual-1222271.jpg';
import woman from '../constants/images/beautiful-brunette-cute-774909.jpg';
import Navbar from './Navbar';

class Search extends Component {
    render() {
        return(
            <div>
            <Navbar sass={true}/>
            <div className="search">
                <h1>Buddies Near You</h1>
                <div className="profiles">
                    <div className="profile">
                        <img className="avatar" alt="Avatar" src={man1} />
                        <div>
                            Joe
                        </div>
                        <div>
                            0.6 miles away
                        </div>
                        <div>
                            Available 2 - 6pm Sundays & 1 - 4pm Mondays
                        </div>
                        <div>
                            <button disabled={true}>Invite</button>
                        </div>
                    </div>
                    <div className="profile">
                        <img className="avatar" alt="Avatar" src={man2} />
                        <div>
                            John
                        </div>
                        <div>
                            1 mile away
                        </div>
                        <div>
                            Available 8am - 2pm Mondays, Wednesdays & Thursdays
                        </div>
                        <div>
                            <button disabled={true}>Invite</button>
                        </div>
                    </div>
                    <div className="profile">
                        <img id="steve" className="avatar" alt="Avatar" src={man3} />
                        <div>
                            Steve
                        </div>
                        <div>
                            2 miles away
                        </div>
                        <div>
                            Available 2 - 6pm Tuesdays & Thursdays
                        </div>
                        <div>
                            <button className="stevebtn" onClick={() => document.getElementById("funnyBox").classList.remove("hidden")}>Invite</button>
                        </div>
                    </div>
                    <div className="profile">
                        <img className="avatar" alt="Avatar" src={woman} />
                        <div>
                            Jane
                        </div>
                        <div>
                            2 miles away
                        </div>
                        <div>
                            Available 11am - 7pm Saturdays
                        </div>
                        <div>
                            <button disabled={true}>Invite</button>
                        </div>
                    </div>
                </div>
                <div id="funnyBox" className="funnyBox hidden">
                    <div className="lol">
                        <img className="gravatar" alt="Avatar" src={man3} />
                        <div>
                            Steve
                        </div>
                        <button id="close" onClick={() => document.getElementById("funnyBox").classList.add("hidden")}>Close</button>
                    </div>
                    <div id="messageBox">
                    </div>
                    <textarea id="textarea" onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                            let text = document.getElementById("textarea").value;
                            let message = document.createElement("div");
                            message.classList.add("message");
                            message.textContent = text;
                            document.getElementById("messageBox").appendChild(message);
                            document.getElementById("textarea").value = '';
                        }
                    }}/>
                </div>
            </div>
            </div>
        )
    }
}

export default Search;