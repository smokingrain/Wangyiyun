import { dispatch, getState } from '../redux/store/renderStore'
import { newMusic } from '../redux/actions/actions'

export function play(src, name){
  if(window.audio != null && window.audio.canPlayType){
    window.audio.src = src
    window.audio.play()
    let music = getState().music
    music.audio.path = src
    music.audio.name = name
    dispatch(newMusic(music))
  }
}

export function pause(){
  window.audio.pause()
}