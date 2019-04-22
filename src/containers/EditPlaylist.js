
import React, { Component } from 'react'
import EditPlaylistNameForm from '../components/EditPlaylistNameForm'
import {Header, Form} from 'semantic-ui-react'
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
