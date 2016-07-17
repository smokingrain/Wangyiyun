import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Recommend from './Recommend'
import SongList from './SongList'
import SongEr from './SongEr'
import NewMusic from './NewMusic'
import DianTai from './DianTai'
import PaiHang from './PaiHang'
import cs from 'classnames'


export default class FindMusic extends Component {
    constructor () {
        super()
        this.state = {
            showModule: 'recommend'
        }
    }
    render(){
        const showModule = this.state.showModule
        const module = this.props.module
        return (
        	<div className={cs(['content-box','findmusic','nodrag',{"hide": module!= 'findmusic'}])}>
        		<div className="top-nav">
        			<ul className="top-nav-box">
        				<li className={cs(['top-nav-item',{"choosed": showModule == 'recommend'}])} onClick={() => {this.showModule('recommend')}}>
        					<a className="title">个性推荐</a>
        					<div className="flag"></div>
        				</li>    				
        				<li className={cs(['top-nav-item',{"choosed": showModule == 'songlist'}])} onClick={() => {this.showModule('songlist')}}>
        					<a className="title">歌单</a>
        					<div className="flag"></div>
        				</li>    				
        				<li className={cs(['top-nav-item',{"choosed": showModule == 'paihang'}])} onClick={() => {this.showModule('paihang')}}>
        					<a className="title">主播电台</a>
        					<div className="flag"></div>
        				</li>    				
        				<li className={cs(['top-nav-item',{"choosed": showModule == 'diantai'}])} onClick={() => {this.showModule('diantai')}}>
        					<a className="title">排行榜</a>
        					<div className="flag"></div>
        				</li>    				
        				<li className={cs(['top-nav-item',{"choosed": showModule == 'newmusic'}])} onClick={() => {this.showModule('newmusic')}}>
        					<a className="title">歌手</a>
        					<div className="flag"></div>
        				</li>
        				<li className={cs(['top-nav-item',{"choosed": showModule == 'songer'}])} onClick={() => {this.showModule('songer')}}>
        					<a className="title">最新音乐</a>
        					<div className="flag"></div>
        				</li>
        			</ul>
        		</div>
        		{
                    showModule == 'recommend' && (<Recommend></Recommend>)
                }
                {
                    showModule == 'songlist' && (<SongList></SongList>)
                }
                {
                    showModule == 'paihang' && (<PaiHang></PaiHang>)
                }
                {
                    showModule == 'diantai' && (<DianTai></DianTai>)
                }
                {
                    showModule == 'newmusic' && (<NewMusic></NewMusic>)
                }
                {
                    showModule == 'songer' && (<SongEr></SongEr>)
                }
        	</div>
        )
    }
    showModule (module) {
        this.setState({showModule: module})
    }
}




