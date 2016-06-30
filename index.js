// if(/^#\/main/.test(location.hash)){
//   if(!global._mainLoaded){
//     global._mainLoaded = true
//     load('dist/main.js')
//   }
// }


load('dist/entry.js')



function load (file) {
  const script = document.createElement('script')
  script.src = file
  document.body.appendChild(script)
}

// ;(function(){
//   var win = require('nw.gui').Window.get()
//   window.addEventListener('keydown',function(evt){
//     if(evt.ctrlKey && evt.shiftKey && evt.keyCode === 73){
//       win.showDevTools()
//     }
//   })

// })()