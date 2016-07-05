//action types 

import { 
  MUSIC,
  FINDMUSIC,
  CONFIG
} from './actionsTypes'


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


export function newconfig (config) {
  return {
    type: CONFIG  ,
    config: config
  }
}