import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'



@connect((state) => {
  return {
    music:state.music
  }
})
export default class PlayingBlock extends Component {
  render(){
    return (
      <div className="playingblock nodrag">
        <div className="musicimg">
          <img src="public/img/PDD/pddtest.jpg" />
        </div>
        <div className="musicname">
          <p className="songname" title="给我一首歌的时间sxxxx">给我一首歌的时间sxxxx</p>
          <p className="songer" title="周杰伦">周杰伦</p>
        </div>
        <div className="musicsonger">
          <div className="heart"><i className="iconfont icon-xin"></i></div>
          <div className="share"><i className="iconfont icon-fenxiang"></i></div>
        </div>
      </div>
    )
  }
}




