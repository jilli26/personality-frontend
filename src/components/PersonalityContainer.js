import React from 'react'
import SignUpForm from './SignUpForm'
// import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import WritingSampleForm from './WritingSampleForm'
import Profile from './Profile'
import LoginForm from './LoginForm'
import PersonalityApi from '../services/personalityApi'


class PersonalityContainer extends React.Component {

  handleChange = (event) => {
    console.log(event.target.value)
    this.props.handleWritingSampleChange(event.target.value)
  }

  submitWritingSample = () => {
    const userObj = this.props.userInfo
    //post request to backend
    PersonalityApi.submitWritingSample(userObj)
      .then(json => {
        debugger
      })
  }


  render() {
    const loggedInPage = localStorage.getItem('personalityToken') ? <title>Welcome {this.props.userInfo.name}</title> : <div className="Login-Signup"> <center><Link to="/login">Sign In</Link> | <Link to="/signup">Sign Up</Link></center> <LoginForm onLogin={this.props.loginProp} />
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



      </div>

    )
  }
}
  // {display}
// const display = this.props.userInfo.insight.writing_sample ? <Profile name={this.props.userInfo.user.name} writingSample={this.props.userInfo.insight.writing_sample} personalInsight={this.props.userInfo.insight}/> : <WritingSampleForm handleChange={this.handleChange} submitWritingSample={this.submitWritingSample}/>


export default PersonalityContainer
