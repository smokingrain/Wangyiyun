//action types 

import { 
  MUSIC,
  USERS,
  PHOTO,
  CONFIG,
  TODO,
  DIARY,
  SKIN,
  STATUS,
  VIDEO
} from './actionsTypes'


export function newMusic (music) {
  console.log(music)
  return {
    type: MUSIC,
    music: music
  }
}

export function newUser (user) {
  return {
    type: USER,
    user: user
  }
}

export function newPhoto (photo) {
  return {
    type: PHOTO,
    photo: photo
  }
}

export function newConfig (config) {
  return {
    type: CONFIG,
    config: config
  }
}

export function newTodo (todo) {
  return {
    type: TODO,
    todo: todo
  }
}

export function newDiary (diary) {
  return {
    type: DIARY,
    diary: diary
  }
}
export function newSkin (skin) {
  return {
    type: SKIN,
    skin: skin
  }
}
export function newStatus (status) {
  return {
    type: STATUS,
    status: status
  }
}
export function newStatus (video) {
  return {
    type: VIDEO,
    video: video
  }
}