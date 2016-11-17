import React, { Component } from 'react'
import './Title.sass'

class Title extends Component {
  render() {
    const { label } = this.props

    return (
      <h3>{ label }</h3>
    )
  }
}

export default Title
