import React from 'react'
import { Grid } from 'semantic-ui-react'
import PersonalInsightComponent from './PersonalInsightComponent'

class Profile extends React.Component {
  render() {
    return (
        <div>
        <Grid>

          <Grid.Column width={1}>
          </Grid.Column>

          <Grid.Column width={8}>
            <div>
              <h2>
                Welcome, {this.props.name}
              </h2>
              <PersonalInsightComponent
              personalInsight={this.props.userInfo}/>
            </div>
          </Grid.Column>

          <Grid.Column width={6}>
            <h2>Compare yourself to:</h2>
            <ul>
              <li>Oprah</li>
              <li>Gandhi</li>
              <li>JFK</li>
            </ul>
          </Grid.Column>

        </Grid>

        <Grid>

          <Grid.Column width={4}>
          </Grid.Column>

        </Grid>
      </div>

    )
  }
}

export default Profile
