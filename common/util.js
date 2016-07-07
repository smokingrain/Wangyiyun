import { yinpin } from './data'
import path from 'path'
import _ from 'lodash'
import async from 'async'







export function isMP3(name) {
  let flag = false
  _.each(yinpin, (item) => {
    if(item == name){
      flag = true
    }
  })
  return flag
}


export function fileDetail(arr){
  let newArr = []
  _.each(arr, function (item) {
    let size = fileSize(item.size)
    let obj = {
      extName: path.extname(item.name.substring(1)),
      fileName: path.basename(item.name),
      fileSize: size,
      filePath: item.path
    }
    newArr.push(obj)
  })

  return newArr
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





//上传歌曲并获取详细信息
export function uploadFiles(fileArr, infoArr){
  let arr = []
  const audio = window.audioBack
  async.filter(fileArr,function (item, cb) {
    audio.src = item.path
    audio.addEventListener('loadedmetadata', function () {
      let time = audio.duration.toString()
      time = time.substring(0, time.lastIndexOf('.'))
      time.replace('.','')
      arr.push(time)
      cb(null)
    })
  }, function (err, results){
    _.each(infoArr, function (item, index) {
      item.fileTime = arr[index]
    })
    return infoArr
  })
  // _.each(fileArr, (item) => {
  //   audio.src = item.path
  //   audio.addEventListener('loadedmetadata', function () {
  //     console.log(audio.duration)
  //   })
  // })
}



