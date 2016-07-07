import { combineReducers } from 'redux'
import { 
  music,
  findmusic,
  config,
  message
 } from './reducers'

const rootReducer = combineReducers({
  music,
  findmusic,
  config,
  message
})

export default rootReducer