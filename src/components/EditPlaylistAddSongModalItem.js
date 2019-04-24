
import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'

const EditPlaylistAddSongModalItem = (props) => {

  return (
    <Table.Row >
      <Table.HeaderCell>{props.song.name}</Table.HeaderCell>
      <Table.HeaderCell>{props.song.artist}</Table.HeaderCell>
      <Table.HeaderCell>{props.song.album.name}</Table.HeaderCell>
      <Table.HeaderCell textAlign='center'>
        <Button icon>
          <Icon name="plus" />
        </Button>
      </Table.HeaderCell>
    </Table.Row>
  )
}

export default EditPlaylistAddSongModalItem
