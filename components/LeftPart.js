import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'



export default class LeftPart extends Component {
  render(){
    return (
      <div className="LeftPart">
        <p className="block-title">推荐</p>
        <ul className="recommend">
          <li className="item choosed">
            <div className="choseflag"></div>
            <i className="iconfont icon-yinle"></i>
            <p>发现音乐</p>
          </li>
          <li className="item">
            <div className="choseflag"></div>
            <i className="iconfont icon-signal3xinhao"></i>
            <p>私人FM</p>
          </li>
          <li className="item">
            <div className="choseflag"></div>
            <i className="iconfont icon-video-16"></i>
            <p>MV</p>
          </li>
          <li className="item">
            <i className="iconfont icon-haoyou1"></i>
            <p>好友</p>
          </li>
        </ul>
        <p className="block-title">我的音乐</p>
        <ul className="mymusic">
          <li className="item">
            <div className="choseflag"></div>
            <i className="iconfont icon-yinlemusic2141"></i>
            <p>本地音乐</p>
          </li>
          <li className="item">
            <div className="choseflag"></div>
            <i className="iconfont icon-xiazai2"></i>
            <p>下载管理</p>
          </li>
        </ul>
        <p className="block-title">我的歌单</p>
        <ul className="mylist">
          <li className="item">
            <div className="choseflag"></div>
            <i className="iconfont icon-xin"></i>
            <p>我最最喜欢的音乐</p>
          </li>
          <li className="item choosed">
            <div className="choseflag"></div>
            <i className="iconfont icon-yinle1"></i>
            <p>PDD</p>
          </li>
        </ul>
      </div>
    )
  }
}




