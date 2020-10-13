import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { Route, Redirect } from "react-router-dom";

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {
  let query = queryString.parse(rest.location.search);

  const isAuthRoute = props => {
    let token = localStorage.getItem("token");

    if (!token) {
      return <Component {...props} />;
    } else {
      return <Redirect to={query.redirect || "/home"} />;
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
)(UnauthenticatedRoute);
