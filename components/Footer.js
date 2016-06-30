import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'



export default class Footer extends Component {
  render(){
    return (
      <div className="Footer">
        {this.props.children}
      </div>
    )
  }
}




