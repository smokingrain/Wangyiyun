import { combineReducers } from 'redux'
import { 
  music,
  findmusic
 } from './reducers'

const rootReducer = combineReducers({
  music,
  findmusic
})

export default rootReducer