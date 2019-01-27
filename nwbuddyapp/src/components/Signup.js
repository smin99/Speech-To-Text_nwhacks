import React, { Component } from 'react';
import './Signup.css';
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
import Navbar from './Navbar';

class Signup extends Component {
    render() {
        return(
            <div>
            <Navbar />
          <div>
            <h1>Login/SignUp</h1>
            <div className="signUp">
              <div>
                <div class="form-group">
                  <label for="name">Name: </label>
                  <input type="text" name="username" />
                </div> <br />
                <div class="form-group">
                  <label for="gender">Gender: </label> <br />
                  <input class="form-radio" type="radio" name="gender" value="male" checked /> Male <br />
                  <input class="form-radio" type="radio" name="gender" value="female" /> Female <br />
                  <input class="form-radio" type="radio" name="gender" value="other" /> Other <br />
                </div> <br />
                <div class="form-group">
                  <label for="age">Age: </label>
                  <input type="text" name="age" />
                </div> <br />
                <Link to={routes.PROFILE}>
                    <button className="stevebtn">Submit</button>
                </Link>
              </div>
            </div>
          </div>
          </div>
        )
    }
}

export default Signup;
