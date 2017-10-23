import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' }
]

class SignUpForm extends Component {

  state = {
    userObj: {
      name: "",
      username: "",
      password: "",
      age: "",
      gender: ""
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

  submitForm = (event) => {
    console.log('submitted')
    event.preventDefault()
    //create user and authenticate in backend
  }

  render() {
    return (
      <Grid>

        <Grid.Column width={4}>
        </Grid.Column>

        <Grid.Column width={8}>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input label='Name' placeholder='Name' onChange={this.props.handleNameChange}/>
              <Form.Input label='Username' placeholder='Username' onChange={this.props.handleUsernameChange}/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input label='Password' placeholder='Password' onChange={this.props.handlePasswordChange}/>
              <Form.Select label='Gender' options={options} placeholder='Gender' onChange={this.props.handleGenderChange}/>
            </Form.Group>
            <Form.Button onClick={this.props.submitForm}>Submit</Form.Button>
          </Form>
        </Grid.Column>

        <Grid.Column width={4}>
        </Grid.Column>

      </Grid>
    )
  }
}



export default SignUpForm
