import path from 'path'


const sep = path.sep
const ROOT = path.resolve(__dirname, '../')
const CONFIGPATH = path.resolve(__dirname, '../', 'config')
const CONFIG = 'config.json'
const LOGPATH = path.resolve(__dirname, '../', 'logs')
const MUSICDBPATH = path.resolve(__dirname, '../', 'db')
const MUSICDB = 'musicDB.db'

export { 
	ROOT, 
	CONFIGPATH, 
	CONFIG, 
	LOGPATH,
	MUSICDBPATH,
	MUSICDB
}

