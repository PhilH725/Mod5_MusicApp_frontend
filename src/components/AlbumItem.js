
import React, {Component} from 'react'
import {Item, Button} from 'semantic-ui-react'
import {unfavoriteAlbum} from '../redux/actionCreators'
import {connect} from 'react-redux'

class AlbumItem extends Component {

  render() {
    return (
      <Item.Group>
      <Item>
        <Item.Image id="my-album-dropdown-image" size="tiny" src={this.props.album.image} alt={"album-art"} />
        <Item.Content>
          <Item.Header>{this.props.album.name}</Item.Header>
          <Item.Description>
            more info...
          </Item.Description>
        </Item.Content>
        <Button onClick={() => this.props.unfavoriteAlbum(this.props.album, this.props.user.id)} float="right" size="mini">Unfavorite</Button>
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
