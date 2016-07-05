import { GEDANDB, GEDANDBPATH } from '../common/contants'
import path from 'path'
import nedb from 'nedb'
import fs from 'fs'




//歌单数据库
const gedanFile = GEDANDBPATH + path.sep + GEDANDB
if(!fs.existsSync(GEDANDBPATH)){
  fs.mkdirSync(GEDANDBPATH)
}


let db = {}
db.gedan = new nedb({
  filename: gedanFile
})
db.gedan.loadDatabase()

const item = {
  heart:false,
  download: false,
  name:'PDD',
  songer:'周杰伦',
  cardName:'普苦情',
  alltime:3602
}

db.gedan.insert(item, function (err, docData) {
  
})

export default db

