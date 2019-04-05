
import React, {Component} from 'react'
import AlbumItem from '../components/AlbumItem'
import {connect} from 'react-redux'

class MyAlbumsContainer extends Component {

  render() {
    return (
      <div>
        <h3>My Albums:</h3>
        {this.props.albums.map(a => <AlbumItem key={a.id} album={a} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    albums: state.myAlbums
  })
}

export default connect(mapStateToProps)(MyAlbumsContainer)
