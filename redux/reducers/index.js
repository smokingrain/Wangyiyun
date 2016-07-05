import { combineReducers } from 'redux'
import { 
  music,
  findmusic,
  config
 } from './reducers'

const rootReducer = combineReducers({
  music,
  findmusic,
  config
})

export default rootReducer