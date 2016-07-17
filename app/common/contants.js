import path from 'path'


const ROOT = path.resolve(__dirname, '../../')
const CONFIGPATH = path.resolve(__dirname, '../', 'config')
const CONFIG = 'config.json'
const LOGPATH = path.resolve(__dirname, '../', 'logs')
const DBPATH = path.resolve(__dirname, '../', 'db')
const MUSICDB = 'musicDB.db'
const MUSICDB_TEST = 'music_testDB.db'
const picDB = 'pictureDB.db'
const picDB_TEST = 'picture_testDB.db'
const dbJSON = 'db.json'
const dbJSON_TEST = 'db_test.json'

export { 
	ROOT, 
	CONFIGPATH, 
	CONFIG, 
	LOGPATH,
  DBPATH,
	MUSICDB,
  picDB,
  dbJSON,
  dbJSON_TEST,
  picDB_TEST,
  MUSICDB_TEST
}

