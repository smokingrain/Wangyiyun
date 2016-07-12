import path from 'path'


const ROOT = path.resolve(__dirname, '../')
const CONFIGPATH = path.resolve(__dirname, '../', 'config')
const CONFIG = 'config.json'
const LOGPATH = path.resolve(__dirname, '../', 'logs')
const DBPATH = path.resolve(__dirname, '../', 'db')
const GEDANDB = 'gedanDB.db'
const MUSICDB = 'musicDB.db'
const LOCALMUSICDB = 'localmusicDB.db'
const playingDB = 'playingDB.db'

export { 
	ROOT, 
	CONFIGPATH, 
	CONFIG, 
	LOGPATH,
  DBPATH,
	MUSICDB,
  GEDANDB,
  LOCALMUSICDB,
  playingDB
}

