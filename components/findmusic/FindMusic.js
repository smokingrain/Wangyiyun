import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import Recommend from './Recommend'


export default class FindMusic extends Component {
  render(){
    return (
    	<div className="content-box findmusic">
    		<div className="top-nav">
    			<ul className="top-nav-box">
    				<li className="top-nav-item choosed">
    					<a className="title">个性推荐</a>
    					<div className="flag"></div>
    				</li>    				
    				<li className="top-nav-item choosed">
    					<a className="title">歌单</a>
    					<div className="flag"></div>
    				</li>    				
    				<li className="top-nav-item choosed">
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
    		<Recommend></Recommend>
    	</div>
    )
  }
}




