import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import FindMusic from './findmusic/Findmusic'


export default class MainBox extends Component {
  render(){
    return (
      <div className="MainBox">
        <FindMusic></FindMusic>
      </div>
    )
  }
}




