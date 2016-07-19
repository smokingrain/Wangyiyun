import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import cs from 'classnames'
import { changeTime } from '../../common/util'

@connect((state) => {
  return {
    music:state.music.toJS(),
    status: state.status.toJS()
  }
})
export default class PlayingGeDanBlock extends Component {
    render(){
        const { music, status } = this.props
        const playingmusic = music.playingmusic
        const { showPlayingBlock,xxx } = status
        console.log(xxx)
        const playing = music.playing
        return (
          <div className={cs(['appblock','playing-block','nodrag',{"hide": !showPlayingBlock}])}>
            <div className="playing-top">
                <div className="op">
                    <div className="playing-list choosed">播放列表</div>
                    <div className="history-list">历史记录</div>
                </div>
                <i className="close iconfont icon-iconfontcha"></i>
            </div>
            <div className="playing-message">
                <div className="left">总50首</div>
                <div className="right">
                    <div className="collect-part">
                        <i className="iconfont icon-shoucangjia"></i>
                        <p>收藏所有</p>
                    </div>
                    <div className="delete-part">
                        <i className="iconfont icon-delete"></i>
                        <p>清空记录</p>
                    </div>
                </div>
            </div>
            <div className="playing-content">
            {
                playingmusic.map((item, index) => {
                    return(
                        <dl className={cs(['item',{'odd': index%2 == 0, 'even': index%2 == 1}])} key={index}>
                            <dd className="name">
                                <span>{item.fileName}</span>
                                {
                                    playing.uuid == item.uuid && (<i className="iconfont icon-sound voice"></i>)
                                }
                            </dd>
                            <dd className="songer"><span>{item.fileArtist || '未知'}</span></dd>
                            <dd className="from"><i className="iconfont icon-lianjie lianjie"></i></dd>
                            <dd className="time"><span>{item.fileTime}</span></dd>
                        </dl>
                    )
                })
            }
            </div>
          </div>
        )
    }
}




