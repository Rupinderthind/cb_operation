import React from "react";
import axios from "axios";

import { actions as toastrActions } from "react-redux-toastr";
//import { DEBUG_MODE } from '../constant';
import { apiUrl } from "../Constant";
//import store from '../../store';
//import {logout, loggedIn,loggedInCustomer} from '../services/authService.js'
//import {authAction} from '../actions';

//import {ApiAlert} from '../api'

//let { dispatch, getState } = store;
var CancelToken = axios.CancelToken;
var cancel = [];
/**
 * This function would universally handle API errors
 *
 * @param apiOptions
 * @param multiple Parameter for axios.all request (apiOptions should be array of axios requests)
 * @param dispatch
 * @returns {axios.Promise}
 * @constructor
 */

export default function MakeTheApiCall(apiOptions, multiple = false) {
  var success = (resolve, reject, response) => {
      let checkResponse = response => {
        if (response.status !== 200 && response.status !== 201) {
          //showErrorToster(response.statusText,apiOptions.method,apiOptions.url)
          return reject(response);
        }
      };
      if (Array.isArray(response)) {
        response.forEach(r => {
          checkResponse(r);
        });
      } else {
        checkResponse(response);
      }
      return resolve(response);
    },
    error = (resolve, reject, err) => {
      /*if(err.status === 403){
                window.location.replace('forbidden')
            }
            if(err.status === 401 || err.response.status === 401){
              const {API_PARAMS} =  getState().server;
              const {data} =  getState().auth;
              if(data && data.scope)
                if(loggedIn() || loggedInCustomer(API_PARAMS.dbs)){
                    //logout(data.scope,API_PARAMS.dbs);
                    dispatch(authAction.logout());
                }
            }
            else if(err.response.status !== 400){
               showErrorToster(err.statusText,apiOptions.method,apiOptions.url)
            }*/
      // else if(err.status === 400 || err.response.status === 400){
      //     //if (err.response.data.msg == 'given dbs parameter is not correct') {
      //         ApiAlert.ApiAddAlert({type:'error', desc:err.response.data.msg});
      //     //}
      // }
      return reject(err);
    };
  if (multiple) {
    return new Promise((resolve, reject) => {
      return axios
        .all(apiOptions)
        .then(response => {
          success(resolve, reject, response);
        })
        .catch(err => {
          if (axios.isCancel(err)) {
          } else {
            error(resolve, reject, err);
          }
        });
    });
  } else {
    return new Promise((resolve, reject) => {
      return axios(apiOptions)
        .then(response => {
          success(resolve, reject, response);
        })
        .catch(err => {
          if (axios.isCancel(err)) {
          } else {
            error(resolve, reject, err);
          }
        });
    });
  }
}
/**
 * Build the correct headers and options to make the API call.
 * @params url: string
 * @params method: string
 * @params data: object
 * @returns {{method: string, url: string, crossDomain: boolean, headers: {Authorization: string, Content-Type: string}, json: boolean}}
 */

export function GenerateOptions(
  url = "",
  method = "GET",
  data,
  formType = "application/json",
  baseUrl = ""
) {
  //console.log(getState(), 'getState()')
  //const {apiUrl,API_PARAMS} =  getState().server;
  let APIBaseUrl = baseUrl ? baseUrl : apiUrl;
  var token = "";
  var options = {
    method: method,
    url: `${APIBaseUrl}/${url}`
  };
  options.headers = {
    "Content-Type": formType
  };
  //options.params = API_PARAMS
  if (!data) {
    return options;
  }

  if (method == "GET") {
    options.params = Object.assign({}, data);
  } else {
    options.data = data;
  }
  console.log(options);
  return options;
}

/**
 * show error toster on error
 */

function showErrorToster(statusText, method, url) {
  /*if (DEBUG_MODE) {
        dispatch(toastrActions.add({
            type: 'error',
            title: 'Error',
            options: {
                timeOut: 0,
                showCloseButton: true,
            },
            message: (
                <div>
                    <div>Status text: {statusText}</div>
                    <div>API method: {method}</div>
                    <div>API URL: {url}</div>
                </div>),
        }));

    }*/
}
