
import React, {Component} from 'react'
import AlbumItemContainer from './AlbumItemContainer'
import {List} from 'semantic-ui-react'
import {connect} from 'react-redux'

class MyAlbumsContainer extends Component {

  render() {
    return (
      <List celled>
      <h3>My Albums:</h3>
        {this.props.albums.sort((a,b) => a.name.localeCompare(b.name)).map(a => <AlbumItemContainer key={a.id} album={a} />)}
      </List>
    )
  }
}

const mapStateToProps = state => {
  return ({
    albums: state.myAlbums
  })
}

export default connect(mapStateToProps)(MyAlbumsContainer)
