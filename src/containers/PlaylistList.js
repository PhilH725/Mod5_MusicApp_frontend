
import React, {Component} from 'react'
import PlaylistItem from '../components/PlaylistItem'
import { connect } from 'react-redux'

class PlaylistList extends Component {

  render() {
    return (
      this.props.playlists.length > 0 ?
      <div>
        <h3>My Playlists</h3>
        {this.props.playlists.map(p => <PlaylistItem key={p.id} data={p}/>)}
      </div>
      :
      <h1>Loading...</h1>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.myPlaylists
})

export default connect(mapStateToProps)(PlaylistList)
