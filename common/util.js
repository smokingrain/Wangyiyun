import { yinpin } from './data'
import path from 'path'
import _ from 'lodash'








export function isMP3(name) {
  let flag = false
  _.each(yinpin, (item) => {
    if(item == name){
      flag = true
    }
  })
  return flag
}


export function fileDetail(item){
  let size = fileSize(item.size)
  let obj = {
    extName: path.extname(item.name.substring(1)),
    fileName: path.basename(item.name),
    fileSize: size,
    filePath: item.path
  }
  return obj
}


export function fileSize(size){
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




export function uploadFiles(fileArr){
  const audio = window.audioBack
  _.each(fileArr, (item) => {
    audio.src = item.path
    audio.addEventListener('loadedmetadata', function () {
      console.log(audio.duration)
    })
  })
}



