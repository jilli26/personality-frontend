import React from 'react'
import SignUpForm from './SignUpForm'
// import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'
import WritingSampleForm from './WritingSampleForm'
import Profile from './Profile'


class PersonalityContainer extends React.Component {

  state = {
    userObj: {
      name: "",
      username: "",
      password: "",
      age: [],
      gender: [],
      writingSample: []
    }
  }

  handleNameChange = (event) => {
    this.setState({
      userObj: {
        ...this.state.userObj,
        name: event.target.value
      }
    })
  }

  handleUsernameChange = (event) => {
    console.log(event.target.value)
    this.setState({
      userObj: {
        ...this.state.userObj,
        username: event.target.value
      }
    })
  }

  handlePasswordChange = (event) => {
    console.log(event.target.value)
    this.setState({
      userObj: {
        ...this.state.userObj,
        password: event.target.value
      }
    })
  }

  handleGenderChange = (event) => {
    console.log(event.target.innerText)
    this.setState({
      userObj: {
        ...this.state.userObj,
        gender: event.target.innerText
      }
    })
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

  submitForm = (event) => {
    console.log('submitted')
    event.preventDefault()
    //create user and authenticate in backend
  }

  submitWritingSample = () => {
    console.log('writing sample submitted')
    //post request to backend - must nest under user
  }


  render() {
    return (
      <div>
        <center><Link to="/login">Sign In</Link> | <Link to="/signup">Sign Up</Link></center>
        <SignUpForm
          handleNameChange={this.handleNameChange}
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          handleGenderChange={this.handleGenderChange}
          submitForm={this.submitForm}/>
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
