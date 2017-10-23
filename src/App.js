import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import PersonalityContainer from './components/PersonalityContainer'
import { Button } from 'semantic-ui-react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import WritingSampleForm from './components/WritingSampleForm'
import NavBar from './components/NavBar'



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1 className="App-title" ><center>Personality Insights</center></h1>
        <p className="App-intro">
          <PersonalityContainer/>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/writingsample" component={WritingSampleForm} />
        </p>
      </div>
    );
  }
}


export default App;
