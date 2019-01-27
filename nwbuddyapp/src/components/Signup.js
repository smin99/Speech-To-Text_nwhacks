import React, { Component } from 'react';
import './Signup.css'

class Signup extends Component {
    render() {
        return(
          <div>
            <div className="signup">
              hi i'm the signup page
            </div> <br />
            <div>
              <form name="signupForm" action="/" method="post">
                Name: <input type="text" name="username" /> <br />
                Gender: <br />
                <input type="radio" name="gender" value="male" checked /> Male <br />
                <input type="radio" name="gender" value="female" /> Female <br />
                <input type="radio" name="gender" value="other" /> Other <br />
                Age: <input type="text" name="age" />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        )
    }
}

export default Signup;
