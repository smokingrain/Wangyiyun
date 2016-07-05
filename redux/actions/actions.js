//action types 

import { 
  MUSIC,
  FINDMUSIC
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