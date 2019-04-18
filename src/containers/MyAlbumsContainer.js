
import React, {Component, Fragment} from 'react'
import AlbumItem from '../components/AlbumItem'
import {Item, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'

class MyAlbumsContainer extends Component {

  render() {
    return (
      this.props.loading ?
      <div>
        <Header id="my-music-header" as="h2" dividing>My Albums</Header>
        <Header id="subheader-notice" as="h3">
          Loading favorites...
        </Header>
      </div>
      :
      this.props.albums.length > 0 ?
      <Fragment>
        <Header id="my-music-header" as="h2" dividing>My Albums</Header>
        <Item.Group divided>
          {this.props.albums.sort((a,b) => a.name.localeCompare(b.name)).map(a => <AlbumItem key={a.id} album={a} />)}
        </Item.Group>
      </Fragment>
      :
      <div>
        <Header id="my-music-header" as="h2" dividing>My Albums</Header>
        <Header id="subheader-notice" as="h3">
          Doesn't look like there's anything here. Favorite some albums to get started!
        </Header>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loading: state.loading,
    albums: state.myAlbums
  })
}

export default connect(mapStateToProps)(MyAlbumsContainer)
