import { 
  MUSIC,
  FINDMUSIC,
  CONFIG,
  MESSAGE
} from '../actions/actionsTypes'
import Immutable from 'immutable'
import { conv } from '../../common/config' 







//findmusic module
let findmusicInit = conv.get()
//music init
let musicInit = {
  showModule: 'localmusic',
  tempUploadFile:null,
  playIng:{
    path:'',
    name:''
  },
  audio: {
    voice:4,
    path:'',
    name:''
  }
}

let messageInit = {
  notify:{
    tip:null
  },
  showMask:false
}
//
let configInit = {}


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