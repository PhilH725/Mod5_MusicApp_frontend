
import React, {Component} from 'react'
import PlaylistItem from '../components/PlaylistItem'
import PlaylistActionsBar from '../components/PlaylistActionsBar'
import {List, Grid} from 'semantic-ui-react'
import { connect } from 'react-redux'

class PlaylistList extends Component {

  render() {
    return (
      this.props.playlists.length > 0 ?
      <Grid.Column floated="left" width={4}>
        <List celled id="playlist-list">
          {this.props.playlists.map(p => <PlaylistItem key={p.id} data={p}/>)}
        </List>
        <PlaylistActionsBar />
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
