import React, { Component } from 'react';
// import './App.css';
import PersonalityContainer from './components/PersonalityContainer'
import { BrowserRouter as Route } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import WritingSampleForm from './components/WritingSampleForm'
import NavBar from './components/NavBar'
import Profile from './components/Profile'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1><center>Personality Insights</center></h1>
        <p>
          <PersonalityContainer/>

          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/writingsample" component={WritingSampleForm} />
          <Route exact path="/profile" render={Profile} />
        </p>

      </div>
    );
  }
}


export default App;
