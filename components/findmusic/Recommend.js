import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import $ from 'jquery'
import cx from 'classnames'


let playPicInterval = null
let player = null
export default class Recommend extends Component {
  constructor(){
    super()
    this.state = {
        picIndex: null
    }
  }
  componentDidMount() {
    const outSelf = this
    //轮播图片首张选中的图片序号
    $(document).ready(() => {
        var pic_player = function pic_player(){
            this.picArr = null
            this.picLength = null
            this.picIndex = null
            this.leftIndex = null
            this.rightIndex = null
            this.leftOp = null
            this.rightOp = null
            this.midOp = null
            this.box = null
            this.init()
            this.play()
        }
        pic_player.prototype = {
            init: function () {
                const self = this
                self.picIndex = 0
                outSelf.setState({picIndex:self.picIndex})
                self.picArr = $('.pic-item')
                self.picLength = self.picArr.length
                self.leftOp = {
                    left:'0px',
                    z:9,
                    height:'190px',
                    display:'block'
                }
                self.box = $('.play-pic-box')
                let box_w = parseInt(self.box.width())
                self.rightOp = {
                    left:box_w - 540+'px',
                    z:9,
                    height:'190px'
                }
                self.midOp = {
                    height:'200px',
                    left:(box_w-540)/2+'px',
                    z:10,
                    display:'block'
                }
                if(self.picIndex == 0){
                    self.leftIndex = self.picLength-1
                    self.rightIndex = self.picIndex +1
                }else if(self.picIndex == self.picLength-1){
                    self.leftIndex = self.picIndex -1
                    self.rightIndex = 0
                }else{
                    self.leftIndex = self.picIndex-1
                    self.rightIndex = self.picIndex +1
                }
                self.picArr.eq(self.leftIndex).css({
                    left:self.leftOp.left,
                    height:self.leftOp.height
                })
                self.picArr.eq(self.rightIndex).css({
                    left:self.rightOp.left,
                    height:self.rightOp.height
                })
                self.picArr.eq(self.picIndex).css({
                    left:self.midOp.left,
                    height:self.midOp.height
                })
                self.picArr.eq(self.leftIndex).addClass('pic-left')
                self.picArr.eq(self.rightIndex).addClass('pic-right')
                self.picArr.eq(self.picIndex).addClass('pic-mid')
            },
            play: function () {
                const self = this
                playPicInterval = setInterval(function () {
                    self.checkPostion()
                },5000)
            },
            pause: function () {
                playPicInterval = null
            },
            changeIndex: function (i) {
                clearInterval(playPicInterval)
                this.picIndex = i
                this.checkPostion()
                this.play()
            },
            checkPostion: function () {
                const self = this
                self.box = $('.play-pic-box')
                let box_w = parseInt(self.box.width())
                outSelf.setState({picIndex:self.picIndex})
                self.rightOp = {
                    left:box_w - 540+'px',
                    z:9,
                    height:'190px'
                }
                self.midOp = {
                    height:'200px',
                    left:(box_w-540)/2+'px',
                    z:10,
                    display:'block'
                }
                if(self.picIndex == 0){
                    self.leftIndex = self.picLength-1
                    self.rightIndex = self.picIndex +1
                }else if(self.picIndex == self.picLength-1){
                    self.leftIndex = self.picIndex -1
                    self.rightIndex = 0
                }else{
                    self.leftIndex = self.picIndex-1
                    self.rightIndex = self.picIndex +1
                }
                self.picArr.each(function () {
                    $(this).removeClass('pic-left')
                    $(this).removeClass('pic-right')
                    $(this).removeClass('pic-mid')
                })
                self.picArr.eq(self.leftIndex).addClass('pic-left')
                self.picArr.eq(self.rightIndex).addClass('pic-right')
                self.picArr.eq(self.picIndex).addClass('pic-mid')
                self.picArr.eq(self.leftIndex).addClass('pic-left').animate({
                    left:self.leftOp.left,
                    height:self.leftOp.height
                },300)
                self.picArr.eq(self.rightIndex).addClass('pic-right').animate({
                    left:self.rightOp.left,
                    height:self.rightOp.height
                },300)
                self.picArr.eq(self.picIndex).addClass('pic-mid').animate({
                    left:self.midOp.left,
                    height:self.midOp.height
                },300)
                if(self.picIndex == self.picLength-1){
                    self.picIndex = 0
                }else{
                    self.picIndex +=1
                }
            }
        }
        player = new pic_player()
    })
  }
  render () {
    const xx = [0,1,2,3,4,5,6]
    const self = this
    const picIndex = this.state.picIndex
    return (
      <div className="nav-box recommend-box nodrag">
        <div className="recommend-nav">
          <div className="play-pic-box">
            <div className="pic-item">
                <div className="pic-mask"></div>
                <div className="button pic-pre-button"><i className="iconfont icon-i-left"></i></div>
                <div className="button pic-next-button"><i className="iconfont icon-right"></i></div>
                <img src="public/img/findmusic/recommend/play-box-img-1.png"/>
            </div>
            <div className="pic-item">
                <div className="pic-mask"></div>
                <div className="button pic-pre-button"><i className="iconfont icon-i-left"></i></div>
                <div className="button pic-next-button"><i className="iconfont icon-right"></i></div>
                <img src="public/img/findmusic/recommend/play-box-img-2.png" />
            </div>
            <div className="pic-item">
                <div className="pic-mask"></div>
                <div className="button pic-pre-button"><i className="iconfont icon-i-left"></i></div>
                <div className="button pic-next-button"><i className="iconfont icon-right"></i></div>
                <img src="public/img/findmusic/recommend/play-box-img-3.png" />
            </div>
            <div className="pic-item">
                <div className="pic-mask"></div>
                <div className="button pic-pre-button"><i className="iconfont icon-i-left"></i></div>
                <div className="button pic-next-button"><i className="iconfont icon-right"></i></div>
                <img src="public/img/findmusic/recommend/play-box-img-4.png" />
            </div>
            <div className="pic-item">
                <div className="pic-mask"></div>
                <div className="button pic-pre-button"><i className="iconfont icon-i-left"></i></div>
                <div className="button pic-next-button"><i className="iconfont icon-right"></i></div>
                <img src="public/img/findmusic/recommend/play-box-img-5.png" />
            </div>
            <div className="pic-item">
                <div className="pic-mask"></div>
                <div className="button pic-pre-button"><i className="iconfont icon-i-left"></i></div>
                <div className="button pic-next-button"><i className="iconfont icon-right"></i></div>
                <img src="public/img/findmusic/recommend/play-box-img-6.png" />
            </div>
            <div className="pic-item">
                <div className="pic-mask"></div>
                <div className="button pic-pre-button"><i className="iconfont icon-i-left"></i></div>
                <div className="button pic-next-button"><i className="iconfont icon-right"></i></div>
                <img src="public/img/findmusic/recommend/play-box-img-0.png" />
            </div>
          </div>
          <div className="play-item-box" xx="xxx">
            <ul id="index-nav" className="ul-item-7">
            {
                xx.map(function (item, index) {
                     return(
                        <li className={cx([{"choosed":picIndex == index}])} key={index}><div className="" index={index} onClick={() => {self.changeIndex(index)}}></div></li>
                    )
                })
            }
            </ul>
          </div>
        </div>
      </div>
    )
  }
  changeIndex (index) {
    player.changeIndex(index)
  }
}