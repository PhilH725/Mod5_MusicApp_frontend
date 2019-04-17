
import React, {Component} from 'react'
import AlbumItem from '../components/AlbumItem'
import {Link} from 'react-router-dom'
import {Header, Item} from 'semantic-ui-react'
import {connect} from 'react-redux'

class GuestAlbumsContainer extends Component {

  render() {
    return (
      this.props.albums.length > 0 ?
      <Item.Group>
        <Header id="my-music-subheader" as="h3" dividing>Albums</Header>
        {this.props.albums.map(s => <AlbumItem key={s.id} album={s} />)}
      </Item.Group>
      :
      <div>
        <Header id="my-music-subheader" as="h3" dividing>Albums</Header>
        <div>&emsp;<Link to="find_music">Find music to add here!</Link></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  albums: state.myAlbums
})

export default connect(mapStateToProps)(GuestAlbumsContainer)
