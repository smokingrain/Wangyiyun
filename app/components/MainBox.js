import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import FindMusic from './findmusic/Findmusic'
import DownLoad from './download/DownLoad'
import Friends from './friends/Friends'
import GeDan from './gedan/GeDan'
import LocalMusic from './localmusic/LocalMusic'
import Mv from './mv/Mv'
import MySonger from './mysonger/MySonger'
import SelfFM from './selfFM/SelfFM'
import YunPan from './yunpan/YunPan'



@connect((state) => {
  return {
    music:state.music.toJS()
  }
})
export default class MainBox extends Component {
  constructor(){
    super()
  }
  render(){
    const module = this.props.music.showModule
    return (
      <div className="MainBox">
        <FindMusic module={module}></FindMusic>
        <DownLoad module={module}></DownLoad>
        <Friends module={module}></Friends>
        <GeDan module={module}></GeDan>
        <Mv module={module}></Mv>
        <MySonger module={module}></MySonger>
        <SelfFM module={module}></SelfFM>
        <YunPan module={module}></YunPan>
        <LocalMusic module={module}></LocalMusic>
      </div>
    )
  }
}




