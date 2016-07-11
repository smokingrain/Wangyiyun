import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Progress from './Progress'
import { play, pause } from '../api/audio'
import cs from 'classnames'


@connect((state) => {
  return {
    music: state.music
  }
})
export default class Footer extends Component {
  constructor(){
    super()
    this.state = {
      playing:false
    }
  }
  componentDidMount() {
  }
  render(){
    const { playing } = this.state
    return (
      <div className="Footer nodrag">
        <div className="song-opera">
          <div className="shangyiqu"><i className="iconfont icon-bofangqishangyiqu"></i></div>
          <div className='bofang' onClick={() => {this.playAudio()}}><i className={cs(['iconfont',{'icon-bofang1':!playing,"icon-zanting1":playing}])}></i></div>
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
  playAudio(){
    const playing = this.state.playing
    const { music } = this.props
    const { path, name } = music.audio
    if(!playing){
      play(path, name)
      this.setState({playing: true})
    }else{
      pause()
      this.setState({playing: false})
    }
  }
}




