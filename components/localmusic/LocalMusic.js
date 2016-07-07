import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import cs from 'classnames'
import _ from 'lodash'
import path from 'path'
import fs from 'fs'
import $ from 'jquery'
import ep from 'eventproxy'
import { dispatch } from '../../redux/store/renderStore'
import { newMessage } from '../../redux/actions/actions'
import { isMP3, fileDetail, uploadFiles } from '../../common/util'
import { local } from '../../dao/musicDao'





@connect((state) => {
  return {
    message:state.message
  }
})
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
                                <input type="file" multiple hidden onChange={(e) => {this.upLoadLocalMusic(e)}}/>
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
        const message = this.props.message
        const notify = message.notify
        let tip = {}
        // let tip = {
        //     type: 'jinggao',
        //     message: "您上传的文件不是音乐文件"
        // }
        // message.showMask = true
        // notify.tip = tip
        // dispatch(newMessage(message))
        const files = e.target.files
        let error = false
        let successArr = []
        _.each(files, (item) => {
            if(!isMP3(path.extname(item.name).substring(1))){
                error = true
                return
            }else{
                successArr.push(item)
            }

        })
        if(error && files.length == 1){
            tip.type="jinggao"
            tip.message = "您加载的本地文件不是音频文件"
        }else if(error && files.length>1){
            tip.type = "jinggao"
            tip.message = "您加载的本地文件中存在非音频文件"
        }
        if(error && tip){
            message.notify.tip = tip
            message.showMask = true
            dispatch(newMessage(message))
        }
        console.log(successArr)
        if(successArr.length<=1){
            uploadFiles(successArr)    
        }
        // let fileInfo = fileDetail(item)
        // $('#audioBack').on('load', function () {
        //     console.log('get in')
        // })
        // $('#audioBack').attr('src',item.path)

    }
}




