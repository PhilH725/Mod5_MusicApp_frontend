
import React, {Component} from 'react'
import NewPlaylistSongItem from '../components/NewPlaylistSongItem'
import {List, Header} from 'semantic-ui-react'
import {removeNewPlaylistSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

class NewPlaylistPreviewContainer extends Component {

  render() {
    return (
      this.props.newPlaylistSongs.length > 0 ?
      <div id="new-playlist-preview-container">
        <Header id="new-playlist-header" as="h4">Included songs</Header>
        <List divided>
          {this.props.newPlaylistSongs.map(s => <NewPlaylistSongItem key={s.id} song={s} handleClick={this.props.removeNewPlaylistSong} buttonText={'minus'}/>)}
        </List>
      </div>
      :
      <div id="new-playlist-preview-container">
        <Header id="new-playlist-header" as="h4">Add songs from your library</Header>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newPlaylistSongs: state.newPlaylistSongs
})

const mapDispatchToProps = dispatch => {
  return {
    removeNewPlaylistSong: (song) => dispatch(removeNewPlaylistSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistPreviewContainer)
