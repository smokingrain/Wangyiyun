import { 
  DBPATH, 
  MUSICDB,
  picDB,
  MUSICDB_TEST,
  picDB_TEST
} from '../common/contants'
import path from 'path'
import nedb from 'nedb'
import fs from 'fs'
import { conv } from '../common/config'


let env = conv.get('env')

if(env == 'production'){
  //歌单数据库
  const music = DBPATH + path.sep + MUSICDB
  const picture = DBPATH + path.sep + picDB
}else{
  //歌单数据库
  const music = DBPATH + path.sep + MUSICDB_TEST
  const picture = DBPATH + path.sep + picDB_TEST
}

if(!fs.existsSync(DBPATH)){
  fs.mkdirSync(DBPATH)
}


let db = {}
db.music = new nedb({
  filename: music
})
db.music.loadDatabase()


db.picture = new nedb({
  filename:picture
})

db.picture.loadDatabase()







// setTimeout(() => {
//   db.gedan.find({type:'playingGedan'}, function (err, data){
//   console.log(data)
// })
// },2000)
export default db

