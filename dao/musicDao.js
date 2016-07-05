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


const gedanDoc = {
  hello: 'world'
}


db.gedan.insert(gedanDoc, function (err, newDoc) {

})

db.gedan.find({hello:'world'}, function (err, doc){
  console.log(doc[0].hello)
})


