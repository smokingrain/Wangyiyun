//这个config是当成伪数据库的

import { CONFIGPATH, CONFIG } from './contants'
import fs from 'fs'
import _ from 'lodash'
import { sep } from 'path'
import { uuid } from 'uuid'
import path from 'path'



const configcon = new(require('nconf').Provider)()



let config = function(){
  const DEFAULT = {
    initialized: false
  }
  let file = null
  const url = CONFIGPATH
  file = CONFIGPATH + path.sep + CONFIG
  let nconf = configcon



  //json文件创建部分
  try{
    if(!fs.existsSync(url)){
      fs.mkdirSync(url)
    }
    if(!fs.existsSync(file)){
      fs.writeFileSync(file,"{}")
    }
  }catch(e){
    fs.writeFileSync(file,"{}")
  }finally{
    nconf.file({
      file: file
    })

    nconf.defaults(DEFAULT)
  }



  //方法到出部分
  const self = this
  _.each(['get','set','clear','save','add'],function(method){
   self[method] = function(){
     return nconf[method].apply(nconf,arguments)
   }
  })

}


export const conv = new config()



