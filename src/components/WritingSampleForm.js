import React from 'react'
import { Form } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

class WritingSampleForm extends React.Component {

  handleChange = (event) => {
    console.log(event.target.value)
    this.props.onWritingSampleChange(event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const userObj = this.props.formData
    this.props.onSubmit(userObj)
  }

  render() {
    return (
      <Grid>

        <Grid.Column width={4}>
        </Grid.Column>

        <Grid.Column width={8}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.TextArea label='Writing Sample' placeholder='Please paste a writing sample written by you at least 500 words)...' onChange={this.handleChange}/>
            </Form.Group>
            <Form.Button>Submit</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default WritingSampleForm
