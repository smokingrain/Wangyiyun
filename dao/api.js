import db from './musicDao'
import _ from 'lodash'
import uuid from 'uuid'
import { getState, dispatch } from '../redux/store/mainStore'
import { newMusic } from '../redux/actions/actions'

export function insertLocalMusicByClick(data){
  data.fileType = 'localmusic'
  const { local } = db
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
  const { local } = db
  return new Promise((resolve, reject) => {
    local.find({}, (err, data) => {
      resolve(data)
    })
  })
}



