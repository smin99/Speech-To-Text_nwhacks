import React, { Component } from 'react';
import './Signup.css';
import {Button,FormControl,Label} from 'react-bootstrap';

class Signup extends Component {
    render() {
        return(
          <div>
            <div>
              <form name="signupForm" action="/" method="post">
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" name="username" />
                </div> <br />
                <div class="form-group">
                  <label for="gender">Gender:</label> <br />
                  <input class="form-radio" type="radio" name="gender" value="male" checked /> Male <br />
                  <input class="form-radio" type="radio" name="gender" value="female" /> Female <br />
                  <input class="form-radio" type="radio" name="gender" value="other" /> Other <br />
                </div> <br />
                <div class="form-group">
                  <label for="age">Age:</label>
                  <input type="text" name="age" />
                </div> <br />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        )
    }
}

export default Signup;
