
import React, {Component} from 'react'
import PublishedPlaylistSongItem from './PublishedPlaylistSongItem'
import {Item, List, Segment, Header} from 'semantic-ui-react'

class PublishedPlaylistItem extends Component {

  render() {
    return (
      <Segment>
        <Item>
          <Header as="h4">{this.props.playlist.name} - {this.props.playlist.user.user}</Header>
          <List>
            {this.props.playlist.songs.map(s => <PublishedPlaylistSongItem key={s.id} song={s}/>)}
          </List>
        </Item>
      </Segment>
    )
  }
}

export default PublishedPlaylistItem
