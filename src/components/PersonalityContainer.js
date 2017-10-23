import React from 'react'
import SignUpForm from './SignUpForm'
// import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import WritingSampleForm from './WritingSampleForm'
import Profile from './Profile'
import LoginForm from './LoginForm'
import PersonalityApi from '../services/personalityApi'


class PersonalityContainer extends React.Component {

  state = {
    userObj: {
      id: localStorage.getItem('userID'),
      username: localStorage.getItem('username'),
      writingSample: []
    }
  }

  handleWritingSampleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      userObj: {
        ...this.state.userObj,
        writingSample: event.target.value
      }
    })
  }

  submitWritingSample = () => {
    console.log('writing sample submitted')
    //post request to backend
    PersonalityApi.updateUser(this.state.userObj)
  }


  render() {
    const loggedInPage = localStorage.getItem('personalityToken') ? <title>Welcome {localStorage.getItem('username')}</title> : <div className="Login-Signup"> <center><Link to="/login">Sign In</Link> | <Link to="/signup">Sign Up</Link></center> <LoginForm onLogin={this.props.loginProp} />
      <SignUpForm
        handleNameChange={this.handleNameChange}
        handleUsernameChange={this.handleUsernameChange}
        handlePasswordChange={this.handlePasswordChange}
        handleGenderChange={this.handleGenderChange}
        handleWritingSampleChange={this.handleWritingSampleChange}
        submitForm={this.submitForm}/></div>
    return (
      <div>

        {loggedInPage}

        <WritingSampleForm
          handleWritingSampleChange={this.handleWritingSampleChange}
          submitWritingSample={this.submitWritingSample}/>
        <Profile
          name={this.state.userObj.name}
          writingSample={this.state.userObj.writingSample}/>
      </div>

    )
  }
}

export default PersonalityContainer
