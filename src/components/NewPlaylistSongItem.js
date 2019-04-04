
import React from 'react'

const NewPlaylistSongItem = (props) => {

  return (
    <div onClick={()=>props.handleClick(props.song)}>
      {props.song.name} - {props.song.artist} - {props.song.album}
    </div>
  )
}

export default NewPlaylistSongItem
