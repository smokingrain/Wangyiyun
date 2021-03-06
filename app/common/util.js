import { yinpin } from './data'
import path from 'path'
import _ from 'lodash'
import async from 'async'
import { insertLocalMusicByClick } from '../dao/api'
import id3 from 'id3js'
import eventproxy from 'eventproxy'
import { dispatch, getState } from '../redux/store/renderStore'
import { newMusic } from '../redux/actions/actions'
import $ from 'jquery'
import uuid from 'uuid'
import jsmediatags from 'jsmediatags'
import { convData } from './db'

export function isMP3(name) {
  let flag = false
  _.each(yinpin, (item) => {
    if(item == name){
      flag = true
    }
  })
  return flag
}



//过滤一遍获取信息
export function fileDetail(arr){
  let newArr = []
  _.each(arr, function (item) {
    let obj = {}
    let size = getFileSize(item.size)
    let fileSize = size.size.toString().concat(size.ext)
    let dotIndex = item.name.indexOf('.')
    obj.extName = path.extname(item.name.substring(1))
    obj.fileName = path.basename(item.name).substring(0,dotIndex)
    obj.fileSize = fileSize
    obj.filePath = item.path
    obj.uuid = uuid()
    newArr.push(obj)
  })
  return newArr
}


//把数字转换为单位
export function getFileSize(size){
  let ext = 'B'
  if(Math.floor(size / 1024) <= 0){
    return {size:size, ext:ext}
  }else if(Math.floor(size / (1024*1024))<=0){
    ext = 'KB'
    return {size:Math.floor(size/(1024)),ext:ext}
  }else if(Math.floor(size / (1024*1024*1024))<=0){
    ext = 'MB'
    return {size:Math.floor(size / (1024*1024)),ext:ext}
  }
}


//上传歌曲并获取详细信息  时间
export function uploadFiles(fileArr){
  let ep = new eventproxy()
  ep.after('got_file', fileArr.length, function (list) {
    _.each(list, function (item, index) {
      jsmediatags.read(item.filePath, {
        onSuccess: function(tag) {
          var obj = {
            uuid: item.uuid,
            picture: tag.tags.picture ? tag.tags.picture.data : ""
          }
          item.fileLocal = true
          item.fileAlbum = tag.album ? tag.album : ""
          item.fileArtist = tag.artist ? tag.artist: ""
          item.fileTitle = tag.title ? tag.title : ""
          insertLocalMusicByClick(item, obj)
          // let music = getState().music.toJS()
          // music.localmusic.push(item)
          // dispatch(newMusic(music))
        },
        onError: function(error) {
          console.log(':(', error.type, error.info)
        }
      })
    })
  })

  _.each(fileArr, function (item, index) {
    let audio = document.createElement('audio')
    audio.src = item.filePath
    audio.addEventListener('loadedmetadata', function () {
      let time = audio.duration.toString()
      time = time.substring(0, time.lastIndexOf('.'))
      time.replace('.','')
      item.fileTime = time
      ep.emit('got_file', item)
      $(audio).remove()
    })
  })



  // async.map(fileArr,function (item, cb) {
  //   audio.src = item.path
  //   audio.addEventListener('loadedmetadata', function () {
  //     let time = audio.duration.toString()
  //     time = time.substring(0, time.lastIndexOf('.'))
  //     time.replace('.','')
  //     item.fileTime = time
  //     cb(null, item)
  //   })
  // }, function (err, results){
  //   console.log(results)
  //   // insertLocalMusicByClick(infoArr)
  //   _.each(fileArr, function (item, index) {
  //     id3({file:item.path,type:id3.OPEN_LOCAL}, function (err, tags) {
  //       item.fileAlbum = tags.v1.album ? tags.v1.album : tags.v2.album
  //       item.fileArtist = tags.v1.artist ? tags.v1.artist : tags.v2.artist
  //       item.fileComment = tags.v1.comment ? tags.v1.comment : tags.v2.comment
  //       item.fileGenre = tags.v1.genre ? tags.v1.genre : tags.v2.genre
  //       item.fileTitle = tags.v1.title ? tags.v1.title : tags.v2.title
  //       item.fileTrack = tags.v1.track ? tags.v1.track : tags.v2.track
  //       item.fileYear = tags.v1.year ? tags.v1.year : tags.year
  //       item.fileImage = tags.v2.image ? tags.v2.image : ''
  //       console.log(item)
  //     })
  //   })
  // })
}


// export function getImgSongZhuan(arr){
//   async.filter(arr, (item, cb) => {
//     let reader = new FileReader()
//     reader.onloadend = function (e) {
//       let result = this.result
//     }
//   })
// }



export function changeTime(time){
  let total = time
  let second_1 = 0
  let second_2 = 0
  let min_1 = 0
  let min_2 = 0
  let second = total % 60
  second_2 = second%10
  second_1 = Math.floor(second/10)

  let min = (total -second)/60
  min_2 = min%60
  min_1 = Math.floor(min/10)
  min_1 = min_1.toString()
  min_2 = min_2.toString()
  second_1 = second_1.toString()
  second_2 = second_2.toString()
  let timeNow = min_1.concat(min_2,":",second_1,second_2)
  return timeNow
}



export function getNewMusicObj(old){
  let obj = {}
  obj.extName = old.extName
  obj.fileName = old.fileName
  obj.fileArtist = old.fileArtist
  obj.fileSize = old.fileSize
  obj.filePath = old.filePath
  obj.uuid = old.uuid
  obj.fileTime = old.fileTime
  obj.fileLocal = old.fileLocal
  obj.fileAlbum = old.fileAlbum
  obj.fileTitle = old.fileTitle
  obj._id = old._id


  return obj
}