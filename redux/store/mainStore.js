
//create store for main process
import { createStore, applyMiddleware, compose } from 'redux'
import { electronEnhancer } from 'redux-electron-store'
import rootReducer from '../reducers'






let middleware = []
const initialState = {}
let enhancer = compose(
  applyMiddleware(...middleware),
  electronEnhancer()
)
let store = createStore(rootReducer, initialState, enhancer)
let getState = store.getState
let dispatch = store.dispatch
export { getState, dispatch, store } 