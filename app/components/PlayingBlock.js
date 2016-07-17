import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import { play } from '../api/audio'


@connect((state) => {
  return {
    music:state.music.toJS()
  }
})
export default class PlayingBlock extends Component {
  constructor(){
    super()
  }
  componentDidUpdate(prevProps, prevState) {
      let prev = prevProps.music.playing.uuid
      let now = this.props.music.playing.uuid
      let toplay = this.props.music.toplay
      if(toplay){
        play()  
      }     
  }
  render(){
    const { music } = this.props
    const playing = music.playing
    return (
      <div className="playingblock nodrag">
        <div className="musicimg">
          <img src="app/public/img/PDD/pddtest.jpg" />
        </div>
        <div className="musicname">
          <p className="songname" title={playing.fileName}>{playing.fileName}</p>
          <p className="songer" title={playing.fileArtist || '未知'}>{playing.fileArtist || '未知'}</p>
        </div>
        <div className="musicsonger">
          <div className="heart"><i className="iconfont icon-xin"></i></div>
          <div className="share"><i className="iconfont icon-fenxiang"></i></div>
        </div>
      </div>
    )
  }
}




