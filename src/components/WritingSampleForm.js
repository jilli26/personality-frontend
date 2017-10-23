import React from 'react'
import { Form } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'

class WritingSampleForm extends React.Component {

  render() {
    return (
      <Grid>

        <Grid.Column width={4}>
        </Grid.Column>

        <Grid.Column width={8}>
          <Form>
            <Form.Group widths='equal'>
              <Form.TextArea label='Writing Sample' placeholder='Please paste a writing sample written by you (min 1000 words)...' onChange={this.props.handleWritingSampleChange}/>
            </Form.Group>
            <Form.Button onClick={this.props.submitWritingSample}>Submit</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default WritingSampleForm
