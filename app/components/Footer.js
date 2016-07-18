
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Progress from './Progress'
import { play, pause, goonPlay } from '../api/audio'
import cs from 'classnames'
import { getState, dispatch } from '../redux/store/renderStore'
import { newStatus, newMusic } from '../redux/actions/actions'
import $ from 'jquery'
import { initBallPosition } from '../api/progress'
import _ from 'lodash'

let playingFlag = null


@connect((state) => {
  return {
    music: state.music.toJS(),
    status: state.status,
    config: state.config.toJS()
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
    const voicelen = config.audio.voicelen
    const voice = config.audio.voice
    const posi = voicelen -7
    $('.voiceProgress .progress-bar').width(voicelen)
    $('.voiceProgress .progress-ball').css('left',posi+'px')
    window.audio.volume = voice/10
  }
  componentDidUpdate(prevProps, prevState) {

  }
  render(){
    const { playing } = this.state
    const { status } = this.props
    const { playingmusic } = this.props.music
    const music = this.props.music
    const pause = music.pause
    return (
      <div className="Footer nodrag">
        <div className="song-opera">
          <div className="shangyiqu"><i className="iconfont icon-bofangqishangyiqu" onClick={()=> {this.prevSong()}}></i></div>
          <div className='bofang' onClick={() => {this.playAudio()}}><i className={cs(['iconfont',{'icon-bofang1': pause,"icon-zanting1": !pause}])}></i></div>
          <div className="xiayiqu"><i className="iconfont icon-bofangqixiayiqu" onClick={() =>{this.nextSong()}}></i></div>
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
      music.toplay = true
      play()
      dispatch(newMusic(music))
    }else{
      pause()
    }
  }
  prevSong(){
    const { music } = this.props
    const playingmusic = music.playingmusic
    if(playingmusic.length<=1){
      music.toplay = true
      music.pause = true
    }else{
      const playing = music.playing
      _.each(playingmusic, function (item, index) {
        if(item.uuid == playing.uuid){
          music.toplay = true
          music.pause = true
          if(index == 0){
            music.playing = music.playingmusic[playingmusic.length-1]
          }else{
            music.playing = music.playingmusic[index-1]
          }
        }
      })
    }
    dispatch(newMusic(music))
  }
  nextSong(){
    const music = this.props.music
    const playingmusic = music.playingmusic
    console.log(music)
    if(playingmusic.length<=1){
      music.toplay = true
      music.pause = true
    }else{
      const playing = music.playing
      _.each(playingmusic, function (item, index) {
        if(item.uuid == playing.uuid){
          music.toplay = true
          music.pause = true
          if(index == playingmusic.length-1){
            music.playing = music.playingmusic[0]
          }else{
            music.playing = music.playingmusic[index+1]
          }
        }
      })
    }
    console.log(playingmusic)
    dispatch(newMusic(music))
  }
}




