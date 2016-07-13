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






// setTimeout(() => {
//   db.gedan.find({type:'playingGedan'}, function (err, data){
//   console.log(data)
// })
// },2000)
export default db

