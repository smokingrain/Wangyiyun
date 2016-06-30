import { initlogger, getLogger } from 'PDD-log4js-es5'
import fs from 'fs'
import path from 'path'
import { LOGPATH } from './contants'
import uuid from 'uuid'


const d = new Date()
const date = d.getFullYear().toString() + (d.getMonth() + 1).toString() + d.getDate().toString()
//月份要加上1   里面是有故事的

const logfile = LOGPATH+path.sep + uuid() + '.log'





initlogger([
  {
    cheese:'xxxxxx',
    format:'MM-DD-YYYY HH:mm:ss',
    file:'./xxxx/datalog.log',
    level: 'INFO',
    backups:10,
    limitSize:5
  },
  {
    cheese:'yyyyyyyy',
    format:'MM-DD-YYYY HH:mm:ss',
    file:logfile,
    level: 'INFO',
    backups:10,
    limitSize:5
  }
])


export const logger = getLogger('yyyyyyyy')
logger.info('xxxxxx')
logger.log('getget')

//获取到logger