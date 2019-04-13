
import React, {Component, Fragment} from 'react'
import AlbumItem from '../components/AlbumItem'
import {Item, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'

class MyAlbumsContainer extends Component {

  render() {
    return (
      <Fragment>
        <Header id="my-music-header" as="h2" dividing>My Albums</Header>
        <Item.Group divided>
          {this.props.albums.sort((a,b) => a.name.localeCompare(b.name)).map(a => <AlbumItem key={a.id} album={a} />)}
        </Item.Group>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return ({
    albums: state.myAlbums
  })
}

export default connect(mapStateToProps)(MyAlbumsContainer)
