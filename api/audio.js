import { dispatch, getState } from '../redux/store/renderStore'
import { newMusic } from '../redux/actions/actions'
import $ from 'jquery'
import { changeTime } from '../common/util'
import { conv } from '../common/config'



export function play(){
  let music = getState().music
  let playing = music.playing
  if(window.audio != null && window.audio.canPlayType){
    window.audio.src = playing.filePath
    window.audio.play()

    //监听获取总时间
    $(audio).off('loadedmetadata').on('loadedmetadata', function () {
      let total = parseInt(audio.duration)
      total = changeTime(total)
      $('#musictotaltime').text(total)
    })



    //坚挺获取状态
    $(audio).off('timeupdate').on('timeupdate', function (event){
      if(!isNaN(audio.duration)){
        let alltime = parseInt(audio.duration)
        // let tatal = change(alltime)
        let curr = parseInt(audio.currentTime)
        let nowtime = changeTime(curr)
        $('#musicnowtime').text(nowtime)
        let width = $('.musicProgress .progress-slot').width()
        let position = parseFloat(curr/alltime)*width
        console.log(curr, alltime, width)
        let position_ball = position-7
        $('.musicProgress .progress-bar').width(position)
        $('.musicProgress .progress-ball').css('left',position_ball+'px')
      }
    })






    //监听结束   自动下一曲   如果有循环  另做处理
    $(audio).off('end').on('end', function () {
      let nowMusic = getState().music
      let playingMusic = nowMusic.playingMusic
      let loop = conv.get('loop')
      if(loop){
        play()
        return
      }
      let random = conv.get('random')
      if(random){
        let randomm = parseInt(Math.random()*playingMusic.length)
      }
      if(playingMusic.length<=0){

      }
    })
  }
}

export function pause(){
  window.audio.pause()
}