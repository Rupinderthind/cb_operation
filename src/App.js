import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes'

import "./scss/main.scss";

import createStore from "./store";
import {Provider} from 'react-redux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { store, history } = createStore();

function App() {
	console.log(store, 'store')
  return (
  	<Provider store={store}>
    	<Routes />
    	<ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </Provider>
  );
}

export default App;
