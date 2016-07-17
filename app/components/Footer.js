import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Progress from './Progress'
import { play, pause, goonPlay } from '../api/audio'
import cs from 'classnames'
import { getState, dispatch } from '../redux/store/renderStore'
import { newStatus } from '../redux/actions/actions'
import $ from 'jquery'


let playingFlag = null


@connect((state) => {
  return {
    music: state.music,
    status: state.status,
    config: state.config
  }
})
export default class Footer extends Component {
  constructor(){
    super()
    this.state = {
      playing:''
    }
  }
  componentDidMount() {
    const config = this.props.config
    const { voice } = config.audio
    let len = initBallPosition(voice, $('.voiceProgress .progress-slot').width())     
    $('.voiceProgress .progress-bar').width(len)
    let len_ball = len - 7
    $('.voiceProgress .progress-ball').css("left",len_ball)
  }
  componentDidUpdate(prevProps, prevState) {
    
  }
  render(){
    const { playing } = this.state
    const { status } = this.props
    const { playingmusic } = this.props.music
    const music = this.props.music
    const pause = music.pause
    console.log(pause)
    return (
      <div className="Footer nodrag">
        <div className="song-opera">
          <div className="shangyiqu"><i className="iconfont icon-bofangqishangyiqu"></i></div>
          <div className='bofang' onClick={() => {this.playAudio()}}><i className={cs(['iconfont',{'icon-bofang1': pause,"icon-zanting1": !pause}])}></i></div>
          <div className="xiayiqu"><i className="iconfont icon-bofangqixiayiqu"></i></div>
        </div>
        <div className="nowtime">
          <span className="nowspan" id="musicnowtime">00:00</span>
        </div>
        <div className="audio-progress">
          <Progress owner="musicProgress"></Progress>
        </div>
        <div className="alltime"><span id="musictotaltime">00:00</span></div>
        <div className="voice">
          <div className="voiceimg"><i className="iconfont icon-sound"></i></div>
          <div className="progress-box"><Progress owner="voiceProgress"></Progress></div>
        </div>
        <div className="operatools">
          <div className="xunhuan"><i className="iconfont icon-circulation"></i></div>
          <div className="lypric"><i className="iconfont icon-ci"></i></div>
          <div className="songlist">
            <i className="iconfont icon-liebiao" onClick={()=>{this.toShowPlayingBlock()}}><span className="playnumber">{playingmusic.length}</span></i>
          </div>
        </div>
      </div>
    )
  }
  toShowPlayingBlock(){
    const { status } = this.props
    let { showPlayingBlock } = status
    if(showPlayingBlock){
      status.showPlayingBlock = false
    }else {
      status.showPlayingBlock = true
    }
    dispatch(newStatus(status))
  }
  playAudio(){
    const { music } = this.props
    if(music.pause && music.currTime){
      goonPlay()
    }else if(music.pause && !music.currTime){
      play()
    }else{
      pause()
    }
  }
}




