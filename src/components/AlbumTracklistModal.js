
import React, {Component, Fragment} from 'react'
import {Item, Header} from 'semantic-ui-react'

class AlbumTracklistModal extends Component {

  render() {
    return (
      <Fragment>
        <Header as="h2">{this.props.album.name}</Header>
        <Item.Group divided>
          {this.props.album.songs.map(s => <Item key={s.id}>
            <Item.Image size='mini' src={require('../img/image.png')} />

            <Item.Content>
              <Item.Header>{s.name}</Item.Header>
              <Item.Meta>{s.artist}</Item.Meta>
            </Item.Content>
          </Item>)}
        </Item.Group>
      </Fragment>
    )
  }
}

export default AlbumTracklistModal
