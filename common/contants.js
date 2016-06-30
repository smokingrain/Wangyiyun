import path from 'path'


const sep = path.sep
const ROOT = path.resolve(__dirname, '../')
const CONFIGPATH = path.resolve(__dirname, '../', 'config')
const CONFIG = 'config.json'
const LOGPATH = path.resolve(__dirname, '../', 'logs')
const MUSICDBPATH = path.resolve(__dirname, '../', 'db')
const MUSICDB = 'musicDB.db'
const PHOTODBPATH = path.resolve(__dirname, '../', 'db')
const PHOTODB = 'photoDB.db'
const VIDEODBPATH = path.resolve(__dirname, '../', 'db')
const VIDEODB = 'videoDB.db'
const TODODBPATH = path.resolve(__dirname, '../', 'db')
const TODODB = 'todoDB.db'
const DIARYDBPATH = path.resolve(__dirname, '../', 'db')
const DIARYDB = 'diaryDB.db'
const SKINPATH = path.resolve(__dirname, '../', 'config')
const SKIN = 'skin.json'

export { 
	ROOT, 
	CONFIGPATH, 
	CONFIG, 
	LOGPATH,
	SKINPATH, 
	SKIN,  
	MUSICDBPATH,
	MUSICDB,
	PHOTODBPATH,
	PHOTODB,
	VIDEODBPATH,
	VIDEODB,
	TODODBPATH,
	TODODB,
	DIARYDBPATH,
	DIARYDB
}

