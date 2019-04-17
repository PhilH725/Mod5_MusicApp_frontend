
import React from 'react'
import {Table, Button, Image, Icon} from 'semantic-ui-react'
import {addFavoriteAlbum} from '../redux/actionCreators'
import {connect} from 'react-redux'

const ArtistAlbumsModalItem = (props) => {

  const favoriteButton = () => {
    return (
      !props.myAlbums.map(a => a.name).includes(props.album.name) ?
      <Button inverted color="linkedin" icon onClick={()=>props.addFavoriteAlbum(props.album, props.user.id)}>
        <Icon name="star outline"/>
      </Button>
      :
      <Button inverted color="linkedin" disabled icon>
        <Icon name="star" />
      </Button>
    )
  }

  return (
    <Table.Row>
      <Table.HeaderCell id="my-artists-albums-image">
        <Image src={props.album.images[3]} alt={"album-art"} size="tiny"/>
      </Table.HeaderCell>
      <Table.HeaderCell id="my-artists-albums-name">
        {props.album.name}
      </Table.HeaderCell>
      <Table.HeaderCell id="table-button">
        {favoriteButton()}
      </Table.HeaderCell>
    </Table.Row>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  myAlbums: state.myAlbums
})

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteAlbum: (albumData, id) => dispatch(addFavoriteAlbum(albumData, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistAlbumsModalItem)
