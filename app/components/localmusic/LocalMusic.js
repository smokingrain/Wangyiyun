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
import { newMessage, newMusic } from '../../redux/actions/actions'
import { isMP3, fileDetail, uploadFiles, changeTime, getNewMusicObj } from '../../common/util'
import async from 'async'
// import { insertPlayingGedan } from '../../dao/api'
import uuid from 'uuid'
import { play, animatePlay } from '../../api/audio'





@connect((state) => {
  return {
    message:state.message,
    music: state.music.toJS()
  }
})
export default class LocalMusic extends Component {
    constructor () {
        super()
    }
    render(){
        const self = this
        const module = this.props.module
        const localmusic = this.props.music.localmusic
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
                                <input type="file" multiple id="load-local-music" hidden onChange={(e) => {this.upLoadLocalMusic(e)}}/>
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
                    {
                        localmusic && localmusic.map((item, index) => {
                            return(
                                <dl className="list list-item odd" className={cs(['list','list-item',{'odd':index%2 == 0,"even":index%2 == 1}])} key={index} onDoubleClick={()=>{self.chooseThisItem(item, localmusic)}}>
                                    <dd className="number"><span>{index+1}</span></dd>
                                    <dd className="title"><span>{item.fileName}</span></dd>
                                    <dd className="songer"><span>{item.fileArtist || '未知'}</span></dd>
                                    <dd className="zhuanji"><span>{item.fileAlbum || '未知'}</span></dd>
                                    <dd className="time"><span>{changeTime(item.fileTime)}</span></dd>
                                    <dd className="size"><span>{item.fileSize}</span></dd>
                                </dl>
                            )
                        })
                    }
                </div>                
                {
                    localmusic.length == 0 && (
                        <div className="bottom-nav">
                            <p className="tip">乐库中没有本地音乐,点击添加</p>
                            <div><button>您可以手动添加</button></div>
                        </div>
                    )
                }
            </div>
          </div>
        )
    }
    upLoadLocalMusic(e){
        const message = this.props.message
        const notify = message.notify
        let tip = {}
        // insertPlayingGedan()
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
        console.log('detail')
        successArr = fileDetail(successArr)
        //现在获取到的successARR就是成功的有效的文件数组
        //开始流水式处理异步


        //第一层  获取filename  extname filesize filepath



        document.getElementById('load-local-music').value = null
        uploadFiles(successArr)    
        // let fileInfo = fileDetail(item)
        // $('#audioBack').on('load', function () {
        //     console.log('get in')
        // })
        // $('#audioBack').attr('src',item.path)
    }
    chooseThisItem(item, localmusic){
        let music = this.props.music
        _.extend(music.playing, item)
        // music.playing = item
        music.playingmusic = []
        _.each(localmusic, (i) => {
            let obj = getNewMusicObj(i)
            music.playingmusic.push(obj)
            console.log(music.playingmusic)
        })
        music.pause = false
        music.toplay = true
        console.log(music)
        dispatch(newMusic(music))
        // animatePlay()
    }
}




