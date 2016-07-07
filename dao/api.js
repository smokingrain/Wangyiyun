import db from './musicDao'
import _ from 'lodash'
import uuid from 'uuid'


export function insertLocalMusicByClick(data){
  const { local } = db
  _.each(data, function (item) {
    const obj = {

      extName: item.extName,
      fileName: item.fileName,
      fileSize: item.fileSize,
      filePath: item.filePath,
      fileTime: item.fileTime,
      fileId: uuid()
    }
    local.insert(data, function (err, newdoc) {
      if(!err){
        console.log('insert success')  
      }
    }) 
  })
}


export function getLocalMusicAll(){
  const { local } = db
  let localmusic = null
  local.find({},function (err, data) {
    localmusic = data
  })
  return localmusic
}

