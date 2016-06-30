import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'



export default class Header extends Component {
  render(){
    return (
      <div className="header">
        <div className="left">
          <div className="logo">
            <div className="author">
              <p className="authorname">PDD</p>
              <p className="boxname">魔法音乐盒</p>
            </div>
          </div>
          <div className="record">
            <div className="buttonbox">
              <span className="glyphicon glyphicon-menu-left"></span>
              <span className="glyphicon glyphicon-menu-right disabled"></span>
            </div>
          </div>
          <div classNam="search"></div>
        </div>
        <div className="right"></div>
      </div>
    )
  }
}




