import { dispatch, getState } from '../redux/store/renderStore'
import { newMusic, newConfig } from '../redux/actions/actions'
import $ from 'jquery'
import { changeTime } from '../common/util'
import { conv } from '../common/config'
import uuid from 'uuid'
import { insertLocalMusicByClick } from '../dao/api'





export function play(){
  let music = getState().music
  let playing = music.playing
  music.pause = false
  if(!playing.uuid){
    let playingmusic = music.playingmusic
    if(playingmusic.length>0){
      playing = {
        uuid: playingmusic[0].uuid
      }    
      music.playing = playing
      dispatch(newMusic(music))
      return
    }
    
    if(music.localmusic.length>0){
      playing = {
        uuid: music.localmusic[0].uuid
      }    
      music.playing = playing
      dispatch(newMusic(music))
      return
    }
    return
  }
  dispatch(newMusic(music))
  if(window.audio != null && window.audio.canPlayType){
    window.audio.src = playing.filePath
    window.audio.play()
  }
}


//监听获取总时间
$(audio).on('loadedmetadata', function () {
  let total = parseInt(audio.duration)
  total = changeTime(total)
  $('#musictotaltime').text(total)
})

//坚挺获取状态
$(audio).on('timeupdate', function (event){
  if(!isNaN(audio.duration)){
    let alltime = parseInt(audio.duration)
    // let tatal = change(alltime)
    let curr = parseInt(audio.currentTime)
    let nowtime = changeTime(curr)
    $('#musicnowtime').text(nowtime)
    let width = $('.musicProgress .progress-slot').width()
    let position = parseFloat(curr/alltime)*width
    let position_ball = position-7
    $('.musicProgress .progress-bar').width(position)
    $('.musicProgress .progress-ball').css('left',position_ball+'px')
  }
})


//监听结束   自动下一曲   如果有循环  另做处理
$(audio).on('ended', function () {
  let music = getState().music
  let playingmusic = music.playingmusic
  let loop = conv.get('loop')

  //xunhuan
  if(loop || playingmusic.length <= 0){
    play()
    return
  }
  //随机
  let random = conv.get('random')
  if(random){
    let randomm = Math.floor(Math.random()*playingmusic.length)
    music.playing = playingmusic[random]
    dispatch(newMusic(music))
    return
  }

  //下一曲
  let playing = music.playing
  let playingIndex = null
  _.each(playingmusic, (item, index) => {
    if(playing.uuid == item.uuid){
      if(index+1 == playingmusic.length){
        playingIndex = 0
      }else{
        playingIndex = index +1
      }
    }
  })
  console.log('get ind')
  music.playing = playingmusic[playingIndex]
  dispatch(newMusic(music))
  animatePlay()
})

$(audio).on('pause', function () {
  let music = getState().music
  music.pause = true
  music.currTime = true
  dispatch(newMusic(music))
})

export function pause(){
  window.audio.pause()
}


export function goonPlay(){
  window.audio.play()
  let music = getState().music
  music.pause = false
  music.currTime = false
  dispatch(newMusic(music))
}


export function animatePlay(){
  let voice = conv.get('audio:voice')
  if(voice<4){
    setTimeout(function () {
      play()
    },300)
    return
  }
  let inter = setInterval(function () {
    let config = getState().config
    if(voice == 0){
      play()
      clearInterval(inter)
      let vo = conv.get('audio:voice')
      config.audio.voice = vo
    }else{
      voice = voice - 1
    }
    config.audio.voice = voice
    dispatch(newConfie(config))
  },50)
}