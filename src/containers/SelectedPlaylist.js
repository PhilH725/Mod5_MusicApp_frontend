
import React, {Component} from 'react'
import PlaylistSongItem from '../components/PlaylistSongItem'
import {Header, Grid, Item} from 'semantic-ui-react'
import { connect } from 'react-redux'

class SelectedPlaylist extends Component {

  render() {
    return (
      this.props.selectedPlaylist ?
      <Grid.Column  width={12} id="selected-playlist-container">
        <Header as="h2">
          {this.props.selectedPlaylist.name}
        </Header>
        <Item.Group divided>
          {this.props.selectedPlaylist.songs.map(s => <PlaylistSongItem key={s.id} song={s} />)}
        </Item.Group>
      </Grid.Column>
      :
      <Grid.Column floated="right" width={12}>
        <h3>Choose or Create a playlist</h3>
      </Grid.Column>
    )
  }
}

const mapStateToProps = state => ({
  selectedPlaylist: state.selectedPlaylist,
  items: state.selectedPlaylist
})

export default connect(mapStateToProps)(SelectedPlaylist)
