import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from 'reactstrap';

function Login(props) {
  return (
    <div className="loginCon">
      <div className="innerContainer">
        <div className="logoBox">
          <img src="images/logoCircle.png" />
        </div>

        <div className="loginBox">
          <TextField label="Email Addess" variant="outlined" className="formElement" size="small" />
          <TextField label="Password" type="password" variant="outlined" className="formElement" size="small" />
          <div className="text-right forgotLink">
            <a href="">Forgot Password?</a>
          </div>
          <div className="btnCon text-center">
            <Button color="primary" className="mainBtn">Login</Button>
          </div>
        </div>
      </div>
      <div className="bottomContainer">
        <p>Can't login? <a href="">Contact Support</a></p>
      </div>
    </div>
  );
}

export default Login;
