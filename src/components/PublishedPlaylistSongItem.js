
import React from 'react'
import {Table} from 'semantic-ui-react'

const PublishedPlaylistSongItem = (props) => {

  return (
    <Table.Row>
      <Table.Cell>{props.song.name.slice(0,40)}</Table.Cell>
      <Table.Cell>{props.song.artist}</Table.Cell>
      <Table.Cell>{props.song.album}</Table.Cell>
    </Table.Row>
  )
}

export default PublishedPlaylistSongItem
