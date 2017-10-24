import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Link name='home'  to="/">Home |</Link>
        <Link name='profile' to='/profile'> Profile |</Link>
        <Link name='analyze'  to="/profile"> Analyze </Link>
      </div>
    )
  }
}
