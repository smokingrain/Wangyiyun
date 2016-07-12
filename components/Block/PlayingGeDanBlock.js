import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import cs from 'classnames'


@connect((state) => {
  return {
    music:state.music
  }
})
export default class PlayingGeDanBlock extends Component {
    render(){
        return (
          <div className={cs(['appblock','playing-block','nodrag',{"hide": false}])}>
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
                <dl className="item odd">
                    <dd className="name">
                        <span>等我一首歌的时间</span>
                        <i className="iconfont icon-sound voice"></i>
                    </dd>
                    <dd className="songer"><span>呼延冰</span></dd>
                    <dd className="from"><i className="iconfont icon-lianjie lianjie"></i></dd>
                    <dd className="time"><span>00:00</span></dd>
                </dl>
                <dl className="item even">
                    <dd className="name">
                        <span>等我一首歌的时间</span>
                        <i className="iconfont icon-sound voice"></i>
                    </dd>
                    <dd className="songer"><span>呼延冰</span></dd>
                    <dd className="from"><i className="iconfont icon-lianjie lianjie"></i></dd>
                    <dd className="time"><span>00:00</span></dd>
                </dl>
                <dl className="item odd">
                    <dd className="name">
                        <span>等我一首歌的时间</span>
                        <i className="iconfont icon-sound voice"></i>
                    </dd>
                    <dd className="songer"><span>呼延冰</span></dd>
                    <dd className="from"><i className="iconfont icon-lianjie lianjie"></i></dd>
                    <dd className="time"><span>00:00</span></dd>
                </dl>
                <dl className="item even choosed">
                    <dd className="name">
                        <span>等我一首歌的时间</span>
                        <i className="iconfont icon-sound voice"></i>
                    </dd>
                    <dd className="songer"><span>呼延冰</span></dd>
                    <dd className="from"><i className="iconfont icon-lianjie lianjie"></i></dd>
                    <dd className="time"><span>00:00</span></dd>
                </dl>
                <dl className="item odd">
                    <dd className="name">
                        <span>等我一首歌的时间</span>
                        <i className="iconfont icon-sound voice"></i>
                    </dd>
                    <dd className="songer"><span>呼延冰</span></dd>
                    <dd className="from"><i className="iconfont icon-lianjie lianjie"></i></dd>
                    <dd className="time"><span>00:00</span></dd>
                </dl>
            </div>
          </div>
        )
    }
}




