import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import cs from 'classnames'


export default class Gedan extends Component {
    constructor () {
        super()
    }
    render(){
        const module = this.props.module
        return (
          <div className={cs(['content-box','gedan','nodrag',{"hide": module!= 'gedan'}])}>
            <div className="nav-box detail-nav">
                <img src="public/img/gedan/gedan01.jpg"/>
                <div className="information">
                    <div className="first-box">
                        <p className="gedanflag">歌单</p>
                        <p className="gedanName">PDD</p>
                        <i className="iconfont icon-bianji"></i>
                    </div>
                    <div className="second-box">
                        <i className="iconfont icon-touxiang"></i>
                        
                        <p>青铜组的王者选手</p>
                        <span className="date">2016-05-27</span>
                        <span>创建</span>
                    </div>
                    <div className="third-box">
                        <div className="play">
                            <div className="">
                                <i className="iconfont icon-bofang"></i>
                                <p>播放全部</p>
                            </div>
                            <i className="iconfont icon-jia"></i>
                        </div>
                        <div className="collect">
                            <i className="iconfont icon-shoucangjia"></i>
                            <p>收藏(0)</p>
                        </div>
                        <div className="share">
                            <i className="iconfont icon-shoucangjia"></i>
                            <p>分享(0)</p>
                        </div>
                        <div className="download">
                            <i className="iconfont icon-xiazai"></i>
                            <p>下载全部</p>
                        </div>
                    </div>
                    <div className="forth-box">
                        <div className="sigure">标签:</div>
                        <div className="sigure-nav">
                            <span className="sigure-block">抒情</span>
                            <span className="sigure-block">悲伤</span>
                            <span className="sigure-block">怀旧</span>
                            <span className="sigure-block">欧美</span>
                            <span className="sigure-block">日本</span>
                        </div>
                    </div>
                    <div className="fifth-box">
                        <div className="detail-info">简介:</div>
                        <div className="detail-info-nav">
                            <p>来自于清新小镇的灵感...</p>
                        </div>
                    </div>
                </div>
                <div className="flag-box">
                    <i className="iconfont icon-bofang"></i>
                    <span className="already">6</span>
                    <i className="iconfont icon-yinle"></i>
                    <span className="total">8</span>
                </div>
            </div>

            <div className="nav-box list-nav">
                <div className="top-block">
                    <div className="list-li li choosed">歌曲列表</div>
                    <div className="discuss-li notchoosed li">评论(0)</div>
                    <div className="collect-li notchoosed li">收藏者</div>
                    <div className="search-li">
                        <input type="text"/>
                    </div>
                </div>
                <div className="list-block">
                    <div className="list-top"></div>
                    <div className="list-item"></div>
                </div>
            </div>
          </div>
        )
    }
}




