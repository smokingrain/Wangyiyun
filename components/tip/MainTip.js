import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import cs from 'classnames'
import { dispatch } from '../../redux/store/renderStore'
import { newMessage } from '../../redux/actions/actions'

@connect((state) => {
  return {
    message:state.message
  }
})
export default class MainTip extends Component {
  constructor(){
    super()
  }
  render(){
    const { tip } = this.props
    return (
      <div className="tipbox">
        <div className="tip notice">
          <div className="top">
            <div className="message">
              <i className={cs(['iconfont',{'icon-jinggao':tip.type == 'jinggao'}])}></i>
              <p title={tip.message}>{tip.message}</p>
            </div>
          </div>
          <div className="confirm" onClick={() => {this.confirmMessage()}}>确认</div>
        </div>
      </div>
    )
  }
  confirmMessage() {
    let { message } = this.props
    message.notify.tip = null
    message.showMask = false
    dispatch(newMessage(message))
  }
}




