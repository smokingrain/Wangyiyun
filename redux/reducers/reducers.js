import { 
  MUSIC,
  USER,
  PHOTO,
  CONFIG,
  TODO,
  DIARY,
  SKIN,
  STATUS,
  VIDEO
} from '../actions/actionsTypes'

// import { musicDB } from '../../common/musicDB'
// import { todoDB } from '../../common/todoDB'
// import { photoDB } from '../../common/photoDB'
// import { configDB } from '../../common/configDB'
// import { userDB } from '../../common/userDB'
// import { diaryDB } from '../../common/diaryDB'
import { skinConv } from '../../common/skin'
import Immutable from 'immutable'
import { conv } from '../../common/config' 



// //关于user模块的
// let userList = userDB.get('userlist')
// let userInit = {}
// if(userList){
//   userInit.userList = userList
// }



// //关于音乐模块的
// let musicList = musicDB.get('musiclist')
// let musicInit = {}
// if(musicList){
//   musicInit.musiclist = musicList
// }
// musicInit.searchResult = []
// musicInit.isSearching = false
// //获取初始音乐列表

// //关于photo的store初始化
// let photoInit = {}
// let photolist = photoDB.get('photolist')
// let photoBooks = photoDB.get('photoBooks')
// if(photolist){
//   photoInit.photolist = photolist
//   photoInit.photoBooks = photoBooks
//   photoInit.playingIndex = 0
//   photoInit.playinglist = []
// }


// //关于config模块的
// let configInit = {}
// let photoConfig = configDB.get('photoConfig')
// configInit.photoConfig = photoConfig


// //关于todo的
// let todoInit = {}
// let todolist = todoDB.get('todolist')
// if(todolist){
//   todoInit.todolist = todolist
//   todoInit.showing = todolist[0]
// }
// todoInit.searchResult = []    //todo search result
// todoInit.addItem = {} //todo add item now
// todoInit.tempData = {}


// //about diary module
// let diaryInit = {}
// let diarylist = diaryDB.get('diarylist')
// if(diarylist){
//   diaryInit.diarylist = diarylist

// }
// diaryInit.showLeft = false

let musicInit = {xxx:'xxx'}
let photoInit = {}
let configInit = {}
let todoInit = {}
let diaryInit = {}
let videoInit = {}

//users
let userInit = conv.get('users')
if(!userInit){
  conv.set('users', {})
  conv.save()
  userInit = conv.get('users')
}







//status
let statusInit = {}
statusInit.loginStatus = {}
statusInit.loginStatus.loging = true






//skin
let pageConfig = skinConv.get('config')
let list = skinConv.get('list')
let skinInit = {}
if(pageConfig){
  skinInit.config = pageConfig
  skinInit.list = list
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



export function user (state = userInit, action) {
  switch (action.type) {
    case USER:
      let nextState = Immutable.Map(state).merge(action.user).toJS()
      return nextState
    default :
      return state
  }
}


export function photo (state = photoInit, action) {
  switch (action.type) {
    case PHOTO:
      let nextState = Immutable.Map(state).merge(action.photo).toJS()
      return nextState
    default:
      return state
  }
}


export function config (state = configInit, action) {
  switch (action.type) {
    case CONFIG:
      let nextState = Immutable.Map(state).merge(action.config).toJS()
      return nextState
    default:
      return state
  }
}

export function todo (state = todoInit, action) {
  switch (action.type) {
    case TODO:
      let nextState = Immutable.Map(state).merge(action.todo).toJS()
      return nextState
    default:
      return state
  }
}
export function diary (state = diaryInit, action) {
  switch (action.type) {
    case DIARY:
      let nextState = Immutable.Map(state).merge(action.diary).toJS()
      return nextState
    default:
      return state
  }
}
export function skin (state = skinInit, action) {
  switch (action.type) {
    case SKIN:
      let nextState = Immutable.Map(state).merge(action.skin).toJS()
      return nextState
    default:
      return state
  }
}

export function status (state = statusInit, action) {
  switch (action.type) {
    case STATUS:
      let nextState = Immutable.Map(state).merge(action.status).toJS()
      return nextState
    default:
      return state
  }
}
export function video (state = videoInit, action) {
  switch (action.type) {
    case VIDEO:
      let nextState = Immutable.Map(state).merge(action.video).toJS()
      return nextState
    default:
      return state
  }
}