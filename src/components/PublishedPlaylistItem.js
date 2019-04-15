
import React, {Component} from 'react'
import PublishedPlaylistSongItem from './PublishedPlaylistSongItem'
import {Item, List} from 'semantic-ui-react'

class PublishedPlaylistItem extends Component {

  render() {
    return (
      <Item>
        <h4>{this.props.playlist.name} - {this.props.playlist.user.user}</h4>
        <List>
          {this.props.playlist.songs.map(s => <PublishedPlaylistSongItem key={s.id} song={s}/>)}
        </List>
      </Item>
    )
  }
}

export default PublishedPlaylistItem
