
import React, {Component, Fragment} from 'react'
import AlbumItem from '../components/AlbumItem'
import {Accordion} from 'semantic-ui-react'
import {connect} from 'react-redux'

class MyAlbumsContainer extends Component {

  render() {
    return (
      <Fragment>
      <h3>My Albums:</h3>
      <Accordion>
        {this.props.albums.sort((a,b) => a.name.localeCompare(b.name)).map(a => <AlbumItem key={a.id} album={a} />)}
      </Accordion>
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
