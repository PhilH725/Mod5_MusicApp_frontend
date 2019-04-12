
import React, {Component} from 'react'
import NewPlaylistSongItem from '../components/NewPlaylistSongItem'
import {List} from 'semantic-ui-react'
import {addNewPlaylistSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

class NewPlaylistAddSongsContainer extends Component {

  render() {
    return (
      <List divided>
        {this.props.songs.map(s => <NewPlaylistSongItem key={s.id} song={s} handleClick={this.props.addNewPlaylistSong} buttonText={'plus'}/>)}
        -----------------------------------------------
      </List>
    )
  }
}

const mapStateToProps = state => ({
  songs: state.mySongs.filter(s => !state.newPlaylistSongs.includes(s))
})

const mapDispatchToProps = dispatch => {
  return {
    addNewPlaylistSong: (song) => dispatch(addNewPlaylistSong(song))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistAddSongsContainer)
