import { combineReducers } from 'redux'
import { 
  music,
  findmusic,
  config,
  message,
  status
 } from './reducers'

const rootReducer = combineReducers({
  music,
  findmusic,
  config,
  message,
  status
})

export default rootReducer