
import React from 'react'

const MusicPlayer = props => {

  return (
    props.musicPlaybackStatus ?
    <div>music playing</div>
    :
    <div>nothing here</div>
  )
}

export default MusicPlayer
