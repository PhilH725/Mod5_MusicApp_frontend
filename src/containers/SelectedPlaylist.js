
import React, {Component, Fragment} from 'react'
import PlaylistSongItem from '../components/PlaylistSongItem'
import {Header, List, Grid} from 'semantic-ui-react'
import Test from '../test.js'
import { connect } from 'react-redux'

class SelectedPlaylist extends Component {

  // {this.props.selectedPlaylist.songs.map(s => <PlaylistSongItem key={s.id} song={s} />)}
  render() {
    return (
      this.props.selectedPlaylist ?
      <Fragment>
        <Grid.Column floated="right" width={12}>
        <Header as="h3">
          {this.props.selectedPlaylist.name}
        </Header>
        <List animated celled verticalAlign='middle'>
          <Test/>
        </List>
        </Grid.Column>
      </Fragment>
      :
      <div>
        <h3>Choose a playlist</h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedPlaylist: state.selectedPlaylist
})

export default connect(mapStateToProps)(SelectedPlaylist)
