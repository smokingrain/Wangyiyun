import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'

export default class Progress extends Component {
  render(){
    return (
      <div className="progress" style={{"paddingLeft":"10px","paddingRight":"10px"}}>
        <div className="progress-slot">
          <div className="progress-ball">
            <div className="progress-dot"></div>
          </div>
          <div className="progress-bar"></div>
        </div>
      </div>
    )
  }
}



