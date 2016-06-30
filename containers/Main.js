import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import LeftPart from '../components/LeftPart'
import MainBox from '../components/MainBox'
import Header from '../components/Header'


export default class Main extends Component {
  render(){
    return (
      <div className="Main default drag">
        <Header></Header>
        <div className="container-row">
          <LeftPart></LeftPart>
          <MainBox></MainBox>
        </div>
        <footer></footer>
      </div>
    )
  }
}



