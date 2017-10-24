import React, { Component } from 'react';
// import './App.css';

import PersonalityContainer from './components/PersonalityContainer'
import { Route, withRouter, Switch } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import WritingSampleForm from './components/WritingSampleForm'
import NavBar from './components/NavBar'
import PersonalityApi from './services/personalityApi'
import Profile from './components/Profile'



class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {},
      insight: {
        writing_sample: ""
      }
    }
  }



  loginUser = (userObj) => {
    PersonalityApi.login(userObj)
    .then((json) => {
      localStorage.setItem('personalityToken', json.token)
      localStorage.setItem('username', json.user.username)
      localStorage.setItem('userID', json.user.id)
      this.setState({
        user: json.user,
        insight: json.insight
      })
    })
    .then(() => this.props.history.push('/profile'))

  }

  handleWritingSampleChange = (value) => {
    this.setState({
        insight: {
          writing_sample: value
        }
    })
  }

  componentDidMount() {
    if(!localStorage.getItem('personalityToken')) {
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div>
        <NavBar userInfo={this.state}/>
        <h1 className="App-title" ><center>Personality Insights</center></h1>
        <div className="App-intro">
          <Switch>
          <Route
            exact path="/login"
            render={() => <LoginForm onLogin={this.loginUser}/>} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/profile" render={() => <Profile userInfo={this.state} name={this.state.user.name} writingSample={this.state.insight.writing_sample} personalInsight={this.state.insight}/>} />
          <Route exact path="/writingsample" render={() => <WritingSampleForm />} />
        </Switch>
        </div>
      </div>
    );
  }
}
 //<Route <PersonalityContainer userInfo={this.state} loginProp={this.loginUser} handleWritingSampleChange={this.handleWritingSampleChange}/>
// const display = this.props.userInfo.insight.writing_sample ? <Profile name={this.props.userInfo.user.name} writingSample={this.props.userInfo.insight.writing_sample} personalInsight={this.props.userInfo.insight}/> : <WritingSampleForm handleChange={this.handleChange} submitWritingSample={this.submitWritingSample}/>
//<Route exact path="/profile" render={() => <Profile userInfo={this.state}/>} />
export default withRouter(App);
