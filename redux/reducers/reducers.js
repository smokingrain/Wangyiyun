import { 
  MUSIC,
  FINDMUSIC
} from '../actions/actionsTypes'
import { skinConv } from '../../common/skin'
import Immutable from 'immutable'
import { conv } from '../../common/config' 


let musicInit = {xxx:'xxx'}


//users
let userInit = conv.get('users')
if(!userInit){
  conv.set('users', {})
  conv.save()
  userInit = conv.get('users')
}



//findmusic module
let findmusicInit = {}







export function music (state = musicInit, action) {
  switch (action.type) {
    case MUSIC:
      let nextState = Immutable.Map(state).merge(action.music).toJS()
      return nextState
    default :
      return state
  }
}



export function findmusic (state = findmusicInit, action) {
  switch (action.type) {
    case MUSIC:
      let nextState = Immutable.Map(state).merge(action.music).toJS()
      return nextState
    default :
      return state
  }
}




