
import React from 'react'
import {List} from 'semantic-ui-react'

const PublishedPlaylistSongItem = (props) => {

  return (
    <List.Item>
      {props.song.name}
    </List.Item>
  )
}

export default PublishedPlaylistSongItem
