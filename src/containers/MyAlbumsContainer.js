
import React, {Component, Fragment} from 'react'
import AlbumItemContainer from './AlbumItemContainer'
import {List, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'

class MyAlbumsContainer extends Component {

  render() {
    return (
      <Fragment>
        <Header id="my-music-header" as="h2" dividing>My Albums</Header>
        <List divided>
          {this.props.albums.sort((a,b) => a.name.localeCompare(b.name)).map(a => <AlbumItemContainer key={a.id} album={a} />)}
        </List>
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
