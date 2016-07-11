import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Progress from './Progress'


export default class Footer extends Component {
  render(){
    return (
      <div className="Footer nodrag">
        <div className="song-opera">
          <div className="shangyiqu"><i className="iconfont icon-bofangqishangyiqu"></i></div>
          <div className="bofang"><i className="iconfont icon-bofang1"></i></div>
          <div className="zanting hide"><i className="iconfont icon-zanting1"></i></div>
          <div className="xiayiqu"><i className="iconfont icon-bofangqixiayiqu"></i></div>
        </div>
        <div className="nowtime">
          <span className="nowspan">00:00</span>
        </div>
        <div className="audio-progress">
          <Progress owner="musicProgress"></Progress>
        </div>
        <div className="alltime"><span>00:00</span></div>
        <div className="voice">
          <div className="voiceimg"><i className="iconfont icon-sound"></i></div>
          <div className="progress-box"><Progress owner="voiceProgress"></Progress></div>
        </div>
        <div className="operatools">
          <div className="xunhuan"><i className="iconfont icon-circulation"></i></div>
          <div className="lypric"><i className="iconfont icon-ci"></i></div>
          <div className="songlist">
            <i className="iconfont icon-liebiao"><span className="playnumber">100</span></i>
          </div>
        </div>
      </div>
    )
  }
}




