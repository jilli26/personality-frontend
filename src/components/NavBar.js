import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid widths={3}>
        <Menu.Item name='home' active={activeItem === 'Home'} onClick={this.handleItemClick} a href="/"/>
        <Menu.Item name='profile' active={activeItem === 'Profile'} onClick={this.handleItemClick} a href='/profile'/>
        <Menu.Item name='analyze' active={activeItem === 'Analyze'} onClick={this.handleItemClick} a href="/profile"/>
      </Menu>
    )
  }
}
