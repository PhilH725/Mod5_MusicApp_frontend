
import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import {removeEditPlaylistSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

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
        <Button icon onClick={() => props.removeEditPlaylistSong(props.song)}>
          <Icon name="minus" />
        </Button>
      </Table.HeaderCell>
    </Table.Row>
  )
}

const mapDispatchToProps = dispatch => ({
  removeEditPlaylistSong: (song) => dispatch(removeEditPlaylistSong(song))
})

export default connect(null, mapDispatchToProps)(EditPlaylistSongRow)
