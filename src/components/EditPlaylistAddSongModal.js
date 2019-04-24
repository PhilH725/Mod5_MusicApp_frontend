
import React, {Component} from 'react'
import EditPlaylistAddSongModalItem from './EditPlaylistAddSongModalItem'
import {Modal, Table} from 'semantic-ui-react'
import {connect} from 'react-redux'

class EditPlaylistAddSongModal extends Component {

  render() {
    return (
      <Modal.Content>
      <Table celled selectable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={6}>Song Name</Table.HeaderCell>
            <Table.HeaderCell width={4}>Artist</Table.HeaderCell>
            <Table.HeaderCell width={4}>Album</Table.HeaderCell>
            <Table.HeaderCell width={1} textAlign='center'>Add?</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.props.availableSongs.map((s,index) => <EditPlaylistAddSongModalItem key={index} song={s} />)}
        </Table.Body>
      </Table>
      </Modal.Content>
    )
  }
}

const mapStateToProps = state => ({
  availableSongs: state.mySongs.filter(s => !state.editingPlaylist.songs.map(a => a.id).includes(s.id)).sort((a,b) => a.name.localeCompare(b.name))
})

export default connect(mapStateToProps)(EditPlaylistAddSongModal)
