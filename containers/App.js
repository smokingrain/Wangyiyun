import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'



export default class App extends Component {
  render(){
    return (
      <div className="App drag">
        {this.props.children}
      </div>
    )
  }
}


App.propTypes = {
  children: PropTypes.element.isRequired
}

