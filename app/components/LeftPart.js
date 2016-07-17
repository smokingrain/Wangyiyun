import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import PlayingBlock from './PlayingBlock'
import cs from 'classnames'
import { dispatch } from '../redux/store/renderStore'
import { newMusic } from '../redux/actions/actions'




@connect((state) => {
  return {
    music:state.music.toJS()
  }
})
export default class LeftPart extends Component {
  constructor(){
    super()
    this.state = {
      name:null
    }
  }
  componentDidMount() {
    const self = this 
  }
  render(){
    const module = this.props.music.showModule
    const name = this.state.name
    return (
      <div className="LeftPart">
        <p className="block-title">推荐</p>
        <ul className="recommend">
          <li className={cs(["item",{"choosed":module == 'findmusic'}])} onClick={() => {this.showModule('findmusic')}}>
            <div className="choseflag"></div>
            <i className="iconfont icon-yinle"></i>
            <p>发现音乐</p>
          </li>
          <li className={cs(["item",{"choosed":module == 'selfFM'}])} onClick={() => {this.showModule('selfFM')}}>
            <div className="choseflag"></div>
            <i className="iconfont icon-signal3xinhao"></i>
            <p>私人FM</p>
          </li>
          <li className={cs(["item",{"choosed":module == 'mv'}])} onClick={() => {this.showModule('mv')}}>
            <div className="choseflag"></div>
            <i className="iconfont icon-video-16"></i>
            <p>MV</p>
          </li>
          <li className={cs(["item",{"choosed":module == 'friends'}])} onClick={() => {this.showModule('friends')}}>
            <div className="choseflag"></div>
            <i className="iconfont icon-haoyou1"></i>
            <p>好友</p>
          </li>
        </ul>
        <p className="block-title">我的音乐</p>
        <ul className="mymusic">
          <li className={cs(["item",{"choosed":module == 'localmusic'}])} onClick={() => {this.showModule('localmusic')}}>
            <div className="choseflag"></div>
            <i className="iconfont icon-yinlemusic2141"></i>
            <p>本地音乐</p>
          </li>
          <li className={cs(["item",{"choosed":module == 'download'}])} onClick={() => {this.showModule('download')}}>
            <div className="choseflag"></div>
            <i className="iconfont icon-xiazai2"></i>
            <p>下载管理</p>
          </li>
          <li className={cs(["item",{"choosed":module == 'yunpan'}])} onClick={() => {this.showModule('yunpan')}}>
            <div className="choseflag"></div>
            <i className="iconfont icon-yunpan"></i>
            <p>我的音乐云盘</p>
          </li>
          <li className={cs(["item",{"choosed":module == 'mysonger'}])} onClick={() => {this.showModule('mysonger')}}>
            <div className="choseflag"></div>
            <i className="iconfont icon-wode"></i>
            <p>我的歌手</p>
          </li>
        </ul>
        <p className="block-title">我的歌单</p>
        <ul className="mylist">
          <li className={cs(["item",{"choosed":module == 'xxx'}])} onClick={() => {this.showModule('gedan')}}>
            <div className="choseflag"></div>
            <i className="iconfont icon-xin"></i>
            <p>我最最喜欢的音乐</p>
          </li>
          <li className={cs(["item",{"choosed":module == 'gedan'}])} onClick={() => {this.showModule('gedan')}}>
            <div className="choseflag"></div>
            <i className="iconfont icon-yinle1"></i>
            <p></p>
          </li>
        </ul>
        <PlayingBlock></PlayingBlock>
      </div>
    )
  }
  showModule (module) {
    const music = this.props.music
    music.showModule = module
    dispatch(newMusic(music))
  }
}




