import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "components/navbar.component"

function App() {
  return (
    <Router>
      <NavBar />
      <br/>
      <Route path="/" component={WelcomeComponent} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/signup" component={SignUpComponent} />
      <Route path="/profile" component={ProfileComponent} />
      <Route path="/logout" component={LogoutComponent} />
      <h1>Home</h1>
    </Router>
  );
}

export default App;
