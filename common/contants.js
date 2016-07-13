import path from 'path'


const ROOT = path.resolve(__dirname, '../')
const CONFIGPATH = path.resolve(__dirname, '../', 'config')
const CONFIG = 'config.json'
const LOGPATH = path.resolve(__dirname, '../', 'logs')
const DBPATH = path.resolve(__dirname, '../', 'db')
const MUSICDB = 'musicDB.db'
const picDB = 'pictureDB.db'
const dbJSON = 'db.json'

export { 
	ROOT, 
	CONFIGPATH, 
	CONFIG, 
	LOGPATH,
  DBPATH,
	MUSICDB,
  picDB,
  dbJSON
}

