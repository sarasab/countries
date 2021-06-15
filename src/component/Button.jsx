import React, { Component } from 'react'

class Button extends Component {
  render () {
    return (
      <button
        className="btn btn-primary m-1 "
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}

export default Button