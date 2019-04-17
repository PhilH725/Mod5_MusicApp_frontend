
import React from 'react'
import {List, Image, Button} from 'semantic-ui-react'
import {addFavoriteAlbum} from '../redux/actionCreators'
import {connect} from 'react-redux'

const AlbumItemFind = (props) => {

  return (
    <List.Item>
      <List.Content floated="right">
        <Button inverted color={"linkedin"} onClick={()=>props.addFavoriteAlbum(props.album, props.user.id)}>Add to Favorites</Button>
      </List.Content>
      <List.Content floated="left" verticalAlign="middle">
        <Image src={props.album.images[3]} size="mini" floated="left"/>
        <span id="search-albums-text" >{props.album.name.slice(0,50)} - {props.album.artistName.slice(0,50)}</span>
      </List.Content>
    </List.Item>

  )
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteAlbum: (album, id) => dispatch(addFavoriteAlbum(album, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumItemFind)
