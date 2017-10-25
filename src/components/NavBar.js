import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {

  render() {

    return (
      <div>
        <Link name='signUp' to="/signup">Sign Up |</Link>
        <Link name='logIn' to="/login">Log In |</Link>
        <Link name='home'  to="/">Home |</Link>
        <Link name='profile' to='/profile'> Profile |</Link>
        <Link name='analyze'  to="/profile"> Analyze </Link>
      </div>
    )
  }
}
