
import React, {Component, Fragment} from 'react'
import PublishedPlaylistItem from '../components/PublishedPlaylistItem'
import {Header} from 'semantic-ui-react'
import {connect} from 'react-redux'

class PublishedPlaylistsContainer extends Component {

  render() {
    return (
      <Fragment>
        <Header id="my-music-header" as="h2" dividing>Top Playlists</Header>
        {this.props.playlists.map(p => <PublishedPlaylistItem key={p.id} playlist={p}/>)}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.publishedPlaylists
})

export default connect(mapStateToProps)(PublishedPlaylistsContainer)
