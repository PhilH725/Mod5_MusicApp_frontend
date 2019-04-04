
import React, {Component} from 'react'
import SongItemLight from '../components/SongItemLight'
import {connect} from 'react-redux'

class NewPlaylistPreviewContainer extends Component {

  render() {
    return (
      <div>
        ---------------------------

        {this.props.newPlaylistSongs.map(s => <SongItemLight key={s.id} song={s} />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newPlaylistSongs: state.newPlaylistSongs
})

export default connect(mapStateToProps)(NewPlaylistPreviewContainer)
