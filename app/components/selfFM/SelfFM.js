import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import cs from 'classnames'


export default class SelfFM extends Component {
    constructor () {
        super()
    }
    render(){
        const module = this.props.module
        return (
          <div className={cs(['content-box','selfFM','nodrag',{"hide": module!= 'selfFM'}])}>
            <div className="nav-box nodrag">
                <div className="bottom-nav">
                    <p className="tip">正在完善所有功能,敬请期待</p>
                    <div><button>selfFM</button></div>
                </div>
            </div>
          </div>
        )
    }
}




