
import React, {Component} from 'react'
import NewPlaylistSongItem from '../components/NewPlaylistSongItem'
import {List, Header} from 'semantic-ui-react'
import {addNewPlaylistSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

class NewPlaylistAddSongsContainer extends Component {

  render() {
    return (
      this.props.songs.length > 0 ?
      <div id="new-playlist-my-songs-container">
        <Header id="new-playlist-header" as="h4">My song library</Header>
        <List divided>
          {this.props.songs.map(s => <NewPlaylistSongItem key={s.id} song={s} handleClick={this.props.addNewPlaylistSong} buttonText={'plus'}/>)}
        </List>
      </div>
      :
      <div>
        <Header id="new-playlist-header" as="h4">Favorite more songs to add them to your library</Header>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  songs: state.mySongs.filter(s => !state.newPlaylistSongs.includes(s)).sort((a,b) => a.name.localeCompare(b.name))
})

const mapDispatchToProps = dispatch => {
  return {
    addNewPlaylistSong: (song) => dispatch(addNewPlaylistSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistAddSongsContainer)
