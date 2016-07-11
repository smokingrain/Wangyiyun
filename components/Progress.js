import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import cs from 'classnames'
import { initBallPosition, ballMouseDwonU } from '../api/progress'
import $ from 'jquery'

@connect((state) => {
  return {
    music: state.music
  }
})
export default class Progress extends Component {
  componentDidMount() {
    const owner = this.props.owner
    let content = '.'+owner
    $(document).ready(() => {
      $(content+' .progress-ball').off('mousedown').on('mousedown', function (e) {
        let slot_width = $(content+' .progress-slot').width() -7
        console.log(slot_width)
        let initX = e.pageX
        e.preventDefault() 
        $(document).off('mousemove').on('mousemove', (ev) => {
          ev.preventDefault() 
          let pageX = ev.pageX
          let disX = pageX - initX
          initX = pageX
          let left = null
          if(disX >= 0) {
            left = $(content+' .progress-ball').css('left')
            left = parseInt(left)
            if(left + disX>= slot_width){
              $(content+' .progress-ball').css('left',slot_width+'px')
            }else{
              console.log(left)
              console.log(disX)
              $(content+' .progress-ball').css('left',left+disX+'px')
            }
          }else{
            left = $(content+' .progress-ball').css('left')
            left = parseInt(left)
            if(left + disX <= 0){
              $(content+' .progress-ball').css('left','-7px')
            }else{
              $(content+' .progress-ball').css('left',left+disX+'px')
            }
          }
          left = parseInt($(content+' .progress-ball').css('left'))
          $(content+' .progress-bar').css('width',left+'px')
        })

        $(document).on('mouseup', () => {
          $(document).off('mousemove').off('mouseup')
        })
      })
    })

    $(window).off('resize').on('resize', function () {
      let rate = owner == "musicProgress" ? window.musicRate : window.voiceRate 
      let width = rate*$(content+' .progress-slot').width()
      let ball_left = width -7
      $(content+' .progress-bar').css('width', width)
      $(content+' .progress-ball').css('left', ball_left)
    })
  }
  render(){
    const { owner } = this.props
    const own = 'progress '+owner
    const music = this.props.music
    const audio = music.audio
    const voice = audio.voice
    const len = owner == 'voiceProgress' ? initBallPosition(voice, 78) : 0
    return (
      <div className={own} style={{"paddingLeft":"10px","paddingRight":"10px"}}>
        <div className="progress-slot">
          <div className="progress-ball" style={{'left':len-7+'px'}}>
            <div className="progress-dot"></div>
          </div>
          <div className="progress-bar" style={{'width':len+'px'}}></div>
        </div>
      </div>
    )
  }
}



