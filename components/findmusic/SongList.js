import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import cx from 'classnames'


export default class SongList extends Component {
  componentDidMount() {

  }
  render () {
    return (
        <div className="nav-box songlist-box nodrag">
            <div className="bottom-nav">
                <p className="tip">正在完善所有功能,敬请期待</p>
                <div><button>点击有惊喜</button></div>
            </div>
        </div>
    )
  }
}