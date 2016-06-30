import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import LeftPart from '../components/LeftPart'
import MainBox from '../components/MainBox'


export default class Main extends Component {
  render(){
    return (
      <div className="Main Main-default drag">
        <header></header>
        <div className="container-row">
          <LeftPart></LeftPart>
          <MainBox></MainBox>
        </div>
        <footer></footer>
      </div>
    )
  }
}



