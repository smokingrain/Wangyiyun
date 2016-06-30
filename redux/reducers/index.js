import { combineReducers } from 'redux'
import { 
  music,
  user,
  photo,
  config,
  todo,
  diary,
  skin,
  status,
  video
 } from './reducers'

const rootReducer = combineReducers({
  music,
  user,
  photo,
  config,
  todo,
  diary,
  skin,
  status,
  video
})

export default rootReducer