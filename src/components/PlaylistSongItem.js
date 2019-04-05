
import React from 'react'
import {List} from 'semantic-ui-react'

const PlaylistSongItem = (props) => {

  return (
    <List.Item>
      {props.song.name}
    </List.Item>
  )
}

export default PlaylistSongItem
