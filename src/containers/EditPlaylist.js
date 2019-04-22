
import React, { Component } from 'react'
import EditPlaylistNameForm from '../components/EditPlaylistNameForm'
import EditPlaylistSongRow from '../components/EditPlaylistSongRow'
import {Header, Divider, Table} from 'semantic-ui-react'
import { connect } from 'react-redux'
import {fetchingPlaylistToEdit} from '../redux/actionCreators'

class EditPlaylist extends Component {

  componentDidMount() {
    this.props.fetchingPlaylistToEdit(this.props.id)
  }

  render() {
    return (
      this.props.editingPlaylist.songs ?
      <div>
        <Header id="my-music-header" as="h2" dividing>Editing Playlist</Header>
        <Header id="subheader-notice">{this.props.editingPlaylist.name}</Header>
        <EditPlaylistNameForm playlist={this.props.editingPlaylist} />
        <Divider />
        <Table celled selectable striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1} textAlign='center'>#</Table.HeaderCell>
              <Table.HeaderCell width={6}>Song Name</Table.HeaderCell>
              <Table.HeaderCell width={4}>Artist</Table.HeaderCell>
              <Table.HeaderCell width={3}>Album</Table.HeaderCell>
              <Table.HeaderCell width={2}>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.props.editingPlaylist.songs.map((s, index) => <EditPlaylistSongRow key={index} song={s} trackNumber={index+1}/>)}
          </Table.Body>
        </Table>
      </div>
      :
      <h3>loading...</h3>
    )
  }

}

const mapStateToProps = state => {
  return {
    editingPlaylist: state.editingPlaylist,
    songs: state.editingPlaylist.songs
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingPlaylistToEdit: (id) => dispatch(fetchingPlaylistToEdit(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPlaylist)
