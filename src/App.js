import React, { Component } from 'react'
import PersonalityContainer from './components/PersonalityContainer'
import { BrowserRouter as Route } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import WritingSampleForm from './components/WritingSampleForm'
import NavBar from './components/NavBar'
import PersonalityApi from './services/personalityApi'



class App extends Component {

  state = {
    user: {}
  }

  loginUser = (userObj) => {
    PersonalityApi.login(userObj)
    .then((json) => {
      localStorage.setItem('personalityToken', json.token)
      localStorage.setItem('username', json.user.username)
      this.setState({
        user: json.user
      })


    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <h1 className="App-title" ><center>Personality Insights</center></h1>
        <div className="App-intro">
          <PersonalityContainer loginProp={this.loginUser}/>
          <Route
            exact path="/login"
            render={() => <LoginForm onLogin={this.loginUser}/>} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/writingsample" component={WritingSampleForm} />
        </div>
      </div>
    );
  }
}


export default App;
