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
              <i className="iconfont icon-leftopenmini"></i>
              <i className="iconfont icon-rightopenmini disabled"></i>
            </div>
          </div>
          <div className="search">
            <input className="searchInput" type="text"/>
            <i className="iconfont icon-sousuo"></i>
          </div>
        </div>
        <div className="right">
          <div className="opera-close small">
            <i className="iconfont icon-iconfontcha"></i>
          </div>
          <div className="opera-fullscreen small">
            <i className="iconfont icon-zuidahua"></i>
          </div>
          <div className="opera-hidden small">
            <i className="iconfont icon-zuixiaohua"></i>
          </div>
          <div className="opera-showmini small">
            <i className="iconfont icon-iconkefuzuixiaohua"></i>
          </div>
          <div className="border-right"></div>
          <div className="opera-setting">
            <i className="iconfont icon-shezhi"></i>
          </div>
          <div className="opera-mail">
            <i className="iconfont icon-mail"></i>
          </div>
          <div className="opera-skin">
            <i className="iconfont icon-pifu"></i>
          </div>
          <div className="opera-login">
            <i className="iconfont icon-touxiang"></i>
          </div>
        </div>
      </div>
    )
  }
}




