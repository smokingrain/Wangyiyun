import db from './musicDao'
import _ from 'lodash'
import uuid from 'uuid'
import { getState, dispatch } from '../redux/store/mainStore'
import { newMusic } from '../redux/actions/actions'
import eventproxy from 'eventproxy'


const { gedan, playing, local } =db


export function insertLocalMusicByClick(data){
  data.fileType = 'localmusic'
  local.insert(data, function (err, newdoc) {
    if(!err){
      console.log('insert success')  
    }
  }) 
}






export async function initLocalMusic(){
  let localmusic = await getLocalMusicAll()
  let music = getState().music
  music.localmusic = localmusic
  dispatch(newMusic(music))
}




export function getLocalMusicAll(){
  return new Promise((resolve, reject) => {
    local.find({}, (err, data) => {
      resolve(data)
    })
  })
}


export async function initPlayingGedan(){
  let playingGedan = await getPlayingGedan()
  if(playingGedan.length<=0){
    return
  }
  let music = getState().music
  music.playingGedan = playingGedan
  dispatch(newMusic(music))
}


export function getPlayingGedan(){
  return new Promise((resolve, reject) => {
    playing.find({}, (err, data) => {
      resolve(data)
    })
  })
}


export async function insertPlayingGedan(gedan){
  playing.remove({}, (err, number) =>{
    if(err){
      return
    }
  })
  let ep = new eventproxy()
  ep.after('insert_playing', gedan.length, function () {
    let music = getState().music
    music.playingGedan = gedan
    dispatch(newMusic(music))
  })
  _.each(gedan, (item, index) => {
    playing.insert(item, function (err, data) {
      ep.emit('insert_playing')
      return
    })
  })
}


