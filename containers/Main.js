import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import LeftPart from '../components/LeftPart'
import MainBox from '../components/MainBox'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainTip from '../components/tip/MainTip'
import cs from 'classnames'
import $ from 'jquery'
import { ipcRenderer } from 'electron'
import { window_show } from '../communicate/communicationTypes'

@connect((state) => {
  return {
    message:state.message
  }
})
export default class Main extends Component {

  componentDidMount() {
    $(document).ready(() => {
      let obj = {
        winID: 'main'
      }
      ipcRenderer.send(window_show,obj)
    })     
  }
  render(){
    const { tip } = this.props.message.notify
    const { showMask } = this.props.message
    return (
      <div className="Main default drag">
        <div className={cs(['maintip-mask',{'hide':!showMask}])}></div>
        {
          tip && (<MainTip tip={tip}></MainTip>)
        }
        <Header></Header>
        <div className="container-row">
          <LeftPart></LeftPart>
          <MainBox></MainBox>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}



