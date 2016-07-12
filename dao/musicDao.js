import { 
  GEDANDB, 
  DBPATH, 
  LOCALMUSICDB,
  playingDB } from '../common/contants'
import path from 'path'
import nedb from 'nedb'
import fs from 'fs'




//歌单数据库
const gedanFile = DBPATH + path.sep + GEDANDB
const localfile = DBPATH + path.sep + LOCALMUSICDB
const playingfile = DBPATH + path.sep + playingDB
if(!fs.existsSync(DBPATH)){
  fs.mkdirSync(DBPATH)
}


let db = {}
db.gedan = new nedb({
  filename: gedanFile
})
db.gedan.loadDatabase()


db.local = new nedb({
  filename: localfile
})
db.playing = new nedb({
  filename: playingfile
})
db.local.loadDatabase()
db.playing.loadDatabase()
let playingGedan = {
  type:'playingGedan',
  createDate:'00:00',
  name:"playing",
  music:[
    {
      name: "Beyond - 光辉岁月",
      path: "E:\\github\\Wangyiyun\\public\\music\\Beyond - 光辉岁月.mp3",
      time:'00:00',
      size:'3MB'
    },
    {
      name: "陈慧琳 - 记事本",
      path: "E:\\github\\Wangyiyun\\public\\music\\陈慧琳 - 记事本.mp3",
      time:'00:00',
      size:'3MB'
    },
    {
      name: "陈奕迅 - 爱情转移",
      path: "E:\\github\\Wangyiyun\\public\\music\\陈奕迅 - 爱情转移.mp3",
      time:'00:00',
      size:'3MB'
    },
    {
      name: "电视剧 - 一眼万年 - 天外飞仙主题曲",
      path: "E:\\github\\Wangyiyun\\public\\music\\电视剧 - 一眼万年 - 天外飞仙主题曲.mp3",
      time:'00:00',
      size:'3MB'
    },
    {
      name: "范玮琪 - 最初的梦想",
      path: "E:\\github\\Wangyiyun\\public\\music\\范玮琪 - 最初的梦想.mp3",
      time:'00:00',
      size:'3MB'
    }
  ]
}




// setTimeout(() => {
//   db.gedan.find({type:'playingGedan'}, function (err, data){
//   console.log(data)
// })
// },2000)
export default db

