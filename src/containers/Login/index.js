import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap';

function Login(props) {
  return (
    <div className="loginCon">
      <div className="innerContainer">
        <div className="loginContainer">
          <div className="loginLogoBox">
            <div className="logoBox">
              <img src="images/logoCircle.png" />
            </div>
          </div>

          <div className="loginBox">
            <h3>Welcome to C&B Operations Workspace!</h3>
            <TextField label="Email Addess" variant="outlined" className="formElement" />
            <TextField label="Password" type="password" variant="outlined" className="formElement" />
            <div className="text-right forgotLink">
              <a href="">Forgot Password?</a>
            </div>
            <div className="btnCon text-center">
              <Button color="primary" className="mainBtn">Sign In</Button>
            </div>
            <p className="loginText">By clicking Sign In, you acknowledge that you have read and understood, and agree to Arrow's Terms of Service and Privacy Policy.</p>
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <p>Powered by Arrow © 2020. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Login;
