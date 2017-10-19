import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import PersonalityContainer from './components/PersonalityContainer'
import { Button } from 'semantic-ui-react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title" >Personality Insights</h1>
      <p className="App-intro">
        <PersonalityContainer/>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignUpForm} />
      </p>
      </div>
    );
  }
}


export default App;
