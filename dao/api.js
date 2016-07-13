import db from './musicDao'
import _ from 'lodash'
import uuid from 'uuid'
import { getState, dispatch } from '../redux/store/mainStore'
import { newMusic } from '../redux/actions/actions'
import eventproxy from 'eventproxy'


const { gedan, playing, local } =db


export function insertLocalMusicByClick(data){
  console.log(data)
  local.insert(data, function (err, newdoc) {
    console.log('err',err)
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


export async function insertPlayingGedan(){
  var gedan = [
    {"extName":".mp3","fileName":"别怕我伤心-张信哲","fileSize":"4MB","filePath":"E:\\github\\Wangyiyun\\public\\music\\别怕我伤心-张信哲.mp3","fileTime":"290","fileAlbum":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","fileArtist":"������\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","fileComment":"37 ","fileGenre":"Sound Clip","fileTitle":"һ�Ű�������\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","fileYear":"\u0000\u0000\u0000\u0000","fileImage":"","musicID":"60acb9ea-c01e-40c5-a0c2-19d0e6fc95bb","fileType":"localmusic","_id":"wRIW5f6154P6PTYE"}
  ]
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




