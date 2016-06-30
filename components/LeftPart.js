import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'



export default class LeftPart extends Component {
  render(){
    return (
      <div className="LeftPart">
        {this.props.children}
      </div>
    )
  }
}




