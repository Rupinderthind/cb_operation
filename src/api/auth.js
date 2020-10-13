import MakeTheApiCall, { GenerateOptions } from "./ApiCalls";
import { saveUserAuth, togglefavScript, addFavScripts } from "../actions/auth";

export const loginUser = data => {
  var options = GenerateOptions("auth/login", "POST", data);
  return dispatch => {
    return MakeTheApiCall(options)
      .then(response => {
        console.log(response, 'response')
        localStorage.setItem("token", response.data.data.accessToken);
        localStorage.setItem("userData", JSON.stringify(response.data.data));
        return response.data;
      })
      .catch(error => {
        return error.response.data;
      });
  };
};

export const sendCode = data => {

  let apiData = {email: data.email}
  let URL = "auth/forgotpassword";
  if (!data.email) {
    let apiData = {phonenumber: data.phone}
    URL = "auth/sendotp";
  }
  var options = GenerateOptions(URL, "POST", apiData);
  return dispatch => {
    return MakeTheApiCall(options)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error.response.data;
      });
  };
};

export const resetPassword = data => {
  let apiData = {email: data.email, token: data.token, password: data.password}
  let URL = "auth/changepassword";
  if (!data.email) {
    let apiData = {phonenumber: data.phone, otp: data.token}
    URL = "auth/verifyotp";
  }

  var options = GenerateOptions(URL, "POST", apiData);
  return dispatch => {
    return MakeTheApiCall(options)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error, 'error')
        return error.response.data;
      });
  };
};
