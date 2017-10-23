import React from 'react'
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'


class PersonalityContainer extends React.Component {

  state = {
    name: "",
    username: "",
    password: "",
    age: [],
    gender: [],
    writingSample: [],
    analysis: []
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleUsernameChange = (event) => {
    console.log(event.target.value)
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    console.log(event.target.value)
    this.setState({
      password: event.target.value
    })
  }

  handleGenderChange = (event) => {
    console.log(event.target.innerText)
    this.setState({
      gender: event.target.innerText
    })
  }

  handleWritingSampleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      writingSample: event.target.value
    })
  }

  submitForm = (event) => {
    console.log('submitted')
    event.preventDefault()

    //send an API request to IBM Watson to have text analyzed


  }


  render() {
    return (
      <div>
        <Link to="/login">Sign In</Link> | <Link to="/signup">Sign Up</Link>
        <SignUpForm
          handleNameChange={this.handleNameChange}
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          handleGenderChange={this.handleGenderChange}
          handleWritingSampleChange={this.handleWritingSampleChange}
          submitForm={this.submitForm}/>

      </div>

    )
  }
}

export default PersonalityContainer
