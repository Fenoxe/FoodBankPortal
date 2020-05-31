import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import WelcomeComponent from "./components/useraccount/welcome.component"
import LoginComponent from "./components/useraccount/login.component"
import SignUpComponent from "./components/useraccount/signup.component"
import DashboardComponent from "./components/dashboard/dashboard.component"
import LogoutComponent from "./components/useraccount/logout.component"
import SettingsComponent from "./components/dashboard/settings/settings.component.js"
import PrivateRoute from "./components/useraccount/microcomponents/privateroute.component"

export default class App extends Component {
  
  render() {
    return (
      <Router>
          <PrivateRoute
            path="/dashboard/settings"
            component={SettingsComponent}
          />
          <Route
            path="/login"
            component={LoginComponent}
          />
          <Route
            path="/signup"
            component={SignUpComponent}
          />
          <PrivateRoute
            loggedIn={ this.props.appState.loggedIn }
            path="/dashboard"
            component={DashboardComponent}
          />
          <Route
            path="/logout"
            component={LogoutComponent}
          />
          <Route
            exact path="/"
            component={WelcomeComponent}
          />
      </Router>
    )
  }
}
