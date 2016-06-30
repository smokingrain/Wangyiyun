// import { BrowserWindow } from 'electron'
import _ from 'lodash'
import { ROOT } from '../common/contants'
let dx,dy





//open window api
export function openWindow(win, winID, options){
  let url = `file://${ROOT}/index.html#/${winID}`
  let opt = {
  }
  _.extend(opt, options)
  let newWin = new win(opt)
  newWin.loadURL(url)
  // newWin.webContents.openDevTools()
  return newWin
}

export function minWindow (win) {
  win.minimize()
}
export function maxWindow (win) {
  win.maximize()
}
export function closeApp () {

}


//close window
export function closeWindow (win) {
  win.close()
  win = null
}
export function moveTo (win, position, arg) {
  if(arg.type == 'mousedown'){
    dx = arg.x - position[0]
    dy = arg.y - position[1]
  }else if(arg.type == 'move'){

  }
  win.setPosition(arg.x-dx, arg.y-dy)
}

export function getPosition (win) {
  return win.getPosition()
}

export function showWindow (win) {
  win.show()
}

export function focusWindow (win) {
  win.focus()
}