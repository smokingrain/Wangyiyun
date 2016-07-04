import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Recommend from './Recommend'
import SongList from './SongList'
import SongEr from './SongEr'
import NewMusic from './NewMusic'
import DianTai from './DianTai'
import PaiHang from './PaiHang'


export default class FindMusic extends Component {
    constructor () {
        super()
        this.state = {
            showModule: 'songlist'
        }
    }
    render(){
        const showModule = this.state.showModule
        return (
        	<div className="content-box findmusic">
        		<div className="top-nav">
        			<ul className="top-nav-box">
        				<li className="top-nav-item choosed">
        					<a className="title">个性推荐</a>
        					<div className="flag"></div>
        				</li>    				
        				<li className="top-nav-item">
        					<a className="title">歌单</a>
        					<div className="flag"></div>
        				</li>    				
        				<li className="top-nav-item">
        					<a className="title">主播电台</a>
        					<div className="flag"></div>
        				</li>    				
        				<li className="top-nav-item">
        					<a className="title">排行榜</a>
        					<div className="flag"></div>
        				</li>    				
        				<li className="top-nav-item">
        					<a className="title">歌手</a>
        					<div className="flag"></div>
        				</li>
        				<li className="top-nav-item">
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
                    showModule == 'songlist' && (<PaiHang></PaiHang>)
                }
                {
                    showModule == 'DianTai' && (<DianTai></DianTai>)
                }
                {
                    showModule == 'songlist' && (<NewMusic></NewMusic>)
                }
                {
                    showModule == 'songlist' && (<SongEr></SongEr>)
                }
        	</div>
        )
    }
}




