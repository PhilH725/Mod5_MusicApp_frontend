
import React, {Component, Fragment} from 'react'
import {Item, Header} from 'semantic-ui-react'
import AlbumTracklistModalItem from './AlbumTracklistModalItem'

class AlbumTracklistModal extends Component {

  render() {
    console.log(this.props.album)
    return (
      <Item.Group divided>
        {this.props.album.tracks.map((t,index) => <AlbumTracklistModalItem key={index} track={t} trackNumber={index + 1} image={this.props.album.images[3]} />)}
      </Item.Group>
    )
  }
}

export default AlbumTracklistModal
