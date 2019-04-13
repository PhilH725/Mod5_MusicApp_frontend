
import React, {Component} from 'react'
import AlbumTracklistModal from './AlbumTracklistModal'
import {Item, Button, Modal} from 'semantic-ui-react'
import {unfavoriteAlbum} from '../redux/actionCreators'
import {connect} from 'react-redux'

class AlbumItem extends Component {

  render() {
    console.log(this.props.album)
    return (
      <Item.Group>
        <Item>
          <Item.Image id="my-albums-image" size="tiny" src={this.props.album.image} alt={"album-art"} />
          <Item.Content id="my-albums-content">
            <Item.Header>{this.props.album.name}</Item.Header>
            <Item.Description>
              <p>Artist: Descendents</p>
              <p>Release Date: 1999</p>
            </Item.Description>
          </Item.Content>
          <Item.Content id="my-albums-button-container">
            <Modal trigger={<Button id="my-albums-button">More Info</Button>} centered={false}>
              <AlbumTracklistModal album={this.props.album} />
            </Modal>
            <Button id="my-albums-button" onClick={() => this.props.unfavoriteAlbum(this.props.album, this.props.user.id)}  size="mini">Unfavorite</Button>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    unfavoriteAlbum: (album, id) => dispatch(unfavoriteAlbum(album, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumItem)
