import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import cs from 'classnames'


export default class Friends extends Component {
    constructor () {
        super()
    }
    render(){
        const module = this.props.module
        return (
          <div className={cs(['content-box','friends','nodrag',{"hide": module!= 'friends'}])}>
            <div className="nav-box nodrag">
                <div className="bottom-nav">
                    <p className="tip">正在完善所有功能,敬请期待</p>
                    <div><button>friends</button></div>
                </div>
            </div>
          </div>
        )
    }
}




