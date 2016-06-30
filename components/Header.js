import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'



export default class Header extends Component {
  render(){
    return (
      <div className="header">
        <div className="left">
          <div className="logo"></div>
          <div className="record"></div>
          <div classNam="search"></div>
        </div>
        <div className="right"></div>
      </div>
    )
  }
}




