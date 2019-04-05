
import React, {Component} from 'react'
import PlaylistItem from '../components/PlaylistItem'
import {List, Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'

// <div>
//   <h3>My Playlists</h3>
//   {this.props.playlists.map(p => <PlaylistItem key={p.id} data={p}/>)}
// </div>

class PlaylistList extends Component {

  render() {
    return (
      this.props.playlists.length > 0 ?
      <Grid.Column>
      <List celled id="playlist-list">
        {this.props.playlists.map(p => <PlaylistItem key={p.id} data={p}/>)}
      </List>
      </Grid.Column>
      :
      <h1>Loading...</h1>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.myPlaylists
})

export default connect(mapStateToProps)(PlaylistList)
