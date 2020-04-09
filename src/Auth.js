import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as axios from 'axios';
import { UserContext } from './App';

export const parseJwt = ( token ) => {
  var base64Payload = token.split( '.' )[1];
  var base64 = base64Payload.replace( '-', '+' ).replace( '_', '/' );
  return JSON.parse( atob( base64 ) );
}

export const auth = {
  isAuthenticated: false,
  async authenticate(email, password) {
    return axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      email: email,
      password: password
    })
      .then((response) => {
        if(response){
          this.isAuthenticated = true;
          console.log("Successfully logged in.");
          return response;
        }
      })
      .catch((error) => {
        alert("Failure signing in");
        return Promise.reject(error);
      });
  },
  async signout() {
    return new Promise((resolve, reject) => {
      this.resolve();
    })
      .then((response) => {
        this.isAuthenticated = false;
        console.log("Successfully logged out.");
        return Promise.resolve(response);
      })
      .catch((error) => {
        alert("Failure signing out");
        return Promise.reject(error);
      })
  }
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <UserContext.Consumer>
    { context => {
      return <Route {...rest} render={(props) => (
        context.user.isAuthenticated
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />
    }}
  </UserContext.Consumer>
)