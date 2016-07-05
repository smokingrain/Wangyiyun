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
                        <div className="play"></div>
                        <div className="collect"></div>
                        <div className="share"></div>
                        <div className="download"></div>
                    </div>
                    <div className="forth-box"></div>
                    <div className="fifth-box"></div>
                </div>
                <div className="flag-box">
                    <i></i><i></i>
                </div>
            </div>
          </div>
        )
    }
}




