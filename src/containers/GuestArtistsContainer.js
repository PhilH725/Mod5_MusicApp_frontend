
import React, {Component} from 'react'
import ArtistItem from '../components/ArtistItem'
import {Link} from 'react-router-dom'
import {Header, Item} from 'semantic-ui-react'
import {connect} from 'react-redux'

class GuestArtistsContainer extends Component {

  render() {
    return (
      this.props.artists.length > 0 ?
      <Item.Group divided>
        <Header id="my-music-subheader" as="h3" dividing>Artists</Header>
        {this.props.artists.map(s => <ArtistItem key={s.id} artist={s} />)}
      </Item.Group>
      :
      <div>
        <Header id="my-music-subheader" as="h3" dividing>Artists</Header>
        <div>&emsp;<Link to="find_music">Find music to add here!</Link></div>
      </div>
    )
  }
  }

const mapStateToProps = state => ({
  artists: state.myArtists
})

  export default connect(mapStateToProps)(GuestArtistsContainer)
