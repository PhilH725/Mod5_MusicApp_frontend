
import React, {Component, Fragment} from 'react'
import PublishedPlaylistSongItem from './PublishedPlaylistSongItem'
import {Table, Header, Button, Icon} from 'semantic-ui-react'
import {sharingPlaylist} from '../redux/actionCreators'
import {connect} from 'react-redux'

class PublishedPlaylistItem extends Component {

  myPlaylist = () => {
    return this.props.user.username === this.props.playlist.user.user
  }

  likeButton = () => {
    return (
      <Button inverted color={this.myPlaylist() ? "linkedin" : 'blue'} icon>
        <Icon name="heart" />
      </Button>
    )
  }

  shareButton = () => {
    return (
      <Button inverted color="linkedin" icon onClick={()=> this.props.sharingPlaylist(this.props.playlist)}>
        <Icon name="share" />
      </Button>
    )
  }

  render() {
    return (
      <Fragment>
        <Header id="published-playlists-name-header" as="h2">{this.props.playlist.name}</Header>
        <Table id="published-playlists-table" color="blue" fixed>
          <Table.Header id="published-playlists-info-header">
            <Table.Row>
              <Table.HeaderCell>Created By</Table.HeaderCell>
              <Table.HeaderCell>Likes</Table.HeaderCell>
              <Table.HeaderCell>{this.myPlaylist() ? "Un-share?" : "Liked?"}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row id="published-playlists-song-header">
              <Table.Cell>{this.props.playlist.user.user}</Table.Cell>
              <Table.Cell>500</Table.Cell>
              <Table.Cell>{this.myPlaylist() ? this.shareButton() : this.likeButton()}</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Song Name</Table.HeaderCell>
              <Table.HeaderCell>Artist Name</Table.HeaderCell>
              <Table.HeaderCell>Album Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.playlist.songs.map(s => <PublishedPlaylistSongItem key={s.id} song={s}/>)}
          </Table.Body>
        </Table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    sharingPlaylist: (playlist) => dispatch(sharingPlaylist(playlist))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublishedPlaylistItem)
