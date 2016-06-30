import React from 'react'
import { store } from './redux/store/renderStore'
import { render } from 'react-dom'
import App from './containers/App'
import Main from './containers/Main'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import './renderProcess/appwin'
import './public/css/App.scss'




// setTimeout(() => {
//   openWelcome()
// },10000)
//路由配置   挂载store到属性位置
// window.console.log('entry')


// console.log(store.getState())
render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} >
        <Route path="/main" component={ Main }></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)