import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class SignUpForm extends Component {


  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input label='Name' placeholder='Name' onChange={this.props.handleNameChange}/>
          <Form.Input label='Username' placeholder='Username' onChange={this.props.handleUsernameChange}/>
          <Form.Select label='Gender' options={options} placeholder='Gender' onChange={this.props.handleGenderChange}/>
        </Form.Group>
        <Form.TextArea label='Writing Sample' placeholder='Paste a writing sample here...' onChange={this.props.handleWritingSampleChange}/>
        <Form.Checkbox label='I agree to the Terms and Conditions' />
        <Form.Button onClick={this.props.submitForm}>Submit</Form.Button>
      </Form>
    )
  }
}

export default SignUpForm
