import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'



export default class MainBox extends Component {
  render(){
    return (
      <div className="MainBox">
        {this.props.children}
      </div>
    )
  }
}




