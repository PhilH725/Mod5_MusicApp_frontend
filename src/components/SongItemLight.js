
import React from 'react'

const SongItemLight = (props) => {

  return (
    <div>
      {props.song.name} - {props.song.artist} - {props.song.album}
    </div>
  )
}

export default SongItemLight
