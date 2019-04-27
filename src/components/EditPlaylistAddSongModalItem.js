
import React from 'react'
import {Table, Button, Icon} from 'semantic-ui-react'
import {addEditPlaylistSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

const EditPlaylistAddSongModalItem = (props) => {

  return (
    <Table.Row >
      <Table.HeaderCell>{props.song.name}</Table.HeaderCell>
      <Table.HeaderCell>{props.song.artist}</Table.HeaderCell>
      <Table.HeaderCell>{props.song.album.name}</Table.HeaderCell>
      <Table.HeaderCell textAlign='center'>
        <Button icon onClick={() => props.addEditPlaylistSong(props.song)}>
          <Icon name="plus" />
        </Button>
      </Table.HeaderCell>
    </Table.Row>
  )
}

const mapDispatchToProps = dispatch => ({
  addEditPlaylistSong: (song) => dispatch(addEditPlaylistSong(song))
})

export default connect(null, mapDispatchToProps)(EditPlaylistAddSongModalItem)
