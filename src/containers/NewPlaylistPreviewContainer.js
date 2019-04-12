
import React, {Component} from 'react'
import NewPlaylistSongItem from '../components/NewPlaylistSongItem'
import {List} from 'semantic-ui-react'
import {removeNewPlaylistSong} from '../redux/actionCreators'
import {connect} from 'react-redux'

class NewPlaylistPreviewContainer extends Component {

  render() {
    return (
      <List divided>
        {this.props.newPlaylistSongs.map(s => <NewPlaylistSongItem key={s.id} song={s} handleClick={this.props.removeNewPlaylistSong} buttonText={'minus'}/>)}
      </List>
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
