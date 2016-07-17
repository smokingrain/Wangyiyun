import { store } from './app/redux/store/mainStore'
import { getPosition, moveTo, openWindow } from './app/mainProcess/desktop'
import electron from 'electron'
import { app, ipcMain, BrowserWindow } from 'electron'
import { window_move_to, window_open } from './app/communicate/communicationTypes'   
import { config } from './app/common/config'
import { 
  moveWindow, 
  openDevtools, 
  closeDevtools,
  showWindowID,
  closeWindowID,
  focusWindowID,
  openWindowID,
  minWindowID,
  maxWindowID,
  quitApp
} from './app/mainProcess/listenEvent'
import { main } from './app/renderProcess/winOptions'
// import { logger } from './modules/logger'
// import { logger } from './common/logger'
import { initLocalMusic, initPlayingMusic, initPlaying, initEnvorment, initMessage } from './app/dao/api'
let dataGlobal = {}
dataGlobal.win = []


initEnvorment()
initMessage()
// initLocalMusic()
// initPlayingGedan()

// insertPlayingGedan(arr)
// initLocalMusic()
// initPlayingMusic()
// initPlaying()
app.on('ready', () => {
  // logger.info('app is ready')
  let newWin = openWindow(BrowserWindow, 'main', main)
  dataGlobal.win['main'] = newWin
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
console.log(process.versions.node)
console.log(process.versions.chrome)
console.log(process.versions.electron)
app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// setTimeout(function () {
//   console.log(dataGlobal)
// },2000)
//drag window 16-6-1
moveWindow(ipcMain, dataGlobal)
//if ready show window
showWindowID(ipcMain, dataGlobal)
closeWindowID(ipcMain, dataGlobal)
focusWindowID(ipcMain, dataGlobal)
openWindowID(ipcMain, dataGlobal, BrowserWindow)
minWindowID(ipcMain, dataGlobal)
maxWindowID(ipcMain, dataGlobal)
quitApp(ipcMain, app)
// openDevtools(ipcMain, dataGlobal)
// closeDevtools(ipcMain, dataGlobal)
