// //it's for drag function
import $ from 'jquery'
import { ipcRenderer } from 'electron'
import { window_move_to, window_show_devtool } from '../communicate/communicationTypes'






const hash = location.hash
const winID = hash.slice(2)
















export let xx = null
const $html = $('html')
const $win = $(window)


window.addEventListener('dragover', function (e) {
  e.preventDefault()
  (e.originalEvent || e).dataTransfer.dropEffect = 'none'
})



window.addEventListener('dragstart', function (e) {
    e.preventDefault()
})




//about drag window
let dragging = false
let dx,dy
let drag = ['.drag'].join(', ')
let nodrag = ['.nodrag,input,button,textarea,select,.txt,.btn,p,span,h1,h2,h3,h4,h5,h6,h7'].join(', ')
$(document).delegate(drag,'mousedown',function(e){
  e = e.originalEvent || e
  var canDrag = $(e.target).closest(nodrag).length < 1 //过滤不能拖拽的
  if(!canDrag)
    return
  dragging = true
  ipcRenderer.send(window_move_to, {
    winID:winID,
    x:e.screenX,
    y:e.screenY,
    type:'mousedown'
  })
  // dx = e.screenX - win.x
  // dy = e.screenY -win.y
})

$win.on('mousemove',function(e){
  if(!dragging)
    return
  e = e.originalEvent || e
  e.preventDefault()
  $(document).css('cursor', 'move')
  ipcRenderer.send(window_move_to, {
    winID:winID,
    x:e.screenX,
    y:e.screenY,
    type:'move'
  })
  
})
$win.on('mouseup',function(){
  $(document).css('cursor', 'default')
  dragging = false
})

//about show devtools
// $(document).ready(function () {
//   $(window).on('keydown', function (evt) {
//     if(evt.ctrKey && evt.shiftKey && evt.keyCode === 73){
//       let obj = {
//         winID: winID
//       }
//       ipcRenderer.send(window_show_devtool, obj)
//     }
//   })
//   // $(window).on('keydown', function (evt) {
//   //   if(evt.ctrKey && evt.shiftKey && evt.keyCode === 74){
//   //     console.log('xxx')
//   //     let obj = {
//   //       winID: winID
//   //     }
//   //     // ipcRenderer.send(window_hide_devtool, obj)
//   //   }
//   // })
// })
