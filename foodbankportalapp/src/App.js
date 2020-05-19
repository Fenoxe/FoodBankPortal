import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./components/navbar.component"
import WelcomeComponent from "./components/welcome.component"
import LoginComponent from "./components/login.component"
import SignUpComponent from "./components/signup.component"
import ProfileComponent from "./components/profile.component"
import LogoutComponent from "./components/logout.component"

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <br/>
        <Route path="/home" component={WelcomeComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/signup" component={SignUpComponent} />
        <Route path="/profile" component={ProfileComponent} />
        <Route path="/logout" component={LogoutComponent} />
      </div>
    </Router>
  );
}

export default App;
