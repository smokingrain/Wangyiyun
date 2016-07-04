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
    $(document).ready(function () {
        //加载好时纠正长宽比
        $('.imgbox').each(function () {
            if($(this).hasClass('recom-flag')){
                let width = $(this).width()
                $(this).height(width)
            }else if($(this).hasClass('dujia-flag') || $(this).hasClass('mv-flag')){
                let width = $(this).width()
                $(this).height(width*7/12)
            }

        })
        $(window).on('resize', function(){
            // player.changeIndex()
            $('.imgbox').each(function () {
                if($(this).hasClass('recom-flag')){
                    let width = $(this).width()
                    $(this).height(width)
                }else if($(this).hasClass('dujia-flag') || $(this).hasClass('mv-flag')){
                    let width = $(this).width()
                    $(this).height(width*7/12)
                }
            })
        })

    })
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
                this.picIndex = i || this.picIndex
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
        <div className="play-nav">
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
                        <li className={cx([{"choosed":picIndex == index}])} key={index}><div className="" index={index} onClick={() => {self.changeIndex(index)}} onMouseOver={() => {self.changeIndex(index)}}></div></li>
                    )
                })
            }
            </ul>
          </div>
        </div>
        <div className="nav-block recommend-nav">
            <div className="title">
                <p>推荐歌单</p>
                <a><i className="iconfont icon-right2"></i><span>更多</span></a>
            </div>
            <div className="list-box list-box-1">
                <div className="recommend-item">
                    <div className="imgbox recom-flag">
                        <div className="tip">
                            <span>100万</span>
                            <i className="iconfont icon-erjiheadphones38"></i>
                        </div>
                        <img src="public/img/findmusic/recommend/recommend-list-1.png"/>
                        <p>编辑推荐，赴约一场冷酷约会</p>
                    </div>
                    <p className="miaoshu">性冷淡女生集，你的声音在心中化开</p>
                </div>
                <div className="recommend-item">
                    <div className="imgbox recom-flag">
                        <div className="tip">
                            <span>100万</span>
                            <i className="iconfont icon-erjiheadphones38"></i>
                        </div>
                        <img src="public/img/findmusic/recommend/recommend-list-1.png"/>
                        <p>编辑推荐，赴约一场冷酷约会</p>
                    </div>
                    <p className="miaoshu">性冷淡女生集，你的声音在心中化开</p>
                </div>
                <div className="recommend-item">
                    <div className="imgbox recom-flag">
                        <div className="tip">
                            <span>100万</span>
                            <i className="iconfont icon-erjiheadphones38"></i>
                        </div>
                        <img src="public/img/findmusic/recommend/recommend-list-1.png"/>
                        <p>编辑推荐，赴约一场冷酷约会</p>
                    </div>
                    <p className="miaoshu">性冷淡女生集，你的声音在心中化开</p>
                </div>
                <div className="recommend-item">
                    <div className="imgbox recom-flag">
                        <div className="tip">
                            <span>100万</span>
                            <i className="iconfont icon-erjiheadphones38"></i>
                        </div>
                        <img src="public/img/findmusic/recommend/recommend-list-1.png"/>
                        <p>编辑推荐，赴约一场冷酷约会</p>
                    </div>
                    <p className="miaoshu">性冷淡女生集，你的声音在心中化开</p>
                </div>
                <div className="recommend-item">
                    <div className="imgbox recom-flag">
                        <div className="tip">
                            <span>100万</span>
                            <i className="iconfont icon-erjiheadphones38"></i>
                        </div>
                        <img src="public/img/findmusic/recommend/recommend-list-1.png"/>
                        <p>编辑推荐，赴约一场冷酷约会</p>
                    </div>
                    <p className="miaoshu">性冷淡女生集，你的声音在心中化开</p>
                </div>
            </div>
            <div className="list-box list-box-2">
                <div className="recommend-item">
                    <div className="imgbox recom-flag">
                        <div className="tip">
                            <span>100万</span>
                            <i className="iconfont icon-erjiheadphones38"></i>
                        </div>
                        <img src="public/img/findmusic/recommend/recommend-list-1.png"/>
                        <p>编辑推荐，赴约一场冷酷约会</p>
                    </div>
                    <p className="miaoshu">性冷淡女生集，你的声音在心中化开</p>
                </div>
                <div className="recommend-item">
                    <div className="imgbox recom-flag">
                        <div className="tip">
                            <span>100万</span>
                            <i className="iconfont icon-erjiheadphones38"></i>
                        </div>
                        <img src="public/img/findmusic/recommend/recommend-list-1.png"/>
                        <p>编辑推荐，赴约一场冷酷约会</p>
                    </div>
                    <p className="miaoshu">性冷淡女生集，你的声音在心中化开</p>
                </div>
                <div className="recommend-item">
                    <div className="imgbox recom-flag">
                        <div className="tip">
                            <span>100万</span>
                            <i className="iconfont icon-erjiheadphones38"></i>
                        </div>
                        <img src="public/img/findmusic/recommend/recommend-list-1.png"/>
                        <p>编辑推荐，赴约一场冷酷约会</p>
                    </div>
                    <p className="miaoshu">性冷淡女生集，你的声音在心中化开</p>
                </div>
                <div className="recommend-item">
                    <div className="imgbox recom-flag">
                        <div className="tip">
                            <span>100万</span>
                            <i className="iconfont icon-erjiheadphones38"></i>
                        </div>
                        <img src="public/img/findmusic/recommend/recommend-list-1.png"/>
                        <p>编辑推荐，赴约一场冷酷约会</p>
                    </div>
                    <p className="miaoshu">性冷淡女生集，你的声音在心中化开</p>
                </div>
                <div className="recommend-item">
                    <div className="imgbox recom-flag">
                        <div className="tip">
                            <span>100万</span>
                            <i className="iconfont icon-erjiheadphones38"></i>
                        </div>
                        <img src="public/img/findmusic/recommend/recommend-list-1.png"/>
                        <p>编辑推荐，赴约一场冷酷约会</p>
                    </div>
                    <p className="miaoshu">性冷淡女生集，你的声音在心中化开</p>
                </div>
            </div>
        </div>
        <div className="nav-block dujia-nav">
            <div className="title">
                <p>独家放送</p>
                <a><i className="iconfont icon-right2"></i><span>更多</span></a>
            </div>
            <div className="list-box">
                <div className="list-item">
                    <div className="imgbox dujia-flag">
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <p className="miaoshu">音乐专栏，许嵩的摄影艺术，一起来见证</p>
                </div>
                <div className="list-item">
                    <div className="imgbox dujia-flag">
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <p className="miaoshu">音乐专栏，许嵩的摄影艺术，一起来见证</p>
                </div>
                <div className="list-item">
                    <div className="imgbox dujia-flag">
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <p className="miaoshu">音乐专栏，许嵩的摄影艺术，一起来见证</p>
                </div>
            </div>
        </div>
        <div className="nav-block newmusic-nav">
            <div className="title">
                <p>最新音乐</p>
                <a><i className="iconfont icon-right2"></i><span>更多</span></a>
            </div>
            <ul className="list-box">
                <li className="list-item odd">
                    <p className="number-index">01</p>
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">BewhY</p>
                    </div>
                </li>
                <li className="list-item odd">
                    <p className="number-index">02</p>
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">BewhY</p>
                    </div>
                </li>
                <li className="list-item even">
                    <p className="number-index">03</p>
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">BewhY</p>
                    </div>
                </li>
                <li className="list-item even">
                    <p className="number-index">04</p>
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">BewhY</p>
                    </div>
                </li>
                <li className="list-item odd">
                    <p className="number-index">05</p>
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">BewhY</p>
                    </div>
                </li>
                <li className="list-item odd">
                    <p className="number-index">06</p>
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">BewhY</p>
                    </div>
                </li>
                <li className="list-item even">
                    <p className="number-index">07</p>
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">BewhY</p>
                    </div>
                </li>
                <li className="list-item even">
                    <p className="number-index">08</p>
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">BewhY</p>
                    </div>
                </li>
                <li className="list-item odd">
                    <p className="number-index">09</p>
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">BewhY</p>
                    </div>
                </li>
                <li className="list-item odd">
                    <p className="number-index">10</p>
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">BewhY</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className="nav-block recomMV-nav">
            <div className="title">
                <p>推荐MV</p>
                <a><i className="iconfont icon-right2"></i><span>更多</span></a>
            </div>
            <div className="list-box">
                <div className="list-item">
                    <div className="imgbox mv-flag">
                        <div className="tip">
                            <span>34332</span>
                            <i className="iconfont icon-shipin"></i>
                        </div>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <p className="miaoshu">天堂边缘</p>
                    <span className="songername">胡歌</span>
                </div>
                <div className="list-item">
                    <div className="imgbox mv-flag">
                        <div className="tip">
                            <span>34332</span>
                            <i className="iconfont icon-shipin"></i>
                        </div>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <p className="miaoshu">天堂边缘</p>
                    <span className="songername">胡歌</span>
                </div>
                <div className="list-item">
                    <div className="imgbox mv-flag">
                        <div className="tip">
                            <span>34332</span>
                            <i className="iconfont icon-shipin"></i>
                        </div>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <p className="miaoshu">天堂边缘</p>
                    <span className="songername">胡歌</span>
                </div>
            </div>
        </div>


        <div className="nav-block diantai-nav">
            <div className="title">
                <p>主播电台</p>
                <a><i className="iconfont icon-right2"></i><span>更多</span></a>
            </div>
            <div className="list-box">
                <li className="list-item">
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">周杰伦</p>
                    </div>
                </li>
                <li className="list-item">
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">周杰伦</p>
                    </div>
                </li>
                <li className="list-item">
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">周杰伦</p>
                    </div>
                </li>
                <li className="list-item">
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">周杰伦</p>
                    </div>
                </li>
                <li className="list-item">
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">周杰伦</p>
                    </div>
                </li>
                <li className="list-item">
                    <div className="pic-box">
                        <i className="iconfont icon-play"></i>
                        <img src="public/img/findmusic/dujia/dujia-01.jpg" />
                    </div>
                    <div className="detail">
                        <p className="songname">Forevet (Prod by GRAY)</p>
                        <p className="authorname">周杰伦</p>
                    </div>
                </li>
            </div>
        </div>
        <div className="bottom-nav">
            <p className="tip">可以根据个人喜好,对上述栏目进行拖拽排序</p>
            <div><button>调整栏目顺序</button></div>
        </div>
      </div>
    )
  }
  changeIndex (index) {
    player.changeIndex(index)
  }
}