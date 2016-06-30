import { DB, DBPATH } from '../common/contants'
import path from 'path'
import nedb from 'nedb'
import fs from 'fs'



const dbfile = DBPATH + path.sep + DB 
if(!fs.existsSync(DBPATH)){
  fs.mkdirSync(DBPATH)
}



const db = new nedb({
  filename: dbfile
})
db.loadDatabase(function (err){
  
})

let doc = {
  hello:'hello',
  n:5,
  today:new Date()
}



