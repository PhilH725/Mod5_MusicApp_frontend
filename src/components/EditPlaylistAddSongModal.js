
import React, {Component} from 'react'
import EditPlaylistAddSongModalItem from './EditPlaylistAddSongModalItem'
import {Modal} from 'semantic-ui-react'
import {connect} from 'react-redux'

class EditPlaylistAddSongModal extends Component {

  render() {
    debugger
    return (
      <Modal.Content>
        {this.props.availableSongs.map((s,index) => <EditPlaylistAddSongModalItem key={index} song={s} />)}
      </Modal.Content>
    )
  }
}

const mapStateToProps = state => ({
  availableSongs: state.mySongs.filter(s => !state.editingPlaylist.songs.map(a => a.id).includes(s.id))
})

export default connect(mapStateToProps)(EditPlaylistAddSongModal)
