import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' }
]

class SignUpForm extends Component {

  state = {
    user: {
      name: "",
      username: "",
      password: "",
      age: "",
      gender: ""
    }
  }

  handleNameChange = (event) => {
    this.setState({
      user: {
        ...this.state.user,
        name: event.target.value
      }
    })
  }

  handleUsernameChange = (event) => {
    console.log(event.target.value)
    this.setState({
      user: {
        ...this.state.user,
        username: event.target.value
      }
    })
  }

  handlePasswordChange = (event) => {
    console.log(event.target.value)
    this.setState({
      user: {
        ...this.state.user,
        password: event.target.value
      }
    })
  }

  handleGenderChange = (event) => {
    console.log(event.target.innerText.toLowerCase())
    this.setState({
      user: {
        ...this.state.user,
        gender: event.target.innerText.toLowerCase()
      }
    })
  }

  handleSubmit = (event) => {
    console.log('submitted')
    event.preventDefault()
    //create user and authenticate in backend
    const userObj = this.state
    this.props.onSignup(userObj)
  }

  render() {
    return (
      <Grid>

        <Grid.Column width={4}>
        </Grid.Column>

        <Grid.Column width={8}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input label='Name' placeholder='Name' onChange={this.handleNameChange}/>
              <Form.Input label='Username' placeholder='Username' onChange={this.handleUsernameChange}/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input label='Password' placeholder='Password' onChange={this.handlePasswordChange}/>
              <Form.Select label='Gender' options={options} placeholder='Gender' onChange={this.handleGenderChange}/>
            </Form.Group>
            <Form.Button>Submit</Form.Button>
          </Form>
        </Grid.Column>

        <Grid.Column width={4}>
        </Grid.Column>

      </Grid>
    )
  }
}

export default withRouter(SignUpForm)
