import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const isAuthRoute = props => {
    let token = localStorage.getItem("token");

    if (token) {
      return <Component {...props} />;
    } else {
      return <Redirect to={`/login?redirect=${props.location.pathname}`} />;
    }
  };

  return <Route {...rest} render={props => isAuthRoute(props)} />;
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(AuthenticatedRoute);
