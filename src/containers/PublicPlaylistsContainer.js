
import React, {Component} from 'react'
import {connect} from 'react-redux'

class PublicPlaylistsContainer extends Component {

  render() {
    return (
      <div>
        <h2>Top Playlists</h2>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.publishedPlaylists
})

export default connect(mapStateToProps)(PublicPlaylistsContainer)
