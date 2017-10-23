import React from 'react'
import { Grid } from 'semantic-ui-react'

class Profile extends React.Component {
  render() {
    return (
      <Grid>

        <Grid.Column width={4}>
        </Grid.Column>

        <Grid.Column width={8}>
          <div>Welcome, {this.props.name}</div>
        </Grid.Column>

      </Grid>

    )
  }
}

export default Profile
