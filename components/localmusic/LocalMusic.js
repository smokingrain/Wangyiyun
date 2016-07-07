import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import cs from 'classnames'


export default class LocalMusic extends Component {
    constructor () {
        super()
    }
    render(){
        const module = this.props.module
        return (
          <div className={cs(['content-box','localmusic','nodrag',{"hide": module!= 'localmusic'}])}>
            <div className="top-nav">
                <div className="left">
                    <p className="local">本地音乐</p>
                    <p className="number">11首音乐</p>
                    <a className="choosedir">选择目录</a>
                </div>
                <div className="right"></div>
            </div>
            <div className="nav-box local-music-list nodrag">
                <div className="musiclist-nav">
                    <div className="opera">
                        <div className="play">
                            <div className="">
                                <i className="iconfont icon-bofang"></i>
                                <p>播放全部</p>
                            </div>
                            <i className="iconfont icon-jia"></i>
                        </div>
                        <div className="add">
                            <label>
                                <i className="iconfont icon-yinle"></i>
                                <p>添加音乐</p>
                                <input type="file" hidden onChange={(e) => {this.upLoadLocalMusic(e)}}/>
                            </label>
                        </div>
                        <div className="search"></div>
                    </div>
                    <dl className="list-top">
                        <dd className="number">序号</dd>
                        <dd className="title">音乐标题</dd>
                        <dd className="songer">歌手</dd>
                        <dd className="zhuanji">专辑</dd>
                        <dd className="time">时长</dd>
                        <dd className="size">大小</dd>
                    </dl>
                    <dl className="list list-item odd">
                        <dd className="number"><span>01</span></dd>
                        <dd className="title"><span>天使的翅膀</span></dd>
                        <dd className="songer"><span>周杰伦</span></dd>
                        <dd className="zhuanji"><span>嘟嘟嘟</span></dd>
                        <dd className="time"><span>00:00</span></dd>
                        <dd className="size"><span>3.5MB</span></dd>
                    </dl>
                    <dl className="list list-item even">
                        <dd className="number"><span>01</span></dd>
                        <dd className="title"><span>天使的翅膀</span></dd>
                        <dd className="songer"><span>周杰伦</span></dd>
                        <dd className="zhuanji"><span>嘟嘟嘟</span></dd>
                        <dd className="time"><span>00:00</span></dd>
                        <dd className="size"><span>3.5MB</span></dd>
                    </dl>
                    <dl className="list list-item odd">
                        <dd className="number"><span>01</span></dd>
                        <dd className="title"><span>天使的翅膀</span></dd>
                        <dd className="songer"><span>周杰伦</span></dd>
                        <dd className="zhuanji"><span>嘟嘟嘟</span></dd>
                        <dd className="time"><span>00:00</span></dd>
                        <dd className="size"><span>3.5MB</span></dd>
                    </dl>
                    <dl className="list list-item even">
                        <dd className="number"><span>01</span></dd>
                        <dd className="title"><span>天使的翅膀</span></dd>
                        <dd className="songer"><span>周杰伦</span></dd>
                        <dd className="zhuanji"><span>嘟嘟嘟</span></dd>
                        <dd className="time"><span>00:00</span></dd>
                        <dd className="size"><span>3.5MB</span></dd>
                    </dl>
                    <dl className="list list-item odd">
                        <dd className="number"><span>01</span></dd>
                        <dd className="title"><span>天使的翅膀</span></dd>
                        <dd className="songer"><span>周杰伦</span></dd>
                        <dd className="zhuanji"><span>嘟嘟嘟</span></dd>
                        <dd className="time"><span>00:00</span></dd>
                        <dd className="size"><span>3.5MB</span></dd>
                    </dl>
                    <dl className="list list-item even choosed">
                        <dd className="number"><span>01</span></dd>
                        <dd className="title"><span>天使的翅膀</span></dd>
                        <dd className="songer"><span>周杰伦</span></dd>
                        <dd className="zhuanji"><span>嘟嘟嘟</span></dd>
                        <dd className="time"><span>00:00</span></dd>
                        <dd className="size"><span>3.5MB</span></dd>
                    </dl>
                </div>                


                <div className="bottom-nav">
                    <p className="tip">正在完善所有功能,敬请期待</p>
                    <div><button>localmusic</button></div>
                </div>
            </div>
          </div>
        )
    }
    upLoadLocalMusic(e){
        const files = e.target.file
        console.log(files.length)
    }
}




