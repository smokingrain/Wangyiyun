//action types 

import { 
  MUSIC,
  FINDMUSIC,
  CONFIG,
  MESSAGE,
  STATUS
} from './actionsTypes'


export function newStatus (status) {
  return {
    type: STATUS,
    music: status
  }
}

export function newMusic (music) {
  return {
    type: MUSIC,
    music: music
  }
}



export function findmusic (findmusic) {
  return {
    type: FINDMUSIC,
    findmusic: findmusic
  }
}


export function newConfig (config) {
  return {
    type: CONFIG  ,
    config: config
  }
}


export function newMessage (message) {
  return {
    type: MESSAGE  ,
    message: message
  }
}




