
import React from 'react'
import {Item} from 'semantic-ui-react'
import {addFavoriteAlbum} from '../redux/actionCreators'
import {connect} from 'react-redux'

const AlbumItemFind = (props) => {

  return (
    <Item onClick={ () => props.addFavoriteAlbum(props.album)}>
      <Item.Image src={props.album.images[1]} alt={props.album.name} float="left" />
      <Item.Content>
        {props.album.name} - {props.album.artistName}
      </Item.Content>
    </Item>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteAlbum: (album) => dispatch(addFavoriteAlbum(album))
  }
}

export default connect(null, mapDispatchToProps)(AlbumItemFind)
