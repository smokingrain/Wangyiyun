import { dispatch, getState } from '../redux/store/renderStore'
import { newMusic } from '../redux/actions/actions'
import $ from 'jquery'
import { changeTime } from '../common/util'
import { conv } from '../common/config'
import uuid from 'uuid'


export function play(){
  let music = getState().music
  let playing = music.playing
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
    
    if(localmusic.length>0){
      playing = {
        uuid: localmusic[0].uuid
      }    
      music.playing = playing
      dispatch(newMusic(music))
      return
    }
    
    return
  }
  console.log('isplaying')
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
$(audio).on('end', function () {
  let music = getState().music
  let playingMusic = music.playingMusic
  let loop = conv.get('loop')
  console.log('end.....')
  //xunhuan
  if(loop){
    play()
    return
  }
  if(playingMusic.length <= 0){
    play('default')
    return
  }
  //随机
  let random = conv.get('random')
  if(random){
    let randomm = parseInt(Math.random()*playingMusic.length)
    music.playing = playingMusic[random]
    dispatch(newMusic(music))
    return
  }

  //下一曲
  let playing = music.playing
  let playingIndex = null
  _.each(playingMusic, (item, index) => {
    if(playing.uuid == item.uuid){
      if(index+1 == playingMusic.length){
        playingIndex = 0
      }else{
        playingIndex = index +1
      }
    }
  })
  console.log('get ind')
  music.playing = playingMusic[playingIndex]
  dispatch(newMusic(music))
})



export function pause(){
  window.audio.pause()
}