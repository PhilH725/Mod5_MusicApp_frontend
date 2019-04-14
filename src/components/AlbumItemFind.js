
import React from 'react'
import {List, Image} from 'semantic-ui-react'
import {addFavoriteAlbum} from '../redux/actionCreators'
import {connect} from 'react-redux'
// props.addFavoriteAlbum(props.album)

const AlbumItemFind = (props) => {

  return (
    <List.Item>
      <List.Content floated="right">
        <button onClick={()=>props.addFavoriteAlbum(props.album, props.user.id)}>Add to Favorites</button>
      </List.Content>
      <List.Content floated="left" verticalAlign="middle">
        <Image src={props.album.images[3]} size="mini" floated="left"/>
        <span>{props.album.name} - {props.album.artistName}</span>
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
