import { 
  MUSIC,
  FINDMUSIC,
  CONFIG,
  MESSAGE,
  STATUS
} from '../actions/actionsTypes'
import Immutable from 'immutable'
import { conv } from '../../common/config' 
import _ from 'lodash'






//findmusic module
let findmusicInit = {}
//music init
let musicInit = {
  showModule: 'localmusic',
  tempUploadFile:null,
  pause: true,
  currTime:false
}

let messageInit = {
  notify:{
    tip:null
  },
  showMask:false
}
//
let configInit = {}

let statusInit = {
  showPlayingBlock: false
}
export function music (state = musicInit, action) {
  switch (action.type) {
    case MUSIC:
      let nextState = Immutable.Map(state).merge(action.music).toJS()
      return nextState
    default :
      return state
  }
}



export function status (state = statusInit, action) {
  switch (action.type) {
    case STATUS:
      let nextState = Immutable.Map(state).merge(action.status).toJS()
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




export function config (state = configInit, action) {
  switch (action.type) {
    case CONFIG:
      let nextState = Immutable.Map(state).merge(action.config).toJS()
      return nextState
    default :
      return state
  }
}


export function message (state = messageInit, action) {
  switch (action.type) {
    case MESSAGE:
      let nextState = Immutable.Map(state).merge(action.message).toJS()
      return nextState
    default :
      return state
  }
}