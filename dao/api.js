import db from './musicDao'
import _ from 'lodash'
import uuid from 'uuid'
import { getState, dispatch } from '../redux/store/renderStore'
import { newMusic, newConfig } from '../redux/actions/actions'
import eventproxy from 'eventproxy'
import { convData } from '../common/db'
import { conv } from '../common/config'

const picDB = db.picture
const musicDB = db.music




export function initEnvorment(){
  let playing = {}
  let playingmusic = []
  let localmusic = []
  let voice = 1
  let init = false
  let loop = false
  let random = false
  if(!conv.get('init')){
    convData.set('localmusic',[])
    convData.set('playingmusic',[])
    convData.set('playing',{})
    convData.save()


    conv.set('audio:random', false)
    conv.set('audio:loop', false)
    conv.set('init', true)
    conv.set('audio:voice', 1)
    conv.save()
    console.log('init')
  }else{
    playing = convData.get('playing')
    playingmusic = convData.get('playingmusic')
    localmusic = convData.get('localmusic')
    init = conv.get('init')
    loop = conv.get('audio:loop')
    random = conv.get('audio:random')
    voice = conv.get('audio:voice')
  }

  let music = getState().music
  music.playing = playing
  music.playingmusic = playingmusic
  music.localmusic = localmusic

  let config = getState().config
  config.audio = {}
  config.audio.voice = voice
  config.audio.loop = loop
  config.audio.random = random
  config.init = init
  dispatch(newMusic(music))
  dispatch(newConfig(config))
  console.log('xxxxxxxxxx')
}
export function insertLocalMusicByClick(data, pic){
  musicDB.insert(data, function (err, newdoc) {
    if(!err){
      picDB.insert(pic, function (err, doc){
        if(!err){
          let temp = convData.get('localmusic')
          let localmusic = temp ? temp : []
          let obj = {
            uuid:data.uuid
          }
          localmusic.push(obj)
          convData.set('localmusic', localmusic)
          convData.save()
          let music = getState().music
          music.localmusic.push(data)
          dispatch(newMusic(music))
        }
      })
    }
  }) 
}






export function initLocalMusic(){
  let localmusic = convData.get('localmusic')
  if(!localmusic){
    return
  }
  let tempArr = []
  let ep = new eventproxy()
  ep.after('get_local', localmusic.length, function (list) {
    console.log(tempArr)
    if(tempArr.length<=0){
      return
    }
    let music = getState().music
    music.localmusic = tempArr
    console.log(music)
    dispatch(newMusic(music))
  })

  _.each(localmusic, function (item, index) {
    musicDB.find({uuid: item.uuid}, function (err, doc) {
      tempArr.push(doc[0])
      ep.emit('get_local')
      return 
    })
  })
}




export function initPlayingMusic(){
  let playing = convData.get('playingmusic')
  let tempArr = []
  let ep = new eventproxy()
  ep.after('get_playing', playing.length, function (list) {
    if(tempArr.length<=0){
      return
    }
    let music = getState().music
    music.playingMusic = tempArr
    dispatch(newMusic(music))
  })

  _.each(playing, function (item, index) {
    musicDB.find({uuid: item.uuid}, function (err, doc) {
      tempArr.push(doc[0])
      ep.emit('get_playing')
      return 
    })
  })
}

export function initPlaying(){
  let playing = convData.get('playing')
  if(!playing){
    return
  }
  musicDB.find({uuid: playing.uuid}, function (err, doc) {
    let music = getState().music
    music.playing = doc[0]
    dispatch(newMusic(music))
  })
}
// export function getLocalMusicAll(){
//   return new Promise((resolve, reject) => {
//     local.find({}, (err, data) => {
//       resolve(data)
//     })
//   })
// }


// export async function initPlayingGedan(){
//   let playingGedan = await getPlayingGedan()
//   if(playingGedan.length<=0){
//     return
//   }
//   let music = getState().music
//   music.playingGedan = playingGedan
//   dispatch(newMusic(music))
// }


// export function getPlayingGedan(){
//   return new Promise((resolve, reject) => {
//     playing.find({}, (err, data) => {
//       resolve(data)
//     })
//   })
// }


// export async function insertPlayingGedan(){
//   var gedan = [
//     {"extName":".mp3","fileName":"别怕我伤心-张信哲","fileSize":"4MB","filePath":"E:\\github\\Wangyiyun\\public\\music\\别怕我伤心-张信哲.mp3","fileTime":"290","fileAlbum":"\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","fileArtist":"������\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","fileComment":"37 ","fileGenre":"Sound Clip","fileTitle":"һ�Ű�������\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000","fileYear":"\u0000\u0000\u0000\u0000","fileImage":"","musicID":"60acb9ea-c01e-40c5-a0c2-19d0e6fc95bb","fileType":"localmusic","_id":"wRIW5f6154P6PTYE"}
//   ]
//   playing.remove({}, (err, number) =>{
//     if(err){
//       return
//     }
//   })
//   let ep = new eventproxy()
//   ep.after('insert_playing', gedan.length, function () {
//     let music = getState().music
//     music.playingGedan = gedan
//     dispatch(newMusic(music))
//   })
//   _.each(gedan, (item, index) => {
//     playing.insert(item, function (err, data) {
//       ep.emit('insert_playing')
//       return
//     })
//   })
// }




