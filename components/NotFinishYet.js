import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Progress from './Progress'


export default class NotFinishYet extends Component {
  render(){
    return (
      <div className="notfinishyet nodrag">
        <p className="tip">正在完善所有功能,敬请期待</p>
        <div><button>notify</button></div>
      </div>
    )
  }
}




