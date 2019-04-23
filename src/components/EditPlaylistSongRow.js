
import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'

const EditPlaylistSongRow = (props) => {

  return (
    <Table.Row >
      <Table.HeaderCell textAlign='center'>{props.trackNumber}</Table.HeaderCell>
      <Table.HeaderCell>{props.song.name}</Table.HeaderCell>
      <Table.HeaderCell>{props.song.artist}</Table.HeaderCell>
      <Table.HeaderCell>{props.song.album}</Table.HeaderCell>
      <Table.HeaderCell>
        <Button icon>
          <Icon name="arrow down" />
        </Button>
        <Button icon>
          <Icon name="arrow up" />
        </Button>
        <Button icon>
          <Icon name="minus" />
        </Button>
      </Table.HeaderCell>
    </Table.Row>
  )
}

export default EditPlaylistSongRow
