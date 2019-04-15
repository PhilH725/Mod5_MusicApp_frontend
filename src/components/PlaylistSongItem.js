
import React, {Component} from 'react'
import {Item, Button} from 'semantic-ui-react'

class PlaylistSongItem extends Component {

  render() {
    return (
      <Item id="playlist-song-item" >
        <Item.Image size='mini' src={this.props.song.albumImage} alt={'album-art'} />
        <Item.Content>
          <Item.Header>{this.props.song.name.slice(0,50)}</Item.Header>
          <Item.Meta>{this.props.song.artist.slice(0,22)} - {this.props.song.album.slice(0,30)}</Item.Meta>
        </Item.Content>
        <Item.Content>
        <Button floated="right" onClick={()=>console.log(this.props.song)}>info</Button>
        </Item.Content>
      </Item>
    )
  }
}

export default PlaylistSongItem
