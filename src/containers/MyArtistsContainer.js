
import React, {Component} from 'react'
import ArtistItem from '../components/ArtistItem'
import {connect} from 'react-redux'

class MyArtistsContainer extends Component {

  render() {
    return (
      <div>
        <h3>My Artists:</h3>
        {this.props.artists.map(a => <ArtistItem key={a.id} artist={a} />)}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    artists: state.myArtists
  })
}

export default connect(mapStateToProps)(MyArtistsContainer)
